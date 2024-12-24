"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { promiseFormSchema, type PromiseFormValues } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface CreatePromiseProps {
  formData: Partial<PromiseFormValues>;
  updateFormData: (data: Partial<PromiseFormValues>) => void;
  onNext: () => void;
}

const frequencyOptions = [
  { value: "one-time", label: "One Time" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" },
];

export function CreatePromise({
  formData,
  updateFormData,
  onNext,
}: CreatePromiseProps) {
  const form = useForm<PromiseFormValues>({
    resolver: zodResolver(promiseFormSchema),
    defaultValues: {
      promise: formData.promise || "",
      frequency: formData.frequency || "weekly",
      endDate: formData.endDate ? new Date(formData.endDate) : undefined,
      agreedToTerms: formData.agreedToTerms || false,
    },
  });

  const onSubmit = (data: PromiseFormValues) => {
    updateFormData(data);
    onNext();
  };

  return (
    <div className="space-y-8 max-w-xl container mx-auto">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-2xl md:text-5xl font-medium font-primary">
          I promise to...
        </h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="promise"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-primary font-normal text-xl">
                  Create Promise
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="ex: Gym 3x per week"
                    className="font-primary rounded-full px-4 bg-off-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="frequency"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="font-primary font-normal text-xl">
                  What&apos;s the Frequency
                </FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    {frequencyOptions.map((option) => (
                      <Button
                        key={option.value}
                        type="button"
                        variant="outline"
                        size="sm"
                        className={`rounded-full w-[125px] h-[47px] font-primary transition-colors ${
                          field.value === option.value
                            ? "border-primary bg-[#FFF3F1] text-primary hover:text-primary"
                            : "bg-off-white text-[#000] hover:bg-[#FFF3F1]"
                        }`}
                        onClick={() => field.onChange(option.value)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="font-primary font-normal text-xl">
                  End date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 px-4 text-left font-normal font-primary rounded-full bg-off-white",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreedToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-muted-foreground font-primary">
                    I agree to the terms and conditions
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

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
