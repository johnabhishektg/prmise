"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ThumbsUp } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { charityFormSchema, type CharityFormValues } from "@/lib/schemas";

interface AddCharityProps {
  formData: {
    promise: string;
    charity: string;
    amount: number | "Custom";
    customAmount?: number;
  };
  updateFormData: (data: Partial<CharityFormValues>) => void;
  onNext: () => void;
}

const charities = [
  {
    id: "girl-child-education",
    name: "Girl Child Education",
    description: "Help provide education to underprivileged girls",
    icon: "👧",
  },
  {
    id: "animal-welfare",
    name: "Animal Welfare",
    description: "Support animals in need",
    icon: "🐾",
  },
  {
    id: "breast-cancer",
    name: "Breast Cancer",
    description: "Support breast cancer research and treatment",
    icon: "🎗️",
  },
];

const amounts = [50, 100, "Custom"] as const;

export function AddCharity({
  formData,
  updateFormData,
  onNext,
}: AddCharityProps) {
  const form = useForm<CharityFormValues>({
    resolver: zodResolver(charityFormSchema),
    defaultValues: {
      charity: formData.charity || "",
      amount: formData.amount || 100,
      customAmount: formData.customAmount,
    },
  });

  const onSubmit = (data: CharityFormValues) => {
    updateFormData(data);
    onNext();
  };

  const selectedAmount = form.watch("amount");

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <ThumbsUp className="h-8 w-8 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold font-primary">
            I promise to go {formData.promise}...
          </h1>
        </div>
        <p className="mt-2 text-sm text-muted-foreground font-primary">
          Add Charity
        </p>
        <p className="text-xs text-muted-foreground font-primary">
          Try to find the sweet spot between what you can afford to lose but
          still hurts a little.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="charity"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {charities.map((charity) => (
                    <Card
                      key={charity.id}
                      className={`p-4 cursor-pointer transition-colors ${
                        field.value === charity.id
                          ? "border-primary bg-primary/5"
                          : "hover:border-primary/50"
                      }`}
                      onClick={() => field.onChange(charity.id)}
                    >
                      <div className="text-2xl mb-2">{charity.icon}</div>
                      <h3 className="font-semibold font-primary">
                        {charity.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-primary">
                        {charity.description}
                      </p>
                    </Card>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="font-primary">Amount</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => {
                      field.onChange(
                        value === "Custom" ? value : parseInt(value)
                      );
                    }}
                    value={field.value.toString()}
                    className="flex gap-4"
                  >
                    {amounts.map((amount) => (
                      <div key={amount} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={amount.toString()}
                          id={`amount-${amount}`}
                        />
                        <label
                          htmlFor={`amount-${amount}`}
                          className="font-primary"
                        >
                          {typeof amount === "number" ? `₹${amount}` : amount}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {selectedAmount === "Custom" && (
            <FormField
              control={form.control}
              name="customAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-primary">Custom Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      className="font-primary"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-off-white hover:bg-primary/90 font-primary"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
