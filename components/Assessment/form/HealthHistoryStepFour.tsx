"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { FormData } from "@/zod/AssessmentSchema";
import { Check } from "lucide-react";

const ALLERGY_OPTIONS = [
  { id: "penicillin", label: "Penicillin" },
  { id: "latex", label: "Latex" },
  { id: "sulfa-drugs", label: "Sulfa drugs" },
  { id: "food-allergies", label: "Food allergies" },
  { id: "none", label: "None of these" },
] as const;

export default function HealthHistoryStepFour() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedAllergies = watch("knownAllergies") || [];

  const handleToggleAllergy = (id: string, checked: boolean) => {
    let updatedAllergies = [...selectedAllergies];

    if (id === "none") {
      // If "None of these" is checked, clear all other selections
      updatedAllergies = checked ? ["none"] : [];
    } else {
      if (checked) {
        // Remove "none" if a specific allergen target gets activated
        updatedAllergies = updatedAllergies.filter((item) => item !== "none");
        updatedAllergies.push(id);
      } else {
        updatedAllergies = updatedAllergies.filter((item) => item !== id);
      }
    }

    setValue("knownAllergies", updatedAllergies, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      {/* Description header matching text from Screenshot 2026-07-05 122224.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Do you have any allergies?
        </h2>
        <p className="text-[14px] text-[#3b3b3c] mt-1.5">
          Please select all that apply.
        </p>
      </div>

      {/* Selectable Block List Field container */}
      <FormField
        control={control}
        name="knownAllergies"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="flex flex-col gap-3">
                {ALLERGY_OPTIONS.map((option) => {
                  const isChecked = selectedAllergies.includes(option.id);

                  return (
                    <div
                      key={option.id}
                      role="checkbox"
                      tabIndex={0}
                      aria-checked={isChecked}
                      onClick={() => handleToggleAllergy(option.id, !isChecked)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          handleToggleAllergy(option.id, !isChecked);
                        }
                      }}
                      className={`flex items-center gap-4 p-4 w-full rounded-2xl border text-left transition-all h-14! text-[16px] text-[#6c6c6c] bg-[#FAF9F4] cursor-pointer  ${
                        isChecked
                          ? "border-[#AFC1B6] border-2 text-[#0B251A]"
                          : "border-gray-200"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                          isChecked
                            ? "border-[#AFC1B6] bg-[#0B251A] text-white"
                            : "border-gray-300 bg-white text-transparent"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {option.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
