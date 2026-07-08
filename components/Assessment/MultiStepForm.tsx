"use client";

import React, { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FormData, formSchema } from "@/zod/AssessmentSchema";
import Treatment from "@/components/Assessment/form/Treatment";
import GeneralInformation from "@/components/Assessment/form/GeneralInformation";
import HealthHistoryStepOne from "@/components/Assessment/form/HealthHistoryStepOne";
import HealthHistoryStepTwo from "@/components/Assessment/form/HealthHistoryStepTwo";
import HealthHistoryStepThree from "@/components/Assessment/form/HealthHistoryStepThree";
import GoalLifestyleActivityStepOne from "@/components/Assessment/form/GoalLifestyleActivityStepOne";
import GoalLifestyleActivityStepTwo from "@/components/Assessment/WeightLoss/GoalLifestyleActivityStepTwo";
import GoalLifestyleActivityStepThree from "@/components/Assessment/WeightLoss/GoalLifestyleActivityStepThree";
import GoalLifestyleActivityStepFour from "@/components/Assessment/WeightLoss/GoalLifestyleActivityStepFour";
import EligibilityCheckStepOne from "@/components/Assessment/BirthControl/EligibilityCheckStepOne";
import EligibilityCheckStepTwo from "@/components/Assessment/BirthControl/EligibilityCheckStepTwo";
import EligibilityCheckStepThree from "@/components/Assessment/BirthControl/EligibilityCheckStepThree";
import EligibilityCheckStepFour from "@/components/Assessment/BirthControl/EligibilityCheckStepFour";
import EligibilityCheckStepFive from "@/components/Assessment/BirthControl/EligibilityCheckStepFive";
import EligibilityCheckStepSix from "@/components/Assessment/BirthControl/EligibilityCheckStepSix";
import EligibilityCheckStepSeven from "@/components/Assessment/BirthControl/EligibilityCheckStepSeven";
import EligibilityCheckStepEight from "@/components/Assessment/BirthControl/EligibilityCheckStepEight";
import TreatmentPlanStepOne from "@/components/Assessment/form/TreatmentPlanStepOne";
import ScheduleConsultationStepOne from "@/components/Assessment/form/ScheduleConsultationStepOne";
import CheckoutPaymentStepOne from "@/components/Assessment/form/CheckoutPaymentStepOne";
import HealthHistoryStepFour from "@/components/Assessment/form/HealthHistoryStepFour";

const TOTAL_STEPS = 8;

const STEP_LABELS = [
  "Treatment",
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
      goal: undefined,
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
    if (step === 3) {
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
    if (step === 4) {
      const goalLifestyleFields: Array<Array<keyof FormData>> = [
        ["weightLossGoal"],
        ["triedLosingWeightBefore"],
        ["weightLossMethods", "weightLossMotivation", "weightLossBarriers"],
        ["lifestyleDescription", "eatingRestrictions", "sleepHours"],
      ];

      fieldsToValidate = goalLifestyleFields[goalLifestyleStep] || [];
    }
    if (step === 5) {
      const eligibilityFields: Array<Array<keyof FormData>> = [
        ["nicotineUsage"],
        ["nicotineProductTypes"],
        ["smokingFrequency"],
        ["monitoredForHighBP"],
        ["autoimmuneConditions"],
        ["currentMedications"],
        ["medicalTeamConcerns"],
        ["isCurrentlyPregnant"],
      ];

      fieldsToValidate = eligibilityFields[eligibilityStep] || [];
    }
    if (step === 7) fieldsToValidate = ["consultationDate", "consultationTime"];

    const isValid = await form.trigger(fieldsToValidate);
    if (!isValid) return;

    if (step === 3 && healthHistoryStep < 3) {
      setHealthHistoryStep((prev) => prev + 1);
      return;
    }

    if (step === 4 && goalLifestyleStep < 3) {
      setGoalLifestyleStep((prev) => prev + 1);
      return;
    }

    if (step === 5 && eligibilityStep < 7) {
      setEligibilityStep((prev) => prev + 1);
      return;
    }

    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const prevStep = () => {
    if (step === 3 && healthHistoryStep > 0) {
      setHealthHistoryStep((prev) => prev - 1);
      return;
    }

    if (step === 4 && goalLifestyleStep > 0) {
      setGoalLifestyleStep((prev) => prev - 1);
      return;
    }

    if (step === 5 && eligibilityStep > 0) {
      setEligibilityStep((prev) => prev - 1);
      return;
    }

    if (step === 4) {
      setHealthHistoryStep(3);
    }

    if (step === 5) {
      setGoalLifestyleStep(3);
    }

    if (step === 6) {
      setEligibilityStep(7);
    }

    setStep((prev) => Math.max(prev - 1, 1));
  };

  // This fires ONLY when Step 8 inputs pass validation upon clicking 'Place order'
  const onSubmit = (data: FormData) => {
    console.log("=======data========");
    console.log(data);

    // Send data to backend API
    // Example: await submitAssessmentForm(data);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 py-4 bg-[#FFFFFF] max-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {/* Dynamic header / progress bar logic */}
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
          {/* Form wrapper handles programmatic intercept */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && <Treatment />}
            {step === 2 && <GeneralInformation />}
            {step === 3 && healthHistoryStep === 0 && <HealthHistoryStepOne />}
            {step === 3 && healthHistoryStep === 1 && <HealthHistoryStepTwo />}
            {step === 3 && healthHistoryStep === 2 && (
              <HealthHistoryStepThree />
            )}
            {step === 3 && healthHistoryStep === 3 && <HealthHistoryStepFour />}
            {step === 4 && goalLifestyleStep === 0 && (
              <GoalLifestyleActivityStepOne />
            )}
            {step === 4 && goalLifestyleStep === 1 && (
              <GoalLifestyleActivityStepTwo />
            )}
            {step === 4 && goalLifestyleStep === 2 && (
              <GoalLifestyleActivityStepThree />
            )}
            {step === 4 && goalLifestyleStep === 3 && (
              <GoalLifestyleActivityStepFour />
            )}
            {step === 5 && eligibilityStep === 0 && <EligibilityCheckStepOne />}
            {step === 5 && eligibilityStep === 1 && <EligibilityCheckStepTwo />}
            {step === 5 && eligibilityStep === 2 && (
              <EligibilityCheckStepThree />
            )}
            {step === 5 && eligibilityStep === 3 && (
              <EligibilityCheckStepFour />
            )}
            {step === 5 && eligibilityStep === 4 && (
              <EligibilityCheckStepFive />
            )}
            {step === 5 && eligibilityStep === 5 && <EligibilityCheckStepSix />}
            {step === 5 && eligibilityStep === 6 && (
              <EligibilityCheckStepSeven />
            )}
            {step === 5 && eligibilityStep === 7 && (
              <EligibilityCheckStepEight />
            )}
            {step === 6 && <TreatmentPlanStepOne />}
            {step === 7 && <ScheduleConsultationStepOne />}
            {step === 8 && <CheckoutPaymentStepOne />}
          </form>
        </Form>
      </div>

      {/* Global Form Footer Trigger buttons */}
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
