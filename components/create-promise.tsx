"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ThumbsUp } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { promiseFormSchema, type PromiseFormValues } from "@/lib/schemas";

interface CreatePromiseProps {
  formData: Partial<PromiseFormValues>;
  updateFormData: (data: Partial<PromiseFormValues>) => void;
  onNext: () => void;
}

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
      endDate: formData.endDate || "",
      agreedToTerms: formData.agreedToTerms || false,
    },
  });

  const onSubmit = (data: PromiseFormValues) => {
    updateFormData(data);
    onNext();
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <ThumbsUp className="h-8 w-8 text-primary" />
        <h1 className="text-2xl md:text-3xl font-bold font-primary">
          I promise to go
        </h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="promise"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-primary">Create Promise</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ex: Gym 3x"
                    className="font-primary"
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
                <FormLabel className="font-primary">
                  What&apos;s the Frequency
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time" className="font-primary">
                        One Time
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly" className="font-primary">
                        Weekly
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily" className="font-primary">
                        Daily
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-primary">End date</FormLabel>
                <FormControl>
                  <Input type="date" className="font-primary" {...field} />
                </FormControl>
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
