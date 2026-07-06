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

const PRODUCT_OPTIONS = [
  { id: "cigarettes", label: "Cigarettes" },
  { id: "vape", label: "Vape" },
  { id: "replacement-therapy", label: "Nicotine patch/gum/inhaler" },
  { id: "others", label: "Others" },
] as const;

export default function EligibilityCheckStepTwo() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedProducts = watch("nicotineProductTypes") || [];

  const handleToggle = (id: string, checked: boolean) => {
    let updatedProducts = [...selectedProducts];
    if (checked) {
      updatedProducts.push(id);
    } else {
      updatedProducts = updatedProducts.filter((item) => item !== id);
    }
    setValue("nicotineProductTypes", updatedProducts, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      {/* Title & Subtitle block from Screenshot 2026-07-05 111020.png */}
      <div>
        <h2 className="text-xl font-bold text-[#0B251A] tracking-tight leading-snug">
          What type of nicotine-containing product do you use?
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5">
          This affects which options are safest for you.
        </p>
      </div>

      {/* Checkbox Rows Container Stack */}
      <FormField
        control={control}
        name="nicotineProductTypes"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="flex flex-col gap-3">
                {PRODUCT_OPTIONS.map((option) => {
                  const isChecked = selectedProducts.includes(option.id);

                  return (
                    <div
                      key={option.id}
                      role="checkbox"
                      tabIndex={0}
                      aria-checked={isChecked}
                      onClick={() => handleToggle(option.id, !isChecked)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          handleToggle(option.id, !isChecked);
                        }
                      }}
                      className={`flex items-center gap-4 p-4 w-full rounded-2xl border text-left transition-all ${
                        isChecked
                           ? "border-[#AFC1B6] bg-[#AFC1B6]/10 shadow-sm"
                          : "border-gray-100 bg-[#FAF9F6]/50 hover:bg-[#FAF9F6]"
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
