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
import { FormData } from "@/zod/AssessmentSchema";

const LIFESTYLE_OPTIONS = [
  { id: "sedentary", label: "Sedentary" },
  { id: "light", label: "Light" },
  { id: "moderate", label: "Moderate" },
  { id: "extreme", label: "Extreme" },
] as const;

const RESTRICTION_TAGS = [
  "Vegetarian",
  "Dairy-free",
  "Gluten-free",
  "Oil-free",
  "Low-carb",
  "Vegan",
  "No restrictions",
];

export default function GoalLifestyleActivityStepFour() {
  const { control, watch, setValue, getValues } = useFormContext<FormData>();
  const activeLifestyle = watch("lifestyleDescription");

  const handleAppendTag = (tagValue: string) => {
    if (tagValue === "No restrictions") {
      setValue("eatingRestrictions", "No restrictions", {
        shouldValidate: true,
      });
      return;
    }

    const currentText = getValues("eatingRestrictions") || "";
    let cleanText = currentText.trim();

    if (cleanText === "No restrictions") {
      cleanText = "";
    }

    const newText = cleanText ? `${cleanText}, ${tagValue}` : tagValue;
    setValue("eatingRestrictions", newText, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      {/* Title Header Section from Screenshot 2026-07-05 120521.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Tell us a bit about your lifestyle management.
        </h2>
      </div>

      {/* Field 1: Horizontal Lifestyle Multi-Choice Box */}
      <FormField
        control={control}
        name="lifestyleDescription"
        render={() => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] text-[#111] flex items-center gap-0.5">
              How would you describe your lifestyle?{" "}
              <span className="text-red-500 font-serif">*</span>
            </FormLabel>
            <FormControl>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {LIFESTYLE_OPTIONS.map((option) => {
                  const isSelected = activeLifestyle === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setValue("lifestyleDescription", option.id, {
                          shouldValidate: true,
                        })
                      }
                      className={`py-3.5 px-1 rounded-xl border text-[14px] text-[#111] font-medium text-center transition-all truncate h-14! bg-[#FAF9F4]  cursor-pointer ${
                        isSelected
                          ? "border-[#AFC1B6] text-[#0B251A]"
                          : "border-gray-200"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Field 2: Eating Restrictions Textarea with Quick Tags */}
      <FormField
        control={control}
        name="eatingRestrictions"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] text-[#111] flex items-center gap-0.5">
              Do you have any eating restrictions?{" "}
              <span className="text-red-500 font-serif">*</span>
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Tell us more.."
                className="min-h-[110px] resize-none rounded-xl border-gray-200 bg-[#FAF9F4]  text-sm focus-visible:ring-[1px] placeholder:text-gray-400 p-3"
              />
            </FormControl>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {RESTRICTION_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleAppendTag(tag)}
                  className="px-3 py-1 rounded-full border border-[#AFC1B6] text-[11px] font-medium text-[#0B251A] bg-white hover:bg-[#AFC1B6]/10 active:scale-95 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Field 3: Sleep Hours Input Field */}
      <FormField
        control={control}
        name="sleepHours"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] text-[#111] flex items-center gap-0.5">
              How many hours of sleep do you typically get per night?{" "}
              <span className="text-red-500 font-serif">*</span>
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="eg.8hr"
                className="min-h-[110px] resize-none rounded-xl border-gray-200 bg-[#FAF9F4] text-sm focus-visible:ring-[1px] placeholder:text-gray-400 p-3 overflow-hidden"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
