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
    <div className="space-y-4">
      {/* Question Header text from Screenshot 2026-07-05 113401.png */}
      <div>
        <h2 className="text-xl font-bold text-[#0B251A] tracking-tight leading-snug">
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
                className="min-h-[110px] resize-none rounded-xl border-gray-200 bg-[#FAF9F6]/40 text-sm focus-visible:ring-[#AFC1B6] placeholder:text-gray-400 w-full p-4"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
