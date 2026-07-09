"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FormData } from "@/zod/AssessmentSchema";

export default function EligibilityStepTwo() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Section Header Text from Frame 1984077999.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Enter your details to save your progress.
        </h2>
      </div>

      {/* Email Input Field */}
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] text-[#111] flex items-center gap-0.5">
              Email <span className="text-red-500">*</span>
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                type="email"
                placeholder="maria@example.com"
                className="bg-[#FAF9F4] h-14! text-[16px] text-[#6c6c6c focus-visible:ring-[1px]]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Dynamic Legal Terms Disclaimer Text Footer */}
      <p className="text-[14px] text-[#111]">
        By entering your email, we&apos;ll save your progress and send you
        updates about your care and you agree to our{" "}
        <Link
          href="/terms-and-privacy"
          className="underline decoration-gray-400 hover:text-[#111]/80 text-[14px] text-[#111] transition-colors"
        >
          Terms & Privacy Policy
        </Link>
        . You can opt-out of these emails at any time.
      </p>
    </div>
  );
}
