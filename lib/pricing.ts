// Pricing data sourced from "Pricing List JM (1).xlsx" (Windsor Aligned + Other products page sheets).
// Edit the numbers below directly when Windsor sends updated pricing — no other file needs to change.
//
// Door prices are exact "cost to customer" lookups per door class > material > size (they already
// include delivery, per the source sheet). Motors and add-ons are stored at COST price; the app marks
// them up to a sell price using MARGIN below (sell = cost / (1 - margin)), matching the gross-margin
// pricing tiers Windsor already computes in "Other products page". Change MARGIN in one place to
// reprice every motor/add-on at once.

export type DoorSize = {
  width: number;
  height: number;
  label: string;
  price: number;
  insulationCost?: number;
  paintVariationCost?: number;
};

export type DoorColour = { name: string; premium: boolean };

export type DoorMaterial = {
  key: string;
  label: string;
  profiles?: string[];
  colours: DoorColour[];
  sizes: DoorSize[];
};

export type Motor = { model: string; cost: number };

export type DoorClass = {
  key: string;
  label: string;
  motors: Motor[];
  materials: DoorMaterial[];
};

// Gross margin applied on top of cost price for motors and add-ons (sell = cost / (1 - MARGIN)).
// Matches the "40% GM" column in the source spreadsheet's tiered pricing.
export const MARGIN = 0.4;

export function sellPrice(cost: number, margin: number = MARGIN): number {
  return Math.round((cost / (1 - margin)) * 100) / 100;
}

export const DOOR_CLASSES: DoorClass[] = [
  {
    key: "sectional-fingersafe",
    label: "Sectional Fingersafe",
    motors: [{"model": "Windsor SD1000 Std", "cost": 300.0}, {"model": "Windsor SD1000 Pro", "cost": 370.0}, {"model": "Windsor SD1500 Pro", "cost": 550.0}],
    materials: [
    {
      key: "0.6mm-colorsteel",
      label: "0.6mm Colorsteel",
      profiles: ["Flat Woodgrain", "Fineline", "Ribline", "Press Panel"],
      colours: [{"name": "Calico", "premium": false}, {"name": "Ebony", "premium": false}, {"name": "Flaxpod", "premium": false}, {"name": "Grey Friars", "premium": false}, {"name": "Gull Grey", "premium": false}, {"name": "Ironsand", "premium": false}, {"name": "Karaka", "premium": false}, {"name": "Lignite", "premium": false}, {"name": "New Denim Blue", "premium": false}, {"name": "Permanent Green", "premium": false}, {"name": "Powder Coat", "premium": true}, {"name": "Sandbar", "premium": false}, {"name": "Sandstone Grey", "premium": false}, {"name": "Scoria", "premium": false}, {"name": "Slate", "premium": false}, {"name": "Thunder Grey", "premium": false}, {"name": "Threadbow White", "premium": false}, {"name": "Timbertec", "premium": false}, {"name": "Titania", "premium": false}, {"name": "Washcoat", "premium": false}, {"name": "Windsor Grey", "premium": false}],
      sizes: [
        { width: 2.45, height: 2.2, label: "2.20 x 2.45m", price: 1460.97, insulationCost: 208.02, paintVariationCost: 229.43 },
        { width: 3.05, height: 2.2, label: "2.20 x 3.05m", price: 1572.57, insulationCost: 252.04, paintVariationCost: 279.46 },
        { width: 4.25, height: 2.2, label: "2.20 x 4.25m", price: 1989.28, insulationCost: 296.07, paintVariationCost: 402.72 },
        { width: 4.85, height: 2.2, label: "2.20 x 4.85m", price: 2138.09, insulationCost: 312.66, paintVariationCost: 453.98 },
        { width: 5.15, height: 2.2, label: "2.20 x 5.15m", price: 2196.6, insulationCost: 354.77, paintVariationCost: 478.38 },
        { width: 5.45, height: 2.2, label: "2.20 x 5.45m", price: 2393.99, insulationCost: 376.79, paintVariationCost: 500.35 },
        { width: 6.05, height: 2.2, label: "2.20 x 6.05m", price: 2615.43, insulationCost: 442.83, paintVariationCost: 539.4 },
        { width: 2.45, height: 2.76, label: "2.76 x 2.45m", price: 1622.69, insulationCost: 258.42, paintVariationCost: 280.68 },
        { width: 3.05, height: 2.76, label: "2.76 x 3.05m", price: 1748.47, insulationCost: 313.46, paintVariationCost: 346.58 },
        { width: 4.25, height: 2.76, label: "2.76 x 4.25m", price: 2278.44, insulationCost: 368.49, paintVariationCost: 499.13 },
        { width: 4.85, height: 2.76, label: "2.76 x 4.85m", price: 2444.96, insulationCost: 389.23, paintVariationCost: 560.15 },
        { width: 5.15, height: 2.76, label: "2.76 x 5.15m", price: 2528.23, insulationCost: 441.87, paintVariationCost: 595.54 },
        { width: 5.45, height: 2.76, label: "2.76 x 5.45m", price: 2738.46, insulationCost: 469.39, paintVariationCost: 634.59 },
        { width: 6.05, height: 2.76, label: "2.76 x 6.05m", price: 2975.84, insulationCost: 551.94, paintVariationCost: 679.74 },
        { width: 2.45, height: 3.3, label: "3.3 x 2.45m", price: 2042.1, insulationCost: 335.95, paintVariationCost: 364.89 },
        { width: 3.05, height: 3.3, label: "3.3 x 3.05m", price: 2205.61, insulationCost: 407.5, paintVariationCost: 450.56 },
        { width: 4.25, height: 3.3, label: "3.3 x 4.25m", price: 2970.57, insulationCost: 479.04, paintVariationCost: 648.87 },
        { width: 4.85, height: 3.3, label: "3.3 x 4.85m", price: 3187.05, insulationCost: 506.0, paintVariationCost: 728.19 },
        { width: 5.15, height: 3.3, label: "3.3 x 5.15m", price: 3295.29, insulationCost: 574.43, paintVariationCost: 774.2 },
        { width: 5.45, height: 3.3, label: "3.3 x 5.45m", price: 3473.59, insulationCost: 610.21, paintVariationCost: 824.97 },
      ],
    },
    {
      key: "0.75mm-colorsteel",
      label: "0.75mm Colorsteel",
      profiles: ["Ribline Smooth", "Flatline Smooth", "Flat Smooth"],
      colours: [{"name": "Ebony", "premium": false}, {"name": "Flaxpod", "premium": false}, {"name": "Grey Friars", "premium": false}, {"name": "Gull Grey", "premium": false}, {"name": "Ironsand", "premium": false}, {"name": "Karaka", "premium": false}, {"name": "New Denim Blue", "premium": false}, {"name": "Sandstone Grey", "premium": false}, {"name": "Slate", "premium": false}, {"name": "Threadbow White", "premium": false}, {"name": "Thunder Grey", "premium": false}, {"name": "Timbertec", "premium": false}, {"name": "Titania", "premium": false}, {"name": "Washcoat", "premium": false}, {"name": "Windsor Grey", "premium": false}],
      sizes: [
        { width: 2.45, height: 2.2, label: "2.20 x 2.45m", price: 1691.71, insulationCost: 208.02, paintVariationCost: 229.43 },
        { width: 3.05, height: 2.2, label: "2.20 x 3.05m", price: 1831.22, insulationCost: 252.04, paintVariationCost: 279.46 },
        { width: 4.25, height: 2.2, label: "2.20 x 4.25m", price: 2339.6, insulationCost: 296.07, paintVariationCost: 402.72 },
        { width: 4.85, height: 2.2, label: "2.20 x 4.85m", price: 2525.61, insulationCost: 312.66, paintVariationCost: 453.98 },
        { width: 5.15, height: 2.2, label: "2.20 x 5.15m", price: 2598.69, insulationCost: 354.77, paintVariationCost: 478.38 },
        { width: 5.45, height: 2.2, label: "2.20 x 5.45m", price: 2820.48, insulationCost: 376.79, paintVariationCost: 500.35 },
        { width: 6.05, height: 2.2, label: "2.20 x 6.05m", price: 3097.28, insulationCost: 442.83, paintVariationCost: 539.4 },
        { width: 2.45, height: 2.76, label: "2.76 x 2.45m", price: 1888.86, insulationCost: 258.42, paintVariationCost: 280.68 },
        { width: 3.05, height: 2.76, label: "2.76 x 3.05m", price: 2046.09, insulationCost: 313.46, paintVariationCost: 346.58 },
        { width: 4.25, height: 2.76, label: "2.76 x 4.25m", price: 2688.55, insulationCost: 368.49, paintVariationCost: 499.13 },
        { width: 4.85, height: 2.76, label: "2.76 x 4.85m", price: 2896.7, insulationCost: 389.23, paintVariationCost: 560.15 },
        { width: 5.15, height: 2.76, label: "2.76 x 5.15m", price: 3000.78, insulationCost: 441.87, paintVariationCost: 595.54 },
        { width: 5.45, height: 2.76, label: "2.76 x 5.45m", price: 3226.07, insulationCost: 469.39, paintVariationCost: 634.59 },
        { width: 6.05, height: 2.76, label: "2.76 x 6.05m", price: 3522.8, insulationCost: 551.94, paintVariationCost: 679.74 },
        { width: 2.45, height: 3.3, label: "3.3 x 2.45m", price: 2388.12, insulationCost: 335.95, paintVariationCost: 364.89 },
        { width: 3.05, height: 3.3, label: "3.3 x 3.05m", price: 2592.51, insulationCost: 407.5, paintVariationCost: 450.56 },
        { width: 4.25, height: 3.3, label: "3.3 x 4.25m", price: 3503.71, insulationCost: 479.04, paintVariationCost: 648.87 },
        { width: 4.85, height: 3.3, label: "3.3 x 4.85m", price: 3774.32, insulationCost: 506.0, paintVariationCost: 728.19 },
        { width: 5.15, height: 3.3, label: "3.3 x 5.15m", price: 3909.62, insulationCost: 574.43, paintVariationCost: 774.2 },
      ],
    },
    ],
  },
  {
    key: "sectional-flatline",
    label: "Sectional Flatline",
    motors: [{"model": "Windsor SD1000 Std", "cost": 300.0}, {"model": "Windsor SD1000 Pro", "cost": 370.0}, {"model": "Windsor SD1500 Pro", "cost": 550.0}],
    materials: [
    {
      key: "0.95mm-colorsteel",
      label: "0.95mm Colorsteel",
      profiles: ["Flatline PC", "Flatline PC Neg Detail"],
      colours: [{"name": "Powdercoat Textura", "premium": false}, {"name": "Powdercoat Smooth", "premium": false}],
      sizes: [
        { width: 2.45, height: 2.2, label: "2.20 x 2.45m", price: 2112.75, insulationCost: 208.02 },
        { width: 3.05, height: 2.2, label: "2.20 x 3.05m", price: 2324.45, insulationCost: 252.04 },
        { width: 4.25, height: 2.2, label: "2.20 x 4.25m", price: 3030.78, insulationCost: 296.07 },
        { width: 4.85, height: 2.2, label: "2.20 x 4.85m", price: 3298.3, insulationCost: 312.66 },
        { width: 5.15, height: 2.2, label: "2.20 x 5.15m", price: 3407.47, insulationCost: 354.77 },
        { width: 5.45, height: 2.2, label: "2.20 x 5.45m", price: 3671.29, insulationCost: 376.79 },
        { width: 6.05, height: 2.2, label: "2.20 x 6.05m", price: 4034.1, insulationCost: 442.83 },
        { width: 2.45, height: 2.76, label: "2.76 x 2.45m", price: 2389.85, insulationCost: 258.42 },
        { width: 3.05, height: 2.76, label: "2.76 x 3.05m", price: 2637.53, insulationCost: 313.46 },
        { width: 4.25, height: 2.76, label: "2.76 x 4.25m", price: 3524.12, insulationCost: 368.49 },
        { width: 4.85, height: 2.76, label: "2.76 x 4.85m", price: 3826.98, insulationCost: 389.23 },
        { width: 5.15, height: 2.76, label: "2.76 x 5.15m", price: 3983.07, insulationCost: 441.87 },
        { width: 5.45, height: 2.76, label: "2.76 x 5.45m", price: 4258.83, insulationCost: 469.39 },
        { width: 6.05, height: 2.76, label: "2.76 x 6.05m", price: 4650.62, insulationCost: 551.94 },
        { width: 2.45, height: 3.3, label: "3.3 x 2.45m", price: 3039.41, insulationCost: 335.95 },
        { width: 3.05, height: 3.3, label: "3.3 x 3.05m", price: 3361.39, insulationCost: 407.5 },
        { width: 4.25, height: 3.3, label: "3.3 x 4.25m", price: 4589.96, insulationCost: 479.04 },
        { width: 4.85, height: 3.3, label: "3.3 x 4.85m", price: 4983.67, insulationCost: 506.0 },
        { width: 5.15, height: 3.3, label: "3.3 x 5.15m", price: 5186.59, insulationCost: 574.43 },
        { width: 5.45, height: 3.3, label: "3.3 x 5.45m", price: 5450.08, insulationCost: 610.21 },
        { width: 6.05, height: 3.3, label: "3.3 x 6.05m", price: 5959.41, insulationCost: 717.52 },
      ],
    },
    {
      key: "2mm-aluminium",
      label: "2mm Aluminium",
      profiles: ["Flatline", "Flatline Neg Detail"],
      colours: [{"name": "Powdercoat Textura", "premium": false}, {"name": "Powdercoat Smooth", "premium": false}],
      sizes: [
        { width: 2.45, height: 2.2, label: "2.20 x 2.45m", price: 2796.05, insulationCost: 208.02 },
        { width: 3.05, height: 2.2, label: "2.20 x 3.05m", price: 3099.63, insulationCost: 252.04 },
        { width: 4.25, height: 2.2, label: "2.20 x 4.25m", price: 4090.74, insulationCost: 296.07 },
        { width: 4.85, height: 2.2, label: "2.20 x 4.85m", price: 4474.34, insulationCost: 312.66 },
        { width: 5.15, height: 2.2, label: "2.20 x 5.15m", price: 4630.88, insulationCost: 354.77 },
        { width: 5.45, height: 2.2, label: "2.20 x 5.45m", price: 4966.17, insulationCost: 376.79 },
        { width: 6.05, height: 2.2, label: "2.20 x 6.05m", price: 5486.03, insulationCost: 442.83 },
        { width: 2.45, height: 2.76, label: "2.76 x 2.45m", price: 3184.72, insulationCost: 258.42 },
        { width: 3.05, height: 2.76, label: "2.76 x 3.05m", price: 3539.87, insulationCost: 313.46 },
        { width: 4.25, height: 2.76, label: "2.76 x 4.25m", price: 4776.45, insulationCost: 368.49 },
        { width: 4.85, height: 2.76, label: "2.76 x 4.85m", price: 5210.73, insulationCost: 389.23 },
        { width: 5.15, height: 2.76, label: "2.76 x 5.15m", price: 5434.55, insulationCost: 441.87 },
        { width: 5.45, height: 2.76, label: "2.76 x 5.45m", price: 5764.88, insulationCost: 469.39 },
        { width: 6.05, height: 2.76, label: "2.76 x 6.05m", price: 6326.68, insulationCost: 551.94 },
        { width: 2.45, height: 3.3, label: "3.3 x 2.45m", price: 4072.74, insulationCost: 335.95 },
        { width: 3.05, height: 3.3, label: "3.3 x 3.05m", price: 4534.43, insulationCost: 407.5 },
        { width: 4.25, height: 3.3, label: "3.3 x 4.25m", price: 6217.99, insulationCost: 479.04 },
        { width: 4.85, height: 3.3, label: "3.3 x 4.85m", price: 6782.55, insulationCost: 506.0 },
        { width: 5.15, height: 3.3, label: "3.3 x 5.15m", price: 7073.52, insulationCost: 574.43 },
        { width: 5.45, height: 3.3, label: "3.3 x 5.45m", price: 7407.95, insulationCost: 610.21 },
        { width: 6.05, height: 3.3, label: "3.3 x 6.05m", price: 8138.28, insulationCost: 717.52 },
      ],
    },
    ],
  },
  {
    key: "roller",
    label: "Roller",
    motors: [{"model": "Windsor RD1000 Pro", "cost": 400.0}, {"model": "Windsor RD1500 Pro", "cost": 740.0}],
    materials: [
    {
      key: "4mm-steel-a-series-colorsteel",
      label: "4mm Steel A Series (Colorsteel)",
      colours: [{"name": "Ebony", "premium": false}, {"name": "Flaxpod", "premium": false}, {"name": "Grey Friars", "premium": false}, {"name": "Gull Grey", "premium": false}, {"name": "Ironsand", "premium": false}, {"name": "Karaka", "premium": false}, {"name": "Lignite", "premium": false}, {"name": "Mist Green", "premium": false}, {"name": "New Denim Blue", "premium": false}, {"name": "Permanent Green", "premium": false}, {"name": "Pioneer Red", "premium": false}, {"name": "Sandbar", "premium": false}, {"name": "Sandstone Grey", "premium": false}, {"name": "Scoria", "premium": false}, {"name": "Slate", "premium": false}, {"name": "Threadbow White", "premium": false}, {"name": "Thunder Grey", "premium": false}, {"name": "Titania", "premium": false}, {"name": "Windsor Grey", "premium": false}],
      sizes: [
        { width: 2.4, height: 2.2, label: "2.4m x 2.2m", price: 1309.09 },
        { width: 2.4, height: 2.5, label: "2.4m x 2.5m", price: 1380.13 },
        { width: 2.4, height: 3.0, label: "2.4m x 3.0m", price: 1635.82 },
        { width: 2.4, height: 3.2, label: "2.4m x 3.2m", price: 1770.6 },
        { width: 2.6, height: 2.2, label: "2.6m x 2.2m", price: 1347.9 },
        { width: 2.6, height: 2.5, label: "2.6m x 2.5m", price: 1422.82 },
        { width: 2.6, height: 3.0, label: "2.6m x 3.0m", price: 1686.27 },
        { width: 2.6, height: 3.2, label: "2.6m x 3.2m", price: 1826.09 },
        { width: 2.8, height: 2.2, label: "2.8m x 2.2m", price: 1388.81 },
        { width: 2.8, height: 2.5, label: "2.8m x 2.5m", price: 1479.1 },
        { width: 2.8, height: 3.0, label: "2.8m x 3.0m", price: 1723.14 },
        { width: 2.8, height: 3.2, label: "2.8m x 3.2m", price: 1866.65 },
        { width: 3.0, height: 2.2, label: "3.0m x 2.2m", price: 1442.56 },
        { width: 3.0, height: 2.5, label: "3.0m x 2.5m", price: 1540.83 },
        { width: 3.0, height: 3.0, label: "3.0m x 3.0m", price: 1752.24 },
        { width: 3.0, height: 3.2, label: "3.0m x 3.2m", price: 1898.67 },
        { width: 3.2, height: 2.2, label: "3.2m x 2.2m", price: 1514.77 },
        { width: 3.2, height: 2.5, label: "3.2m x 2.5m", price: 1583.88 },
        { width: 3.2, height: 3.0, label: "3.2m x 3.0m", price: 1802.69 },
        { width: 3.2, height: 3.2, label: "3.2m x 3.2m", price: 1954.16 },
      ],
    },
    {
      key: "4mm-steel-a-series-zinc",
      label: "4mm Steel A Series (Zinc)",
      colours: [{"name": "Zincalume", "premium": false}],
      sizes: [
        { width: 2.4, height: 2.2, label: "2.4m x 2.2m", price: 1143.41 },
        { width: 2.4, height: 2.5, label: "2.4m x 2.5m", price: 1220.35 },
        { width: 2.4, height: 3.0, label: "2.4m x 3.0m", price: 1461.59 },
        { width: 2.4, height: 3.2, label: "2.4m x 3.2m", price: 1578.95 },
        { width: 2.6, height: 2.2, label: "2.6m x 2.2m", price: 1186.87 },
        { width: 2.6, height: 2.5, label: "2.6m x 2.5m", price: 1255.12 },
        { width: 2.6, height: 3.0, label: "2.6m x 3.0m", price: 1492.01 },
        { width: 2.6, height: 3.2, label: "2.6m x 3.2m", price: 1612.41 },
        { width: 2.8, height: 2.2, label: "2.8m x 2.2m", price: 1262.93 },
        { width: 2.8, height: 2.5, label: "2.8m x 2.5m", price: 1342.05 },
        { width: 2.8, height: 3.0, label: "2.8m x 3.0m", price: 1535.47 },
        { width: 2.8, height: 3.2, label: "2.8m x 3.2m", price: 1660.22 },
        { width: 3.0, height: 2.2, label: "3.0m x 2.2m", price: 1302.05 },
        { width: 3.0, height: 2.5, label: "3.0m x 2.5m", price: 1392.03 },
        { width: 3.0, height: 3.0, label: "3.0m x 3.0m", price: 1620.22 },
        { width: 3.0, height: 3.2, label: "3.0m x 3.2m", price: 1753.45 },
        { width: 3.2, height: 2.2, label: "3.2m x 2.2m", price: 1343.34 },
        { width: 3.2, height: 2.5, label: "3.2m x 2.5m", price: 1433.32 },
        { width: 3.2, height: 3.0, label: "3.2m x 3.0m", price: 1652.82 },
        { width: 3.2, height: 3.2, label: "3.2m x 3.2m", price: 1789.3 },
      ],
    },
    {
      key: "4mm-steel-b-series-with-tension-strip-colorsteel",
      label: "4mm Steel B Series with tension strip (Colorsteel)",
      colours: [{"name": "Ebony", "premium": false}, {"name": "Flaxpod", "premium": false}, {"name": "Grey Friars", "premium": false}, {"name": "Gull Grey", "premium": false}, {"name": "Ironsand", "premium": false}, {"name": "Karaka", "premium": false}, {"name": "Lignite", "premium": false}, {"name": "Mist Green", "premium": false}, {"name": "New Denim Blue", "premium": false}, {"name": "Permanent Green", "premium": false}, {"name": "Pioneer Red", "premium": false}, {"name": "Sandbar", "premium": false}, {"name": "Sandstone Grey", "premium": false}, {"name": "Scoria", "premium": false}, {"name": "Slate", "premium": false}, {"name": "Threadbow White", "premium": false}, {"name": "Thunder Grey", "premium": false}, {"name": "Titania", "premium": false}, {"name": "Windsor Grey", "premium": false}],
      sizes: [
        { width: 3.0, height: 3.4, label: "3.0m x 3.4m", price: 2852.79 },
        { width: 3.3, height: 3.4, label: "3.3m x 3.4m", price: 2961.39 },
        { width: 3.6, height: 2.2, label: "3.6m x 2.2m", price: 2169.27 },
        { width: 3.6, height: 2.5, label: "3.6m x 2.5m", price: 2294.51 },
        { width: 3.6, height: 3.4, label: "3.6m x 3.4m", price: 3051.88 },
        { width: 3.9, height: 2.2, label: "3.9m x 2.2m", price: 2286.91 },
        { width: 3.9, height: 2.5, label: "3.9m x 2.5m", price: 2421.21 },
        { width: 3.9, height: 3.4, label: "3.9m x 3.4m", price: 3232.87 },
        { width: 4.2, height: 2.2, label: "4.2m x 2.2m", price: 2431.7 },
        { width: 4.2, height: 2.5, label: "4.2m x 2.5m", price: 2672.03 },
        { width: 4.2, height: 3.4, label: "4.2m x 3.4m", price: 3413.86 },
        { width: 4.5, height: 2.2, label: "4.5m x 2.2m", price: 2628.98 },
        { width: 4.5, height: 2.5, label: "4.5m x 2.5m", price: 2850.89 },
        { width: 4.5, height: 3.4, label: "4.5m x 3.4m", price: 3486.26 },
        { width: 4.8, height: 2.2, label: "4.8m x 2.2m", price: 2866.08 },
        { width: 4.8, height: 2.5, label: "4.8m x 2.5m", price: 3085.66 },
        { width: 4.8, height: 3.4, label: "4.8m x 3.4m", price: 3624.0 },
      ],
    },
    {
      key: "4mm-steel-b-series-with-tension-strip-zinc",
      label: "4mm Steel B Series with tension strip (Zinc)",
      colours: [{"name": "Zincalume", "premium": false}],
      sizes: [
        { width: 3.0, height: 3.4, label: "3.0m x 3.4m", price: 2611.75 },
        { width: 3.3, height: 3.4, label: "3.3m x 3.4m", price: 2641.79 },
        { width: 3.6, height: 2.2, label: "3.6m x 2.2m", price: 2098.06 },
        { width: 3.6, height: 2.5, label: "3.6m x 2.5m", price: 2220.12 },
        { width: 3.6, height: 3.4, label: "3.6m x 3.4m", price: 2691.86 },
        { width: 3.9, height: 2.2, label: "3.9m x 2.2m", price: 2208.21 },
        { width: 3.9, height: 2.5, label: "3.9m x 2.5m", price: 2340.29 },
        { width: 3.9, height: 3.4, label: "3.9m x 3.4m", price: 2862.1 },
        { width: 4.2, height: 2.2, label: "4.2m x 2.2m", price: 2346.41 },
        { width: 4.2, height: 2.5, label: "4.2m x 2.5m", price: 2620.69 },
        { width: 4.2, height: 3.4, label: "4.2m x 3.4m", price: 2906.17 },
        { width: 4.5, height: 2.2, label: "4.5m x 2.2m", price: 2534.68 },
        { width: 4.5, height: 2.5, label: "4.5m x 2.5m", price: 2746.1 },
        { width: 4.5, height: 3.4, label: "4.5m x 3.4m", price: 3062.39 },
        { width: 4.8, height: 2.2, label: "4.8m x 2.2m", price: 2761.0 },
        { width: 4.8, height: 2.5, label: "4.8m x 2.5m", price: 2948.1 },
        { width: 4.8, height: 3.4, label: "4.8m x 3.4m", price: 3215.34 },
      ],
    },
    ],
  },
];

// "Main Extras" from the source sheet — cost price; sellPrice() applies MARGIN above.
export const EXTRAS: { key: string; label: string; cost: number }[] = [
  { key: "battery-backup", label: "Battery Backup", cost: 100.0 },
  { key: "remote", label: "Remote", cost: 45.0 },
  { key: "door-demo-disposal", label: "Door Demolition & Disposal", cost: 200.0 },
  { key: "new-door-delivery", label: "New Door Delivery", cost: 231.0 },
];
