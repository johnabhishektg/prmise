"use client";

import { useState } from "react";
import { CreatePromise } from "@/components/create-promise";
import { AddCharity } from "@/components/add-charity";
import type { PromiseFormValues, CharityFormValues } from "../../lib/schemas";

export default function CreatePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<
    PromiseFormValues & CharityFormValues
  >({
    promise: "",
    frequency: "weekly",
    endDate: "",
    agreedToTerms: false,
    charity: "",
    amount: 100,
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-off-white py-12">
      <div className="container max-w-lg mx-auto px-4">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`h-2 w-2 rounded-full ${
                dot <= step ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <CreatePromise
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <AddCharity
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setStep(3)}
          />
        )}
      </div>
    </div>
  );
}
