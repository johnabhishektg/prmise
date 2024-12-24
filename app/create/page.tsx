"use client";

import { useState } from "react";
import { CreatePromise } from "@/components/create-promise";
import { AddCharity } from "@/components/add-charity";
import type { PromiseFormValues, CharityFormValues } from "../../lib/schemas";
import { Icons } from "@/components/icons";

export default function CreatePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<
    PromiseFormValues & CharityFormValues
  >({
    promise: "",
    frequency: "weekly",
    endDate: new Date(),
    agreedToTerms: false,
    charity: "",
    amount: 100,
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="md:min-h-screen bg-off-white py-12">
      <div className="">
        <div className="flex items-center justify-center">
          <Icons.navLogo className=" w-12 h-12" />
        </div>
        {/* Progress Dots */}
        <div className="flex justify-center gap-1.5 my-8">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`h-2 w-12 rounded ${
                dot <= step ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <div className=" px-4">
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
          {step === 3 && (
            <AddCharity
              formData={formData}
              updateFormData={updateFormData}
              onNext={() => setStep(4)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
