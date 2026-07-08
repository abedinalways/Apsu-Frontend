"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { FormData } from "@/zod/AssessmentSchema";

const SMOKING_OPTIONS = [
  { id: "never", label: "Never" },
  { id: "occasionally", label: "Occasionally" },
  { id: "daily", label: "Daily" },
  { id: "stopped-last-month", label: "Stopped from last month" },
] as const;

export default function EligibilityCheckStepThree() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedFrequency = watch("smokingFrequency");

  return (
    <div className="space-y-6">
      {/* Header text matching Screenshot 2026-07-05 111411.png */}
      <div>
        <h2 className="text-xl font-bold text-[#0B251A] tracking-tight leading-snug">
          Do you currently smoke?
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5">
          This affects which options are safest for you.
        </p>
      </div>

      {/* Stacked Selection List */}
      <FormField
        control={control}
        name="smokingFrequency"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="flex flex-col gap-3">
                {SMOKING_OPTIONS.map((option) => {
                  const isSelected = selectedFrequency === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setValue("smokingFrequency", option.id, {
                          shouldValidate: true,
                        })
                      }
                      className={`w-full p-4 text-left rounded-2xl border transition-all ${
                        isSelected
                           ? "border-[#AFC1B6] bg-[#AFC1B6]/10 shadow-sm"
                          : "border-gray-100 bg-[#FAF9F6]/50 hover:bg-[#FAF9F6]"
                      }`}
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {option.label}
                      </span>
                    </button>
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
