import * as z from "zod";

export const promiseFormSchema = z.object({
  promise: z.string().min(3, "Promise must be at least 3 characters"),
  frequency: z.enum(["one-time", "weekly", "daily"], {
    required_error: "Please select a frequency",
  }),
  endDate: z.string().min(1, "Please select an end date"),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export const charityFormSchema = z.object({
  charity: z.string().min(1, "Please select a charity"),
  amount: z.union([
    z.number().min(50, "Amount must be at least ₹50"),
    z.literal("Custom"),
  ]),
  customAmount: z.number().optional(),
});

export type PromiseFormValues = z.infer<typeof promiseFormSchema>;
export type CharityFormValues = z.infer<typeof charityFormSchema>;
