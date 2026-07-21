import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z
    .string()
    .min(7, "Please enter a valid NZ phone number")
    .regex(/^[\d\s\+\-\(\)]{7,15}$/, "Please enter a valid phone number"),
  email: z.union([z.string().email("Please enter a valid email"), z.literal("")]).optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
