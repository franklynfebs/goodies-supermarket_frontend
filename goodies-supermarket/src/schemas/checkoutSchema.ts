import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name is required"),

  lastName: z
    .string()
    .min(2, "Last name is required"),

  email: z
    .email("Enter a valid email address"),

  phone: z
    .string()
    .min(8, "Enter a valid phone number"),

  address: z
    .string()
    .min(5, "Address is required"),

  city: z
    .string()
    .min(2, "City is required"),

  region: z
    .string()
    .min(2, "Region is required"),

  postalCode: z
    .string()
    .min(3, "Postal code is required"),

  paymentMethod: z.enum([
    "cash",
    "card",
    "paypal",
    "mobile",
  ]),
});

export type CheckoutFormData =
  z.infer<typeof checkoutSchema>;