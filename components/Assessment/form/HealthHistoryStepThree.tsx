"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "@/zod/AssessmentSchema";

const CONDITION_OPTIONS = [
  { id: "dialysis", label: "Undergoing dialysis" },
  { id: "heart-failure", label: "Heart failure" },
  { id: "eating-disorder", label: "Anorexia or bulimia" },
  { id: "transplant", label: "Organ transplant" },
  { id: "liver-failure", label: "Liver failure" },
  { id: "none", label: "None" },
];

export default function HealthHistoryStepThree() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedConditions = watch("medicalConditions") || ["none"];

  const handleToggle = (id: string, checked: boolean) => {
    let updatedConditions = [...selectedConditions];

    if (id === "none") {
      updatedConditions = checked ? ["none"] : [];
    } else {
      if (checked) {
        updatedConditions = updatedConditions.filter((item) => item !== "none");
        updatedConditions.push(id);
      } else {
        updatedConditions = updatedConditions.filter((item) => item !== id);
      }
    }

    setValue("medicalConditions", updatedConditions, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      {/* Header Block exactly as rendered in Screenshot 2026-07-05 091734.png */}
      <div>
        <h2 className="text-xl font-bold text-[#0B251A] tracking-tight leading-snug">
          Have you ever been treated for or diagnosed with any of the following
          medical conditions?
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5">
          Please select all that apply.
        </p>
      </div>

      {/* Checkbox Rows */}
      <FormField
        control={control}
        name="medicalConditions"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="grid gap-3">
                {CONDITION_OPTIONS.map((option) => {
                  const isChecked = selectedConditions.includes(option.id);

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleToggle(option.id, !isChecked)}
                      className={`flex items-center gap-4 p-4 w-full rounded-2xl border text-left transition-all ${
                        isChecked
                          ? "border-emerald-800 bg-[#E2FBF0]/15 shadow-sm"
                          : "border-gray-100 bg-[#FAF9F6]/40 hover:bg-[#FAF9F6]"
                      }`}
                    >
                      <Checkbox
                        id={option.id}
                        checked={isChecked}
                        onCheckedChange={(checked) =>
                          handleToggle(option.id, !!checked)
                        }
                        className="h-5 w-5 rounded-md border-gray-300 data-[state=checked]:bg-[#0B251A] data-[state=checked]:border-[#0B251A]"
                      />
                      <span className="text-sm font-medium text-gray-800">
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
