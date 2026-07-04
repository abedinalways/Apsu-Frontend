"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FormData, formSchema } from "@/zod/AssessmentSchema";
import StepOne from "@/components/Assessment/form/StepOne";
import StepTwo from "@/components/Assessment/form/StepTwo";
import StepThree from "@/components/Assessment/form/StepThree";
import StepFour from "@/components/Assessment/form/StepFour";
import StepFive from "@/components/Assessment/form/StepFive";
import StepSix from "@/components/Assessment/form/StepSix";
import StepSeven from "@/components/Assessment/form/StepSeven";
import StepEight from "@/components/Assessment/form/StepEight";
// import { formSchema, FormData } from "./schema";

const TOTAL_STEPS = 8;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goal: undefined,
      firstName: "Maria",
      lastName: "Olivo",
      dob: "",
      gender: undefined,
      residence: "",
      consultationDate: "",
      consultationTime: "",
      timezone: "America/Los_Angeles",
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
      agreeTerms: true,
    },
    mode: "onChange",
  });

  // Validates current step before allowing progression
  const nextStep = async () => {
    let fieldsToValidate: Array<keyof FormData> = [];

    if (step === 1) fieldsToValidate = ["goal"];
    if (step === 2)
      fieldsToValidate = [
        "firstName",
        "lastName",
        "dob",
        "gender",
        "residence",
      ];
    // Add specific validation triggers for intermediate steps 3-6 if needed:
    // if (step === 3) fieldsToValidate = [...]
    if (step === 7) fieldsToValidate = ["consultationDate", "consultationTime"];

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // This fires ONLY when Step 8 inputs pass validation upon clicking 'Place order'
  const onSubmit = (data: FormData) => {
    console.log("🚀 Complete Onboarding Data Captured:", data);
    /* Expected Output Format in Console:
      {
        goal: "weight-loss",
        firstName: "Maria",
        lastName: "Olivo",
        dob: "1995-04-12",
        gender: "female",
        residence: "california",
        consultationDate: "2026-07-16",
        consultationTime: "09:30 AM",
        timezone: "America/Los_Angeles",
        cardName: "Maria Olivo",
        cardNumber: "4111222233334444",
        cardExpiry: "12/29",
        cardCvv: "123",
        agreeTerms: true
      }
    */
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white min-h-screen flex flex-col justify-between">
      <div>
        {/* Dynamic header / progress bar logic */}
        {step < 8 && (
          <div className="mb-6">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Progress Tracking</span>
              <span>
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full flex gap-1">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className={`h-full flex-1 rounded-full transition-all duration-300 ${
                    i + 1 <= step ? "bg-emerald-800" : "bg-gray-100"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <Form {...form}>
          {/* Form wrapper handles programmatic intercept */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
             {step === 1 && <StepOne />}
             {step === 2 && <StepTwo />}
             {step === 3 && <StepThree />}
             {step === 4 && <StepFour />}
             {step === 5 && <StepFive />}
             {step === 6 && <StepSix />}
             {step === 7 && <StepSeven />}
             {step === 8 && <StepEight />}
          </form>
        </Form>
      </div>

      {/* Global Form Footer Trigger buttons */}
      <div className="flex flex-col gap-3 pt-6 border-t mt-6">
        {step === TOTAL_STEPS ? (
          <button
            type="button"
            // Explicitly invokes submit configuration from step view
            onClick={form.handleSubmit(onSubmit)}
            className="w-full py-3 bg-[#0B251A] hover:bg-opacity-90 text-white rounded-full font-medium text-sm transition-all"
          >
            Place order
          </button>
        ) : (
          <div className="flex justify-between items-center w-full">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 1}
              className="px-6 py-2.5 border rounded-full text-sm font-medium hover:bg-gray-50 disabled:opacity-30"
            >
              &lt; Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2.5 bg-[#0B251A] text-white rounded-full text-sm font-medium"
            >
              Continue &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
