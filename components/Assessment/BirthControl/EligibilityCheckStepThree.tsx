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
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Do you currently smoke?
        </h2>
        <p className="text-[14px] text-[#3b3b3c] mt-1.5">
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
                      className={`w-full p-4 text-left rounded-xl border transition-all bg-[#FAF9F4] h-14! cursor-pointer text-[16px] text-[#6c6c6c] ${
                        isSelected
                          ? "border-[#AFC1B6] border-2 text-[#0B251A]"
                          : "border-gray-200"
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
