"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ChevronLeft, ChevronRight, Loader2, CheckCircle2, Plus, Search, X, DoorClosed } from "lucide-react";
import { ops } from "./theme";
import OpsShell from "./OpsShell";
import { DOOR_CLASSES, EXTRAS, sellPrice } from "@/lib/pricing";

const CUSTOMERS = ["Dave test", "Aaron", "AA Takapuna", "Mono Rakau Ltd", "Sarah Thompson", "Whangaparaoa Rentals"];

// No pricing data was supplied for locations/deposit terms — kept as placeholder
// operational options until GDG provides real numbers for these.
const LOCATIONS = [
  { id: "warkworth", label: "Warkworth" },
  { id: "silverdale", label: "Silverdale" },
  { id: "mangawhai", label: "Mangawhai", fee: 65 },
];

const PAYMENT_TERMS = [
  { id: "deposit30", label: "30%" },
  { id: "deposit50", label: "50%" },
];

// Real pricing has no "no motor" line item (it's a free choice, not a priced one),
// so it's added here rather than in lib/pricing.ts.
const NO_MOTOR = { model: "None (Manual)", cost: 0 };

const GDG_BUSINESS = {
  name: "Garage Door Group Ltd",
  address: ["PO Box 318 Matakana", "Warkworth 0985", "New Zealand"],
  phone: "021 906 966",
  gstNumber: "86-699-451",
};

// Roller pricing in lib/pricing.ts stores each steel gauge x finish combo as its
// own flat material (e.g. "4mm-steel-a-series-colorsteel"). The wizard instead
// asks for the steel series here, then the finish on the next step — these are
// the two series, and resolveMaterialKey() below recombines the answer into the
// real material key for price lookups.
const ROLLER_SERIES = [
  { id: "4mm-steel-a-series", label: "4mm Steel A Series" },
  { id: "4mm-steel-b-series-with-tension-strip", label: "4mm Steel B Series with tension strip" },
];

const MARGIN_OPTIONS = ["20", "25", "30", "35", "40", "45", "50", "55"];
const DEFAULT_MARGIN_PCT = "40";
const AUTO_ADVANCE_DELAY = 220;

const BASE_STEPS = [
  { key: "customer", label: "Customer" },
  { key: "location", label: "Location" },
  { key: "doorType", label: "Door type" },
  { key: "material", label: "Material" },
  { key: "profile", label: "Profile" },
  { key: "insulation", label: "Insulation" },
  { key: "finish", label: "Finish" },
  { key: "color", label: "Colour" },
  { key: "size", label: "Size" },
  { key: "motor", label: "Motor" },
  { key: "addons", label: "Add-ons" },
  { key: "margin", label: "Margin" },
  { key: "payment", label: "Deposit" },
  { key: "review", label: "Review" },
] as const;

type StepKey = (typeof BASE_STEPS)[number]["key"];

type Answers = {
  customer: string;
  doorType: string;
  material: string; // sectional: full material key; roller: series id (see resolveMaterialKey)
  profile: string;
  finish: "" | "coloursteel" | "powdercoat" | "colorsteel" | "zincalume";
  color: string;
  sizeLabel: string;
  customSize: { width: number; height: number } | null;
  motorModel: string;
  insulation: "" | "yes" | "no";
  addonIds: string[];
  marginPct: string;
  location: string;
  payment: string;
  discountPct: string;
};

const EMPTY_ANSWERS: Answers = {
  customer: "",
  doorType: "",
  material: "",
  profile: "",
  finish: "",
  color: "",
  sizeLabel: "",
  customSize: null,
  motorModel: "",
  insulation: "",
  addonIds: [],
  marginPct: "",
  location: "",
  payment: "",
  discountPct: "",
};

const fmt = (n: number) =>
  new Intl.NumberFormat("en-NZ", { style: "currency", currency: "NZD" }).format(n);

function findDoorClass(key: string) {
  return DOOR_CLASSES.find((d) => d.key === key);
}

// Roller stores steel series + finish as one flat material key; sectional's
// `material` answer already IS the real key, so this is a no-op for it.
function resolveMaterialKey(doorType: string, material: string, finish: Answers["finish"]) {
  if (doorType === "roller" && material) {
    const suffix = finish === "zincalume" ? "zinc" : "colorsteel";
    return `${material}-${suffix}`;
  }
  return material;
}

function findMaterial(doorTypeKey: string, materialKey: string) {
  return findDoorClass(doorTypeKey)?.materials.find((m) => m.key === materialKey);
}
function findMotor(doorTypeKey: string, model: string) {
  if (model === NO_MOTOR.model) return NO_MOTOR;
  return findDoorClass(doorTypeKey)?.motors.find((m) => m.model === model);
}

// Roller has no profile/insulation pricing at all, so those steps never apply.
// The "Finish" step is skipped for sectional materials that are inherently
// powdercoat-only (nothing to choose between). "Colour" is skipped whenever the
// resolved material only offers one colour (e.g. Roller Zincalume) — it's
// auto-selected instead of asking a pointless single-option question.
function getSteps(doorType: string, material: string, finish: Answers["finish"]) {
  const isRoller = doorType === "roller";
  let list = BASE_STEPS.filter((s) => !(isRoller && (s.key === "profile" || s.key === "insulation")));

  if (!isRoller) {
    const mat = findMaterial(doorType, material);
    const powdercoatOnly = !!mat && mat.colours.length > 0 && mat.colours.every((c) => c.name.toLowerCase().includes("powder"));
    if (powdercoatOnly) list = list.filter((s) => s.key !== "finish");
  }

  const resolvedMaterial = findMaterial(doorType, resolveMaterialKey(doorType, material, finish));
  if (resolvedMaterial && resolvedMaterial.colours.length <= 1) {
    list = list.filter((s) => s.key !== "color");
  }

  return list;
}

type QuoteLine = { key: string; description: string; unitPrice: number };

// The line items that make up the quote, purely derived from the wizard answers.
// This is the "what the selections say the price should be" baseline — Review's
// preview mode lets staff override/remove/add to these before sending.
function buildAutoLines(a: Answers): QuoteLine[] {
  const doorClass = findDoorClass(a.doorType);
  const materialKey = resolveMaterialKey(a.doorType, a.material, a.finish);
  const material = findMaterial(a.doorType, materialKey);
  const size = material?.sizes.find((s) => s.label === a.sizeLabel);
  const effectiveColorName = a.color || (material && material.colours.length === 1 ? material.colours[0].name : "");
  const colour = material?.colours.find((c) => c.name === effectiveColorName);
  const motor = findMotor(a.doorType, a.motorModel);
  const location = LOCATIONS.find((l) => l.id === a.location);
  const marginFraction = (Number(a.marginPct) || Number(DEFAULT_MARGIN_PCT)) / 100;

  const lines: QuoteLine[] = [];

  if (a.customSize) {
    lines.push({
      key: "door",
      description: `${doorClass?.label ?? "Door"} — ${material?.label ?? ""} — Custom ${a.customSize.width}m x ${a.customSize.height}m`,
      unitPrice: 0,
    });
  } else if (size) {
    lines.push({
      key: "door",
      description: `${doorClass?.label ?? "Door"} — ${material?.label ?? ""} — ${size.label}`,
      unitPrice: size.price,
    });
  }
  if (a.insulation === "yes" && size?.insulationCost) {
    lines.push({ key: "insulation", description: "Insulation", unitPrice: size.insulationCost });
  }
  if (colour?.premium && size?.paintVariationCost) {
    lines.push({ key: "paintVariation", description: `Premium finish — ${colour.name}`, unitPrice: size.paintVariationCost });
  }
  if (motor && motor.cost > 0) {
    lines.push({ key: "motor", description: `Motor — ${motor.model}`, unitPrice: sellPrice(motor.cost, marginFraction) });
  }
  a.addonIds.forEach((key) => {
    const extra = EXTRAS.find((e) => e.key === key);
    if (extra) lines.push({ key: `addon:${key}`, description: extra.label, unitPrice: sellPrice(extra.cost, marginFraction) });
  });
  const locationFee = (location as { fee?: number } | undefined)?.fee ?? 0;
  if (locationFee > 0) {
    lines.push({ key: "location", description: `Travel — ${location?.label}`, unitPrice: locationFee });
  }
  return lines;
}

function OptionGrid({
  options,
  value,
  onChange,
  columns = 3,
}: {
  options: { id: string; label: string; sub?: string; disabled?: boolean }[];
  value: string;
  onChange: (id: string) => void;
  columns?: number;
}) {
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(180px, 300px))`, maxWidth: columns * 300 + (columns - 1) * 12 }}
    >
      {options.map((opt) => {
        const selected = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            disabled={opt.disabled}
            onClick={() => onChange(opt.id)}
            className="text-left border-2 rounded-lg p-3.5 transition-colors relative disabled:cursor-not-allowed disabled:opacity-40"
            style={{
              borderColor: selected ? ops.pink : ops.border,
              background: selected ? ops.pinkSoft : "#fff",
            }}
          >
            {selected && <Check className="w-4 h-4 absolute top-3 right-3" style={{ color: ops.pink }} />}
            <div className="font-bold text-sm pr-5 whitespace-nowrap" style={{ color: opt.disabled ? ops.muted : ops.ink }}>{opt.label}</div>
            {opt.sub && <div className="text-xs mt-1" style={{ color: ops.muted }}>{opt.sub}</div>}
          </button>
        );
      })}
    </div>
  );
}

function StepHeading({ title }: { title: string }) {
  return (
    <div className="mb-5">
      <h3 className="text-lg font-extrabold" style={{ color: ops.ink }}>{title}</h3>
    </div>
  );
}

function ReviewLine({
  label,
  value,
  sub,
  amount,
  onEdit,
}: {
  label: string;
  value: string;
  sub?: string;
  amount: number | null;
  onEdit: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 border-b" style={{ borderColor: ops.border }}>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: ops.muted }}>{label}</div>
        <div className="text-sm font-semibold mt-0.5 truncate" style={{ color: ops.ink }}>{value}</div>
        {sub && <div className="text-xs mt-0.5 truncate" style={{ color: ops.muted }}>{sub}</div>}
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-sm font-bold w-20 text-right" style={{ color: amount ? ops.ink : ops.muted }}>
          {amount ? fmt(amount) : amount === 0 ? "Included" : "—"}
        </span>
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-bold uppercase tracking-wide border rounded-md px-2.5 py-1.5"
          style={{ borderColor: ops.border, color: ops.ink }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

function JobInfoField({ label, value, onEdit }: { label: string; value: string; onEdit: () => void }) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: ops.muted }}>{label}</div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold" style={{ color: ops.ink }}>{value}</span>
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-bold uppercase tracking-wide"
          style={{ color: ops.pink }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

function QuoteLineRow({
  description,
  unitPrice,
  editableDescription,
  onDescriptionChange,
  onPriceChange,
  onRemove,
}: {
  description: string;
  unitPrice: number;
  editableDescription: boolean;
  onDescriptionChange: (v: string) => void;
  onPriceChange: (v: number) => void;
  onRemove: () => void;
}) {
  return (
    <tr className="border-b" style={{ borderColor: ops.border }}>
      <td className="py-3 pr-4 align-top">
        {editableDescription ? (
          <input
            type="text"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            className="w-full text-sm outline-none bg-transparent border-b"
            style={{ color: ops.ink, borderColor: ops.border }}
          />
        ) : (
          <span className="text-sm" style={{ color: ops.ink }}>{description}</span>
        )}
      </td>
      <td className="py-3 px-2 text-sm text-right align-top" style={{ color: ops.muted }}>1.00</td>
      <td className="py-3 px-2 align-top">
        <input
          type="number"
          step="0.01"
          value={unitPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-24 text-sm text-right outline-none bg-transparent border-b"
          style={{ color: ops.ink, borderColor: ops.border }}
        />
      </td>
      <td className="py-3 pl-2 text-sm text-right font-bold align-top whitespace-nowrap" style={{ color: ops.ink }}>{fmt(unitPrice)}</td>
      <td className="py-3 pl-2 align-top">
        <button type="button" onClick={onRemove} aria-label="Remove line" style={{ color: ops.muted }}>
          <X className="w-3.5 h-3.5" />
        </button>
      </td>
    </tr>
  );
}

export default function QuoteWizard() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [stepIndex, setStepIndex] = useState(0);
  const [furthest, setFurthest] = useState(0);
  const [visitedReview, setVisitedReview] = useState(false);
  const [returnToReview, setReturnToReview] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [savingDraft, setSavingDraft] = useState(false);
  const [showSendTooltip, setShowSendTooltip] = useState(false);
  const [customerSearch, setCustomerSearch] = useState("");
  const [customWidthInput, setCustomWidthInput] = useState("");
  const [customHeightInput, setCustomHeightInput] = useState("");
  const [marginCustomOpen, setMarginCustomOpen] = useState(false);
  const [reviewMode, setReviewMode] = useState<"edit" | "preview">("edit");
  const [lineOverrides, setLineOverrides] = useState<Record<string, number>>({});
  const [removedLineKeys, setRemovedLineKeys] = useState<string[]>([]);
  const [customLines, setCustomLines] = useState<{ id: string; description: string; unitPrice: number }[]>([]);

  const steps = getSteps(answers.doorType, answers.material, answers.finish);
  const REVIEW_INDEX = steps.length - 1;
  const step = steps[Math.min(stepIndex, REVIEW_INDEX)];

  // Mirrors latest state for goNext, which is scheduled via setTimeout for
  // auto-advance and must never read stale values from a closure.
  const latest = useRef({ stepIndex, returnToReview, doorType: answers.doorType, material: answers.material, finish: answers.finish });
  latest.current = { stepIndex, returnToReview, doorType: answers.doorType, material: answers.material, finish: answers.finish };

  function set<K extends keyof Answers>(key: K, value: Answers[K]) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function stepIndexOf(key: StepKey) {
    return steps.findIndex((s) => s.key === key);
  }

  function goToStep(i: number) {
    setStepIndex(i);
    setReturnToReview(visitedReview && i !== REVIEW_INDEX);
  }

  function goNext() {
    const { stepIndex: currentStep, returnToReview: rtr, doorType, material, finish } = latest.current;
    const reviewIdx = getSteps(doorType, material, finish).length - 1;
    if (rtr) {
      setReturnToReview(false);
      setStepIndex(reviewIdx);
      return;
    }
    const next = Math.min(currentStep + 1, reviewIdx);
    setStepIndex(next);
    setFurthest((f) => Math.max(f, next));
    if (next === reviewIdx) setVisitedReview(true);
  }

  // While editing a step from Review, selecting a value should not jump straight
  // back to Review — the user must explicitly click "Save and return to review".
  function chooseAndAdvance<K extends keyof Answers>(key: K, value: Answers[K]) {
    set(key, value);
    if (!returnToReview) setTimeout(goNext, AUTO_ADVANCE_DELAY);
  }

  function toggleAddon(id: string) {
    setAnswers((prev) => ({
      ...prev,
      addonIds: prev.addonIds.includes(id) ? prev.addonIds.filter((x) => x !== id) : [...prev.addonIds, id],
    }));
  }

  function handleBack() {
    setReturnToReview(false);
    setStepIndex((i) => Math.max(0, i - 1));
  }

  function handleSend() {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  }

  function handleSaveAndClose() {
    setSavingDraft(true);
    setTimeout(() => {
      router.push("/ops/quotes");
    }, 600);
  }

  function resetAll() {
    setAnswers(EMPTY_ANSWERS);
    setStepIndex(0);
    setFurthest(0);
    setVisitedReview(false);
    setReturnToReview(false);
    setSending(false);
    setSent(false);
    setLineOverrides({});
    setRemovedLineKeys([]);
    setCustomLines([]);
  }

  function updateLinePrice(key: string, value: number, isCustom: boolean) {
    if (isCustom) {
      setCustomLines((prev) => prev.map((c) => (c.id === key ? { ...c, unitPrice: value } : c)));
    } else {
      setLineOverrides((prev) => ({ ...prev, [key]: value }));
    }
  }

  function updateCustomLineDescription(id: string, description: string) {
    setCustomLines((prev) => prev.map((c) => (c.id === id ? { ...c, description } : c)));
  }

  function removeLine(key: string, isCustom: boolean) {
    if (isCustom) {
      setCustomLines((prev) => prev.filter((c) => c.id !== key));
    } else {
      setRemovedLineKeys((prev) => [...prev, key]);
    }
  }

  function addCustomLine() {
    const id = `custom-${Date.now()}`;
    setCustomLines((prev) => [...prev, { id, description: "New item", unitPrice: 0 }]);
  }

  const materialKey = resolveMaterialKey(answers.doorType, answers.material, answers.finish);
  const material = findMaterial(answers.doorType, materialKey);
  const effectiveColorName = answers.color || (material && material.colours.length === 1 ? material.colours[0].name : "");

  const canProceed = (() => {
    switch (step.key) {
      case "customer":
        return answers.customer !== "";
      case "location":
        return answers.location !== "";
      case "doorType":
        return answers.doorType !== "";
      case "material":
        return answers.material !== "";
      case "profile":
        return answers.profile !== "";
      case "insulation":
        return answers.insulation !== "";
      case "finish":
        return answers.doorType === "roller"
          ? answers.finish === "colorsteel" || answers.finish === "zincalume"
          : answers.finish === "coloursteel";
      case "color":
        return effectiveColorName !== "";
      case "size":
        return answers.sizeLabel !== "" || answers.customSize !== null;
      case "motor":
        return answers.motorModel !== "";
      case "margin":
        return answers.marginPct !== "";
      case "payment":
        return answers.payment !== "";
      default:
        return true;
    }
  })();

  const customerLabel = answers.customer;
  const doorClass = findDoorClass(answers.doorType);
  const colour = material?.colours.find((c) => c.name === effectiveColorName);
  const size = material?.sizes.find((s) => s.label === answers.sizeLabel);
  const motor = findMotor(answers.doorType, answers.motorModel);
  const location = LOCATIONS.find((l) => l.id === answers.location);
  const payment = PAYMENT_TERMS.find((p) => p.id === answers.payment);
  const selectedAddons = EXTRAS.filter((e) => answers.addonIds.includes(e.key));
  const nextLabel = returnToReview ? "Save and return to review" : "Next";
  const marginFraction = (Number(answers.marginPct) || Number(DEFAULT_MARGIN_PCT)) / 100;

  // Colours available after choosing a finish: Coloursteel hides the "Powder
  // Coat" option (that belongs to the separate, not-yet-built Powdercoat path).
  // Materials that are powdercoat-only, and Roller, fall back to their full list.
  const rawColours = material?.colours ?? [];
  const coloursteelColours = rawColours.filter((c) => !c.name.toLowerCase().includes("powder"));
  const colourOptions =
    answers.doorType !== "roller" && answers.finish === "coloursteel" && coloursteelColours.length > 0
      ? coloursteelColours
      : rawColours;

  // Line items — the baseline derived from wizard answers, then overrides/removals/
  // custom additions from Review's preview mode layered on top. This combined list
  // is the single source of truth for the total and for what gets sent.
  const autoLines = buildAutoLines(answers);
  const visibleAutoLines = autoLines
    .filter((l) => !removedLineKeys.includes(l.key))
    .map((l) => ({ key: l.key, description: l.description, unitPrice: lineOverrides[l.key] ?? l.unitPrice, isCustom: false }));
  const allLines = [
    ...visibleAutoLines,
    ...customLines.map((c) => ({ key: c.id, description: c.description, unitPrice: c.unitPrice, isCustom: true })),
  ];
  const rawSubtotal = allLines.reduce((sum, l) => sum + (Number(l.unitPrice) || 0), 0);
  const discountPct = Math.min(100, Math.max(0, Number(answers.discountPct) || 0));
  const discountAmount = Math.round(rawSubtotal * (discountPct / 100));
  const subtotal = rawSubtotal - discountAmount;
  const gst = subtotal * 0.15;
  const total = subtotal + gst;
  const quote = { rawSubtotal, discountPct, discountAmount, subtotal, gst, total };

  const saveAndCloseButton = (
    <button
      type="button"
      disabled={savingDraft}
      onClick={handleSaveAndClose}
      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide px-4 py-2.5 rounded-md border disabled:opacity-60"
      style={{ borderColor: ops.border, color: ops.ink, whiteSpace: "nowrap" }}
    >
      {savingDraft && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
      {savingDraft ? "Saving…" : "Save and close"}
    </button>
  );

  if (sent) {
    return (
      <OpsShell title="New quote">
        <div className="max-w-md mx-auto text-center py-16">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: ops.pinkSoft }}
          >
            <CheckCircle2 className="w-7 h-7" style={{ color: ops.pink }} />
          </div>
          <h3 className="text-xl font-extrabold mb-2" style={{ color: ops.ink }}>Quote sent to {customerLabel}</h3>
          <p className="text-sm mb-8" style={{ color: ops.muted }}>
            A copy of this {fmt(quote.total)} quote has been emailed for review and approval.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={resetAll}
              className="text-xs font-bold uppercase tracking-wide px-5 py-3 rounded-md text-white"
              style={{ background: ops.pink }}
            >
              Create another quote
            </button>
            <Link
              href="/ops/quotes"
              className="text-xs font-bold uppercase tracking-wide px-5 py-3 rounded-md border"
              style={{ borderColor: ops.border, color: ops.ink }}
            >
              Back to quotes
            </Link>
          </div>
        </div>
      </OpsShell>
    );
  }

  const productReviewLines = [
    { label: "Door type", value: doorClass?.label ?? "—", amount: null as number | null, onEdit: () => goToStep(stepIndexOf("doorType")) },
    { label: "Material", value: material?.label ?? "—", amount: autoLines.find((l) => l.key === "door")?.unitPrice ?? null, onEdit: () => goToStep(stepIndexOf("material")) },
    ...(stepIndexOf("profile") >= 0
      ? [{ label: "Profile", value: answers.profile || "—", amount: answers.profile ? 0 : null, onEdit: () => goToStep(stepIndexOf("profile")) }]
      : []),
    ...(stepIndexOf("insulation") >= 0
      ? [{
          label: "Insulation",
          value: answers.insulation === "yes" ? "Yes" : answers.insulation === "no" ? "No" : "—",
          amount: answers.insulation ? autoLines.find((l) => l.key === "insulation")?.unitPrice ?? 0 : null,
          onEdit: () => goToStep(stepIndexOf("insulation")),
        }]
      : []),
    ...(stepIndexOf("finish") >= 0
      ? [{
          label: "Finish",
          value:
            answers.finish === "coloursteel" ? "Coloursteel" :
            answers.finish === "colorsteel" ? "Colorsteel" :
            answers.finish === "zincalume" ? "Zincalume" : "—",
          amount: null,
          onEdit: () => goToStep(stepIndexOf("finish")),
        }]
      : []),
    ...(stepIndexOf("color") >= 0
      ? [{ label: "Colour", value: colour?.name ?? "—", amount: colour ? autoLines.find((l) => l.key === "paintVariation")?.unitPrice ?? 0 : null, onEdit: () => goToStep(stepIndexOf("color")) }]
      : []),
    {
      label: "Size",
      value: answers.customSize ? `${answers.customSize.width}m x ${answers.customSize.height}m (custom)` : size?.label ?? "—",
      amount: null,
      onEdit: () => goToStep(stepIndexOf("size")),
    },
    { label: "Motor", value: motor?.model ?? "—", amount: motor ? autoLines.find((l) => l.key === "motor")?.unitPrice ?? 0 : null, onEdit: () => goToStep(stepIndexOf("motor")) },
    {
      label: "Add-ons",
      value: selectedAddons.length ? `${selectedAddons.length} selected` : "—",
      sub: selectedAddons.length ? selectedAddons.map((a) => a.label).join(", ") : undefined,
      amount: selectedAddons.length ? selectedAddons.reduce((sum, a) => sum + sellPrice(a.cost, marginFraction), 0) : null,
      onEdit: () => goToStep(stepIndexOf("addons")),
    },
    {
      label: "Margin",
      value: answers.marginPct ? `${answers.marginPct}%` : "—",
      amount: null,
      onEdit: () => goToStep(stepIndexOf("margin")),
    },
    {
      label: "Deposit",
      value: payment ? `${payment.label} deposit` : "—",
      amount: null,
      onEdit: () => goToStep(stepIndexOf("payment")),
    },
  ];

  const filteredCustomers =
    customerSearch.trim() === "" ? [] : CUSTOMERS.filter((c) => c.toLowerCase().includes(customerSearch.trim().toLowerCase()));

  return (
    <OpsShell title="New quote" actions={saveAndCloseButton}>
      <div>
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold" style={{ color: ops.muted }}>
              Step {stepIndex + 1} of {steps.length}
            </span>
            <span className="text-xs font-semibold" style={{ color: ops.ink }}>{step.label}</span>
          </div>
          <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: ops.border }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${((stepIndex + 1) / steps.length) * 100}%`, background: ops.pink }}
            />
          </div>
        </div>

        {/* Step content */}
        <div>
          {step.key === "customer" && (
            <div>
              <StepHeading title="Who is this quote for?" />
              <div className="max-w-sm">
                <div className="relative mb-3">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: ops.muted }} />
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search customers…"
                    value={customerSearch}
                    onChange={(e) => setCustomerSearch(e.target.value)}
                    className="w-full border rounded-md pl-9 pr-3 py-2.5 text-sm"
                    style={{ borderColor: ops.border, color: ops.ink, background: "#fff" }}
                  />
                </div>
                {filteredCustomers.length > 0 && (
                  <div className="flex flex-col gap-2 mb-4">
                    {filteredCustomers.map((c) => {
                      const selected = answers.customer === c;
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => chooseAndAdvance("customer", c)}
                          className="text-left border-2 rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors"
                          style={{ borderColor: selected ? ops.pink : ops.border, background: selected ? ops.pinkSoft : "#fff", color: ops.ink }}
                        >
                          {c}
                        </button>
                      );
                    })}
                  </div>
                )}
                {customerSearch.trim() !== "" && filteredCustomers.length === 0 && (
                  <p className="text-sm mb-4" style={{ color: ops.muted }}>No customers found.</p>
                )}
                <button
                  type="button"
                  disabled
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-2.5 rounded-md border cursor-not-allowed opacity-40"
                  style={{ borderColor: ops.border, color: ops.muted }}
                >
                  <Plus className="w-4 h-4" /> Add new customer
                </button>
              </div>
            </div>
          )}

          {step.key === "location" && (
            <div>
              <StepHeading title="Job location" />
              <OptionGrid columns={3} value={answers.location} onChange={(id) => chooseAndAdvance("location", id)} options={LOCATIONS} />
            </div>
          )}

          {step.key === "doorType" && (
            <div>
              <StepHeading title="What type of door?" />
              <OptionGrid
                columns={3}
                value={answers.doorType}
                onChange={(id) => {
                  setAnswers((prev) => ({
                    ...prev,
                    doorType: id,
                    material: "",
                    profile: "",
                    finish: "",
                    color: "",
                    sizeLabel: "",
                    customSize: null,
                    motorModel: "",
                    insulation: "",
                  }));
                  if (!returnToReview) setTimeout(goNext, AUTO_ADVANCE_DELAY);
                }}
                options={DOOR_CLASSES.map((d) => ({ id: d.key, label: d.label }))}
              />
            </div>
          )}

          {step.key === "material" && (
            <div>
              <StepHeading title="Choose a material" />
              <OptionGrid
                columns={answers.doorType === "roller" ? 2 : Math.min(doorClass?.materials.length ?? 3, 4)}
                value={answers.material}
                onChange={(id) => {
                  setAnswers((prev) => ({ ...prev, material: id, profile: "", finish: "", color: "", sizeLabel: "", customSize: null }));
                  if (!returnToReview) setTimeout(goNext, AUTO_ADVANCE_DELAY);
                }}
                options={
                  answers.doorType === "roller"
                    ? ROLLER_SERIES
                    : (doorClass?.materials ?? []).map((m) => {
                        const match = m.label.match(/^(.*?)\s*\(([^)]+)\)$/);
                        return match ? { id: m.key, label: match[1], sub: match[2] } : { id: m.key, label: m.label };
                      })
                }
              />
            </div>
          )}

          {step.key === "profile" && (
            <div>
              <StepHeading title="Panel profile" />
              <OptionGrid
                columns={4}
                value={answers.profile}
                onChange={(id) => chooseAndAdvance("profile", id)}
                options={(material?.profiles ?? []).map((p) => ({ id: p, label: p }))}
              />
            </div>
          )}

          {step.key === "insulation" && (
            <div>
              <StepHeading title="Insulation" />
              <OptionGrid
                columns={2}
                value={answers.insulation}
                onChange={(id) => chooseAndAdvance("insulation", id as "yes" | "no")}
                options={[
                  { id: "yes", label: "Yes" },
                  { id: "no", label: "No" },
                ]}
              />
            </div>
          )}

          {step.key === "finish" && (
            <div>
              <StepHeading title="Choose a finish" />
              <OptionGrid
                columns={2}
                value={answers.finish}
                onChange={(id) => chooseAndAdvance("finish", id as Answers["finish"])}
                options={
                  answers.doorType === "roller"
                    ? [
                        { id: "colorsteel", label: "Colorsteel" },
                        { id: "zincalume", label: "Zincalume" },
                      ]
                    : [
                        { id: "coloursteel", label: "Coloursteel" },
                        { id: "powdercoat", label: "Powdercoat", sub: "Coming soon", disabled: true },
                      ]
                }
              />
            </div>
          )}

          {step.key === "color" && (
            <div>
              <StepHeading title="Colour" />
              <OptionGrid
                columns={3}
                value={answers.color}
                onChange={(id) => chooseAndAdvance("color", id)}
                options={colourOptions.map((c) => ({ id: c.name, label: c.name }))}
              />
            </div>
          )}

          {step.key === "size" && (
            <div>
              <StepHeading title="Door size" />

              <div className="max-w-md mb-6 border rounded-lg p-4" style={{ borderColor: ops.border, background: ops.bg }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: ops.muted }}>Custom size</p>
                <div className="flex gap-3 items-end">
                  <div className="flex-1">
                    <label className="text-xs font-bold uppercase tracking-wide block mb-1" style={{ color: ops.muted }}>Width (m)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={customWidthInput}
                      onChange={(e) => setCustomWidthInput(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                      style={{ borderColor: ops.border, color: ops.ink, background: "#fff" }}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-bold uppercase tracking-wide block mb-1" style={{ color: ops.muted }}>Height (m)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={customHeightInput}
                      onChange={(e) => setCustomHeightInput(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                      style={{ borderColor: ops.border, color: ops.ink, background: "#fff" }}
                    />
                  </div>
                  <button
                    type="button"
                    disabled={!customWidthInput || !customHeightInput}
                    onClick={() => {
                      const width = Number(customWidthInput);
                      const height = Number(customHeightInput);
                      setAnswers((prev) => ({ ...prev, sizeLabel: "", customSize: { width, height } }));
                      if (!returnToReview) setTimeout(goNext, AUTO_ADVANCE_DELAY);
                    }}
                    className="text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-md disabled:opacity-40 shrink-0"
                    style={{ background: ops.pink, color: "#fff" }}
                  >
                    Use size
                  </button>
                </div>
                {answers.customSize && (
                  <div className="flex items-center gap-2 mt-3 text-sm font-semibold" style={{ color: ops.ink }}>
                    <Check className="w-4 h-4" style={{ color: ops.pink }} />
                    Using custom size: {answers.customSize.width}m x {answers.customSize.height}m
                    <button
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, customSize: null }))}
                      className="text-xs underline"
                      style={{ color: ops.muted }}
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>

              <OptionGrid
                columns={4}
                value={answers.sizeLabel}
                onChange={(id) => {
                  setAnswers((prev) => ({ ...prev, sizeLabel: id, customSize: null }));
                  if (!returnToReview) setTimeout(goNext, AUTO_ADVANCE_DELAY);
                }}
                options={(material?.sizes ?? []).map((s) => ({ id: s.label, label: s.label }))}
              />
            </div>
          )}

          {step.key === "motor" && (
            <div>
              <StepHeading title="Motor type" />
              <OptionGrid
                columns={2}
                value={answers.motorModel}
                onChange={(id) => chooseAndAdvance("motorModel", id)}
                options={[NO_MOTOR, ...(doorClass?.motors ?? [])].map((m) => ({ id: m.model, label: m.model }))}
              />
            </div>
          )}

          {step.key === "addons" && (
            <div>
              <StepHeading title="Add-ons" />

              <div className="flex flex-col gap-2 max-w-md mb-6">
                {EXTRAS.map((extra) => {
                  const checked = answers.addonIds.includes(extra.key);
                  return (
                    <label
                      key={extra.key}
                      className="flex items-center gap-3 border rounded-md px-3 py-2.5 text-sm cursor-pointer transition-colors"
                      style={{ borderColor: checked ? ops.pink : ops.border, background: checked ? ops.pinkSoft : "#fff" }}
                    >
                      <input type="checkbox" checked={checked} onChange={() => toggleAddon(extra.key)} />
                      <span className="font-semibold flex-1" style={{ color: ops.ink }}>{extra.label}</span>
                      <span className="text-xs font-bold" style={{ color: ops.muted }}>+{fmt(sellPrice(extra.cost, marginFraction))}</span>
                    </label>
                  );
                })}
              </div>

              <button
                type="button"
                disabled
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-2.5 rounded-md border cursor-not-allowed opacity-40"
                style={{ borderColor: ops.border, color: ops.muted }}
              >
                <Plus className="w-4 h-4" /> Add custom add-on
              </button>
            </div>
          )}

          {step.key === "margin" && (
            <div>
              <StepHeading title="Margin added" />
              <OptionGrid
                columns={5}
                value={MARGIN_OPTIONS.includes(answers.marginPct) ? answers.marginPct : marginCustomOpen ? "custom" : ""}
                onChange={(id) => {
                  if (id === "custom") {
                    setMarginCustomOpen(true);
                  } else {
                    setMarginCustomOpen(false);
                    chooseAndAdvance("marginPct", id);
                  }
                }}
                options={[...MARGIN_OPTIONS.map((p) => ({ id: p, label: `${p}%` })), { id: "custom", label: "Custom" }]}
              />
              {(marginCustomOpen || (answers.marginPct !== "" && !MARGIN_OPTIONS.includes(answers.marginPct))) && (
                <div className="mt-4 max-w-[160px]">
                  <label className="text-xs font-bold uppercase tracking-wide block mb-1" style={{ color: ops.muted }}>Custom margin (%)</label>
                  <div className="relative">
                    <input
                      type="number"
                      min={0}
                      max={95}
                      autoFocus
                      value={answers.marginPct}
                      onChange={(e) => set("marginPct", e.target.value)}
                      className="w-full border rounded-md px-3 py-2.5 text-sm pr-7"
                      style={{ borderColor: ops.border, color: ops.ink, background: "#fff" }}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: ops.muted }}>%</span>
                  </div>
                </div>
              )}
              <div className="mt-6 max-w-sm border rounded-lg p-4" style={{ borderColor: ops.border, background: ops.bg }}>
                <div className="flex justify-between text-sm font-bold" style={{ color: ops.ink }}>
                  <span>Quote subtotal</span>
                  <span>{fmt(quote.rawSubtotal)}</span>
                </div>
              </div>
            </div>
          )}

          {step.key === "payment" && (
            <div>
              <StepHeading title="Deposit terms" />
              <OptionGrid columns={2} value={answers.payment} onChange={(id) => chooseAndAdvance("payment", id)} options={PAYMENT_TERMS} />
            </div>
          )}

          {step.key === "review" && (
            <div>
              <StepHeading title="Review & send" />

              <div className="inline-flex rounded-lg border p-1 mb-6" style={{ borderColor: ops.border }}>
                {(["edit", "preview"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setReviewMode(mode)}
                    className="text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-md transition-colors"
                    style={{ background: reviewMode === mode ? ops.pink : "transparent", color: reviewMode === mode ? "#fff" : ops.muted }}
                  >
                    {mode === "edit" ? "Edit selections" : "Customer preview"}
                  </button>
                ))}
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8">
                <div className="md:w-[280px] shrink-0">
                  <div className="rounded-xl p-6 md:sticky md:top-6" style={{ background: ops.navy }}>
                    <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: "#9698B5" }}>
                      Estimated total
                    </p>
                    <p className="text-3xl font-extrabold mb-4" style={{ color: "#fff" }}>{fmt(quote.total)}</p>
                    <div className="space-y-2 text-sm mb-4" style={{ color: "#C7C9DE" }}>
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{fmt(quote.rawSubtotal)}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="text-[11px] font-bold uppercase tracking-wide block mb-1.5" style={{ color: "#9698B5" }}>
                        Discount (%)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={answers.discountPct}
                          onChange={(e) => set("discountPct", e.target.value)}
                          placeholder="0"
                          className="w-full rounded-md px-3 py-2.5 text-sm pr-8 outline-none"
                          style={{ background: ops.navySoft, border: `1.5px solid ${ops.navyBorder}`, color: "#fff" }}
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "#9698B5" }}>%</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm mb-5 pb-5 border-b" style={{ color: "#C7C9DE", borderColor: ops.navyBorder }}>
                      {quote.discountPct > 0 && (
                        <div className="flex justify-between" style={{ color: "#6FDBA0" }}>
                          <span>Discount</span>
                          <span>-{fmt(quote.discountAmount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>GST (15%)</span>
                        <span>{fmt(quote.gst)}</span>
                      </div>
                    </div>
                    <div
                      className="relative"
                      onMouseEnter={() => setShowSendTooltip(true)}
                      onMouseLeave={() => setShowSendTooltip(false)}
                    >
                      {showSendTooltip && (
                        <div
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-md text-xs whitespace-nowrap z-10"
                          style={{ background: ops.ink, color: "#fff" }}
                        >
                          This auto-sends a Xero quote to the customer
                          <span
                            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent"
                            style={{ borderTopColor: ops.ink }}
                          />
                        </div>
                      )}
                      <button
                        type="button"
                        disabled={sending}
                        onClick={handleSend}
                        className="w-full flex items-center justify-center gap-2 text-white text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-md disabled:opacity-70"
                        style={{ background: ops.pink }}
                      >
                        {sending && <Loader2 className="w-4 h-4 animate-spin" />}
                        {sending ? "Sending…" : "Send quote"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  {reviewMode === "edit" ? (
                    <div>
                      <div className="flex flex-wrap gap-x-10 gap-y-3 mb-6 pb-6 border-b" style={{ borderColor: ops.border }}>
                        <JobInfoField label="Customer" value={customerLabel || "—"} onEdit={() => goToStep(stepIndexOf("customer"))} />
                        <JobInfoField label="Job location" value={location?.label ?? "—"} onEdit={() => goToStep(stepIndexOf("location"))} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                        {productReviewLines.map((line) => (
                          <ReviewLine key={line.label} {...line} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="border rounded-xl p-8" style={{ borderColor: ops.border }}>
                      <div className="flex items-start justify-between mb-8">
                        <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: ops.ink }}>QUOTE</h2>
                        <div className="w-16 h-16 rounded-md flex flex-col items-center justify-center text-center px-1 gap-1 shrink-0" style={{ background: ops.navy }}>
                          <DoorClosed className="w-5 h-5" style={{ color: "#fff" }} />
                          <span className="text-[6.5px] font-bold uppercase tracking-wide leading-tight" style={{ color: "#fff" }}>Garage Door Group</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8 pb-8 mb-8 border-b text-sm" style={{ borderColor: ops.border }}>
                        <div>
                          <p className="font-bold mb-1" style={{ color: ops.ink }}>To</p>
                          <p style={{ color: ops.ink }}>{customerLabel || "—"}</p>
                          {location && <p style={{ color: ops.muted }}>{location.label}</p>}
                          <p className="font-bold mt-5 mb-1" style={{ color: ops.ink }}>Quote number</p>
                          <p style={{ color: ops.muted }}>Draft</p>
                        </div>
                        <div>
                          <p className="font-bold mb-1" style={{ color: ops.ink }}>From</p>
                          <p style={{ color: ops.ink }}>{GDG_BUSINESS.name}</p>
                          <p style={{ color: ops.muted }}>
                            {GDG_BUSINESS.address.map((line) => (
                              <span key={line}>{line}<br /></span>
                            ))}
                            Ph: {GDG_BUSINESS.phone}
                          </p>
                          <p className="font-bold mt-5 mb-1" style={{ color: ops.ink }}>GST Number</p>
                          <p style={{ color: ops.muted }}>{GDG_BUSINESS.gstNumber}</p>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[480px]">
                          <thead>
                            <tr className="text-left border-b" style={{ borderColor: ops.border }}>
                              <th className="pb-2 text-xs font-bold uppercase tracking-wide" style={{ color: ops.muted }}>Description</th>
                              <th className="pb-2 text-xs font-bold uppercase tracking-wide text-right" style={{ color: ops.muted }}>Qty</th>
                              <th className="pb-2 px-2 text-xs font-bold uppercase tracking-wide text-right" style={{ color: ops.muted }}>Unit price</th>
                              <th className="pb-2 pl-2 text-xs font-bold uppercase tracking-wide text-right" style={{ color: ops.muted }}>Amount</th>
                              <th className="pb-2 pl-2 w-6"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {allLines.map((line) => (
                              <QuoteLineRow
                                key={line.key}
                                description={line.description}
                                unitPrice={line.unitPrice}
                                editableDescription={line.isCustom}
                                onDescriptionChange={(v) => updateCustomLineDescription(line.key, v)}
                                onPriceChange={(v) => updateLinePrice(line.key, v, line.isCustom)}
                                onRemove={() => removeLine(line.key, line.isCustom)}
                              />
                            ))}
                            {allLines.length === 0 && (
                              <tr>
                                <td colSpan={5} className="py-4 text-sm" style={{ color: ops.muted }}>No line items yet.</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>

                      <button
                        type="button"
                        onClick={addCustomLine}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-2 rounded-md border mt-4 mb-8"
                        style={{ borderColor: ops.border, color: ops.ink }}
                      >
                        <Plus className="w-3.5 h-3.5" /> Add line item
                      </button>

                      <div className="flex justify-end">
                        <div className="w-full max-w-[260px] space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span style={{ color: ops.muted }}>Subtotal</span>
                            <span style={{ color: ops.ink }}>{fmt(quote.rawSubtotal)}</span>
                          </div>
                          {quote.discountPct > 0 && (
                            <div className="flex justify-between" style={{ color: ops.green }}>
                              <span>Discount ({quote.discountPct}%)</span>
                              <span>-{fmt(quote.discountAmount)}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span style={{ color: ops.muted }}>Total GST 15%</span>
                            <span style={{ color: ops.ink }}>{fmt(quote.gst)}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t font-extrabold text-base" style={{ borderColor: ops.border, color: ops.ink }}>
                            <span>Total</span>
                            <span>{fmt(quote.total)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Nav */}
        {step.key !== "review" && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{ borderColor: ops.border }}>
            <button
              type="button"
              onClick={handleBack}
              disabled={stepIndex === 0}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide px-4 py-2.5 rounded-md border disabled:opacity-0"
              style={{ borderColor: ops.border, color: ops.ink }}
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canProceed}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide px-5 py-3 rounded-md disabled:opacity-40"
              style={{ background: ops.pink, color: "#fff" }}
            >
              {nextLabel} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </OpsShell>
  );
}
