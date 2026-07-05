"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { FormData } from "@/zod/AssessmentSchema";

const SIDE_EFFECT_OPTIONS = [
  "Vomiting",
  "Nausea",
  "Diarrhea",
  "Fatigue",
  "Decreased appetite",
  "None",
];

export default function HealthHistoryStepThree() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const activeSideEffects = watch("selectedSideEffects") || [];

  const handleToggleSideEffect = (effect: string) => {
    let updatedEffects = [...activeSideEffects];

    if (effect === "None") {
      // "None" option clears all selected symptoms
      updatedEffects = ["None"];
    } else {
      // Remove "None" if a symptom is selected
      updatedEffects = updatedEffects.filter((item) => item !== "None");

      if (updatedEffects.includes(effect)) {
        updatedEffects = updatedEffects.filter((item) => item !== effect);
      } else {
        updatedEffects.push(effect);
      }
    }

    setValue("selectedSideEffects", updatedEffects, { shouldValidate: true });
  };

  // Helper to split options into selected (dark badges) and unselected (outlined pills) arrays
  const selectedList = SIDE_EFFECT_OPTIONS.filter((item) =>
    activeSideEffects.includes(item),
  );
  const unselectedList = SIDE_EFFECT_OPTIONS.filter(
    (item) => !activeSideEffects.includes(item),
  );

  return (
    <div className="space-y-6">
      {/* Step Description Headers from Screenshot 2026-07-05 121717.png */}
      <div>
        <h2 className="text-xl font-bold text-[#0B251A] tracking-tight leading-snug">
          Do you faced any side effects during your medication?
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5">
          Please select all that apply.
        </p>
      </div>

      <FormField
        control={control}
        name="selectedSideEffects"
        render={() => (
          <FormItem className="space-y-4">
            <FormControl>
              <div className="space-y-4">
                {/* Outlined unselected pills container row */}
                {unselectedList.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {unselectedList.map((effect) => (
                      <button
                        key={effect}
                        type="button"
                        onClick={() => handleToggleSideEffect(effect)}
                        className="px-4 py-2 rounded-full border border-emerald-800/40 bg-white text-xs font-medium text-emerald-900 hover:bg-emerald-50/40 transition-all active:scale-95"
                      >
                        {effect}
                      </button>
                    ))}
                  </div>
                )}

                {/* Subfield Label section */}
                <FormLabel className="text-xs font-bold text-gray-900 flex items-center gap-0.5 pt-2">
                  Describe any side effects you have experienced:{" "}
                  <span className="text-red-500 font-serif text-sm">*</span>
                </FormLabel>

                {/* Active dark badge layout area matching Screenshot 2026-07-05 121744.png */}
                {selectedList.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {selectedList.map((effect) => (
                      <div
                        key={effect}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0B251A] text-white text-xs font-medium shadow-sm"
                      >
                        <span>{effect}</span>
                        <button
                          type="button"
                          onClick={() => handleToggleSideEffect(effect)}
                          className="p-0.5 rounded-full hover:bg-white/20 transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Narrative input box for custom textual details */}
      <FormField
        control={control}
        name="sideEffectsAdditionalDetails"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                {...field}
                placeholder="add any additional details here..."
                className="min-h-[110px] resize-none rounded-2xl border-gray-200 bg-[#FAF9F6]/30 text-sm focus-visible:ring-emerald-700 placeholder:text-gray-400 p-4 w-full"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
