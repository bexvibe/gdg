"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

interface Props {
  sourcePage?: string;
  heading?: string;
  subheading?: string;
  compact?: boolean;
}

const services = [
  { value: "",           label: "What can we help with? (optional)" },
  { value: "New door",   label: "New garage door" },
  { value: "Repair",     label: "Repair" },
  { value: "Servicing",  label: "Servicing" },
  { value: "Opener",     label: "Motor or opener" },
  { value: "Insulation", label: "Insulation" },
  { value: "Remote",     label: "Remote" },
  { value: "Other",      label: "Other" },
];

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-[#C8291D]">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-[#C8291D] flex items-center gap-1"><AlertCircle className="w-3 h-3" />{error}</p>}
    </div>
  );
}

const inputCls = (err?: string) =>
  `w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#C8291D]/20 focus:border-[#C8291D] ${
    err ? "border-[#C8291D]/50 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
  }`;

export default function ContactForm({ sourcePage, heading, subheading, compact }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, sourcePage: sourcePage || (typeof window !== "undefined" ? window.location.pathname : "") }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-green-500" />
        </div>
        <div>
          <h3 className="font-display font-700 text-lg text-[#0D1B2A] mb-1">Message received — thanks!</h3>
          <p className="text-sm text-gray-500">
            We&apos;ll get back to you within 48 hours. Urgent? Call&nbsp;
            <a href="tel:021906966" className="font-semibold text-[#C8291D] hover:underline">021 906 966</a>.
          </p>
        </div>
        <button onClick={() => setStatus("idle")} className="text-sm text-gray-400 underline hover:text-gray-600">Send another message</button>
      </div>
    );
  }

  return (
    <div>
      {heading    && <h2 className="font-display font-700 text-xl text-[#0D1B2A] mb-1">{heading}</h2>}
      {subheading && <p className="text-sm text-gray-500 mb-5">{subheading}</p>}
      {!heading && !subheading && !compact && <div className="mb-5" />}

      {status === "error" && (
        <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 mb-4 text-sm">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>Something went wrong. Please try again or call <a href="tel:021906966" className="font-semibold underline">021 906 966</a>.</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        <div className={compact ? "grid sm:grid-cols-2 gap-4" : "space-y-4"}>
          <Field label="Name" required error={errors.name?.message}>
            <input id="name" type="text" autoComplete="name" placeholder="Your full name"
              {...register("name")} className={inputCls(errors.name?.message)} />
          </Field>
          <Field label="Mobile number" required error={errors.mobile?.message}>
            <input id="mobile" type="tel" autoComplete="tel" placeholder="021 000 0000"
              {...register("mobile")} className={inputCls(errors.mobile?.message)} />
          </Field>
        </div>

        <div className={compact ? "grid sm:grid-cols-2 gap-4" : "space-y-4"}>
          <Field label="Email address" error={errors.email?.message}>
            <input id="email" type="email" autoComplete="email" placeholder="you@example.com"
              {...register("email")} className={inputCls(errors.email?.message)} />
          </Field>
          <Field label="Service interest">
            <select id="service" {...register("service")} className={inputCls() + " bg-white cursor-pointer"}>
              {services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </Field>
        </div>

        <Field label="Message" required error={errors.message?.message}>
          <textarea id="message" rows={4} placeholder="Tell us about your garage door…"
            {...register("message")} className={inputCls(errors.message?.message) + " resize-none"} />
        </Field>

        <button type="submit" disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 bg-[#C8291D] hover:bg-[#A82219] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl text-sm transition-colors shadow-sm">
          {status === "submitting"
            ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
            : <><span>Send message</span><ArrowRight className="w-4 h-4" /></>
          }
        </button>
        <p className="text-xs text-center text-gray-400">
          We reply within 48 hours · Urgent? Call <a href="tel:021906966" className="font-medium text-gray-600 hover:text-[#C8291D]">021 906 966</a>
        </p>
      </form>
    </div>
  );
}
