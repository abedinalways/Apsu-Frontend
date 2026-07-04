import * as z from "zod";

export const formSchema = z.object({
  // Steps 1-6 placeholder schemas from before
  goal: z.enum(["weight-loss", "birth-control", "sleep"]),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dob: z.string().min(1),
  gender: z.enum(["male", "female", "intersex"]),
  residence: z.string().min(1),

  // Step 7: Schedule Consultation
  consultationDate: z.string().min(1, "Please select a consultation date"),
  consultationTime: z.string().min(1, "Please select a preferred slot"),
  timezone: z.string().default("America/Los_Angeles"),

  // Step 8: Self Checkout
  cardName: z.string().min(1, "Name on card is required"),
  cardNumber: z.string().min(16, "Enter a valid card number").max(19),
  cardExpiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Use MM/YY format"),
  cardCvv: z.string().min(3, "CVV is required").max(4),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

export type FormData = z.infer<typeof formSchema>;
