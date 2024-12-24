"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { charityFormSchema, type CharityFormValues } from "@/lib/schemas";
import { BookHeart, Dog, Ribbon } from "lucide-react";

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
    icon: <BookHeart className="stroke-[#838383] hover:stroke-primary" />,
  },
  {
    id: "animal-welfare",
    name: "Animal Welfare",
    description: "Support animals in need",
    icon: <Dog className="stroke-[#838383] hover:stroke-primary" />,
  },
  {
    id: "breast-cancer",
    name: "Breast Cancer",
    description: "Support breast cancer research and treatment",
    icon: <Ribbon className="stroke-[#838383] hover:stroke-primary" />,
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
      customAmount: formData.customAmount || 0,
    },
  });

  const onSubmit = (data: CharityFormValues) => {
    updateFormData(data);
    onNext();
  };

  const selectedAmount = form.watch("amount");

  return (
    <div className="mt-8 w-1/2 mx-auto md:max-w-full md:mx-auto">
      <div className="flex items-center justify-center md:max-w-screen-2xl mb-4">
        <h1 className="text-2xl md:text-5xl font-medium font-primary">
          I promise to go{" "}
          <span className="text-primary">{formData.promise}...</span>
        </h1>
      </div>

      <div className="container px-4">
        <div className="mt-8 mb-4 mx-auto max-w-2xl">
          <p className="font-primary font-normal text-xl">Add Charity</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="charity"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
                    {charities.map((charity) => (
                      <Card
                        key={charity.id}
                        className={`p-4  border-[#E0DFDF] border-1 bg-off-white w-[224px] cursor-pointer transition-colors ${
                          field.value === charity.id
                            ? "border-primary bg-primary/5 bg-[#FFF3F1] text-primary hover:text-primary"
                            : "hover:border-primary bg-off-white text-[#000] hover:bg-[#FFF3F1]"
                        }`}
                        onClick={() => field.onChange(charity.id)}
                      >
                        <div>
                          <div className="md:flex md:items-center gap-1">
                            <div className="text-2xl mb-2">{charity.icon}</div>

                            <h3 className="font-semibold text-[#838383] font-primary hover:text-primary">
                              {charity.name}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground font-secondary tracking-tight">
                            {charity.description}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="md:max-w-2xl mx-auto space-y-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="font-primary mb-1 font-normal text-xl">
                      Amount
                    </FormLabel>
                    <p className="hidden md:block md:text-xs text-muted-foreground font-seconday tracking-tight">
                      Try to find the sweet spot between what you can afford to
                      lose but still hurts a little.
                    </p>
                    <FormControl>
                      <div className="flex gap-2">
                        {amounts.map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant="outline"
                            size="sm"
                            className={`rounded-full w-[125px] md:h-[35px] font-primary transition-colors ${
                              field.value === amount
                                ? "border-primary bg-[#FFF3F1] text-primary hover:text-primary"
                                : "bg-off-white text-[#000] hover:bg-[#FFF3F1]"
                            }`}
                            onClick={() => field.onChange(amount)}
                          >
                            {typeof amount === "number" ? `₹${amount}` : amount}
                          </Button>
                        ))}
                      </div>
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
                      <FormLabel className="space-x-2 font-primary mb-1 font-normal text-xl">
                        Custom Amount
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          className="font-primary text-base rounded-full px-4 bg-off-white"
                          {...field}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Button
                type="submit"
                className="w-full md:text-lg bg-primary text-off-white hover:bg-primary/90 font-primary"
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
