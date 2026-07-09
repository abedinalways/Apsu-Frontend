"use client";

import React, { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FormData, formSchema } from "@/zod/AssessmentSchema";
import GeneralInformation from "@/components/Assessment/form/GeneralInformation";
import HealthHistoryStepOne from "@/components/Assessment/form/HealthHistoryStepOne";
import HealthHistoryStepTwo from "@/components/Assessment/form/HealthHistoryStepTwo";
import HealthHistoryStepThree from "@/components/Assessment/form/HealthHistoryStepThree";
import HealthHistoryStepFour from "@/components/Assessment/form/HealthHistoryStepFour";
// import GoalLifestyleActivityStepOne from "@/components/Assessment/Sleep/GoalLifestyleActivityStepOne";
// import GoalLifestyleActivityStepTwo from "@/components/Assessment/Sleep/GoalLifestyleActivityStepTwo";
// import EligibilityCheckStepOne from "@/components/Assessment/Sleep/EligibilityCheckStepOne";
import TreatmentPlanStepOne from "@/components/Assessment/form/TreatmentPlanStepOne";
import ScheduleConsultationStepOne from "@/components/Assessment/form/ScheduleConsultationStepOne";
import CheckoutPaymentStepOne from "@/components/Assessment/form/CheckoutPaymentStepOne";
import GoalLifestyleActivityStepOne from "./GoalLifestyleActivityStepOne";
import GoalLifestyleActivityStepTwo from "./GoalLifestyleActivityStepTwo";
import EligibilityCheckStepOne from "./EligibilityCheckStepOne";

const TOTAL_STEPS = 7;

const STEP_LABELS = [
  "General information",
  "Health History",
  "(Goal, lifestyle, activity)",
  "Eligibility Check",
  "Eligibility",
  "Schedule Consultation",
  "Checkout & Payment",
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [healthHistoryStep, setHealthHistoryStep] = useState(0);
  const [goalLifestyleStep, setGoalLifestyleStep] = useState(0);
  const [eligibilityStep, setEligibilityStep] = useState(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as Resolver<FormData>,
    defaultValues: {
      goal: "sleep",
      firstName: "",
      lastName: "",
      dob: "",
      gender: undefined,
      residence: "",
      unitSystem: "imperial",
      heightFt: undefined,
      heightIn: undefined,
      heightCm: undefined,
      weightLbs: undefined,
      weightKgs: undefined,
      medicalConditions: [],
      selectedSideEffects: [],
      sideEffectsAdditionalDetails: "",
      knownAllergies: [],
      weightLossGoal: undefined,
      triedLosingWeightBefore: undefined,
      weightLossMethods: "",
      weightLossMotivation: "",
      weightLossBarriers: "",
      lifestyleDescription: undefined,
      eatingRestrictions: "",
      sleepHours: "",
      nicotineUsage: undefined,
      nicotineProductTypes: [],
      smokingFrequency: undefined,
      bloodPressureValue: "",
      monitoredForHighBP: undefined,
      autoimmuneConditions: [],
      currentMedications: [],
      medicalTeamConcerns: "",
      isCurrentlyPregnant: undefined,
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
    shouldUnregister: false,
  });

  const nextStep = async () => {
    let fieldsToValidate: Array<keyof FormData> = [];

    if (step === 1)
      fieldsToValidate = [
        "firstName",
        "lastName",
        "dob",
        "gender",
        "residence",
      ];
    if (step === 2) {
      if (healthHistoryStep === 0) {
        fieldsToValidate =
          form.getValues("unitSystem") === "imperial"
            ? ["heightFt", "heightIn", "weightLbs"]
            : ["heightCm", "weightKgs"];
      } else if (healthHistoryStep === 1) {
        fieldsToValidate = ["medicalConditions"];
      } else if (healthHistoryStep === 2) {
        fieldsToValidate = [
          "selectedSideEffects",
          "sideEffectsAdditionalDetails",
        ];
      } else {
        fieldsToValidate = ["knownAllergies"];
      }
    }
    if (step === 3) {
      const goalLifestyleFields: Array<Array<keyof FormData>> = [
        ["lifestyleDescription", "eatingRestrictions", "sleepHours"],
      ];
      fieldsToValidate = goalLifestyleFields[goalLifestyleStep] || [];
    }
    if (step === 4) {
      fieldsToValidate = ["nicotineUsage"];
    }
    if (step === 6) fieldsToValidate = ["consultationDate", "consultationTime"];

    const isValid = await form.trigger(fieldsToValidate);
    if (!isValid) return;

    if (step === 2 && healthHistoryStep < 3) {
      setHealthHistoryStep((prev) => prev + 1);
      return;
    }

    if (step === 3 && goalLifestyleStep < 1) {
      setGoalLifestyleStep((prev) => prev + 1);
      return;
    }

    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const prevStep = () => {
    if (step === 2 && healthHistoryStep > 0) {
      setHealthHistoryStep((prev) => prev - 1);
      return;
    }

    if (step === 3 && goalLifestyleStep > 0) {
      setGoalLifestyleStep((prev) => prev - 1);
      return;
    }

    if (step === 3) {
      setHealthHistoryStep(3);
    }

    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: FormData) => {
    console.log("=======data========");
    console.log(data);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 py-4 bg-[#FFFFFF] max-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {step <= TOTAL_STEPS && (
          <div className="mb-6">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>{STEP_LABELS[step - 1]}</span>
              <span>
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full flex gap-1">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                  key={i}
                  className={`h-full flex-1 rounded-full transition-all duration-300 ${
                    i + 1 <= step ? "bg-emerald-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && <GeneralInformation />}
            {step === 2 && healthHistoryStep === 0 && <HealthHistoryStepOne />}
            {step === 2 && healthHistoryStep === 1 && <HealthHistoryStepTwo />}
            {step === 2 && healthHistoryStep === 2 && (
              <HealthHistoryStepThree />
            )}
            {step === 2 && healthHistoryStep === 3 && <HealthHistoryStepFour />}
            {step === 3 && goalLifestyleStep === 0 && (
              <GoalLifestyleActivityStepOne />
            )}
            {step === 3 && goalLifestyleStep === 1 && (
              <GoalLifestyleActivityStepTwo />
            )}
            {step === 4 && eligibilityStep === 0 && <EligibilityCheckStepOne />}
            {step === 5 && <TreatmentPlanStepOne />}
            {step === 6 && <ScheduleConsultationStepOne />}
            {step === 7 && <CheckoutPaymentStepOne />}
          </form>
        </Form>
      </div>

      <div className="flex flex-col gap-3 pt-6 border-t mt-6 bg-[#FFFFFF]">
        {step === TOTAL_STEPS ? (
          <button
            type="submit"
            onClick={form.handleSubmit(onSubmit)}
            className="w-full py-3 bg-[#0B251A] hover:bg-opacity-90 text-white rounded-full font-medium text-sm transition-all cursor-pointer"
          >
            Place order
          </button>
        ) : (
          <div className="flex justify-between items-center w-full">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 1}
              className="px-6 py-3 border rounded-full text-sm font-medium hover:bg-gray-50 disabled:opacity-30"
            >
              &lt; Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-[#0B251A] text-white rounded-full text-sm font-medium"
            >
              Continue &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
