"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/zod/AssessmentSchema";

export default function EligibilityCheckStepSeven() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Question Header text from Screenshot 2026-07-05 113401.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Please share any concerns or questions you have for the medical team
          below.
        </h2>
      </div>

      {/* Concerns Textarea block */}
      <FormField
        control={control}
        name="medicalTeamConcerns"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Describe your concerns if you have any..."
                className="min-h-[110px] resize-none rounded-xl border-gray-200  text-sm placeholder:text-gray-400 w-full p-4 bg-[#FAF9F4] h-14! text-[16px] text-[#6c6c6c focus-visible:ring-[1px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
