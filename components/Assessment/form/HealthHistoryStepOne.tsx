"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronUp, ChevronDown } from "lucide-react";
import { FormData } from "@/zod/AssessmentSchema";

export default function HealthHistoryStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const unitSystem = watch("unitSystem") || "imperial";

  return (
    <div className="space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-xl font-bold text-[#0B251A] tracking-tight">
          We've got you! What's your starting point?
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5">
          This will help to calculate your BMI to check your eligibility.
        </p>
      </div>

      {/* Custom Unit Selector Toggle Pill */}
      <div className="inline-flex p-1 bg-white border border-gray-200 rounded-full max-w-fit">
        <button
          type="button"
          onClick={() => setValue("unitSystem", "imperial")}
          className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all ${
            unitSystem === "imperial"
              ? "border-[#AFC1B6] bg-[#AFC1B6] text-white"
              : "border-gray-200 text-gray-600 hover:text-gray-900"
          }`}
        >
          ft / lbs
        </button>
        <button
          type="button"
          onClick={() => setValue("unitSystem", "metric")}
          className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all ${
            unitSystem === "metric"
              ? "border-[#AFC1B6] bg-[#AFC1B6] text-white"
              : "border-gray-200 text-gray-600 hover:text-gray-900"
          }`}
        >
          cm / kgs
        </button>
      </div>

      {/* Height Fields */}
      <div className="space-y-2">
        {unitSystem === "imperial" ? (
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name="heightFt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold text-gray-900">
                    Your Height <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <Input
                        type="number"
                        {...field}
                        className="bg-gray-50/40 pr-12 h-11 text-sm border-gray-200 focus-visible:ring-[#AFC1B6] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-gray-600">
                        <div className="flex gap-1">
                          {" "}
                          <div className="flex flex-col text-[8px] text-gray-400">
                            <ChevronUp className="h-2 w-2" />
                            <ChevronDown className="h-2 w-2" />
                          </div>
                          <span>ft</span>
                        </div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="heightIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold text-gray-900">
                    Height (in)
                  </FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <Input
                        type="number"
                        {...field}
                        className="bg-gray-50/40 pr-12 h-11 text-sm border-gray-200 focus-visible:ring-[#AFC1B6] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-gray-600">
                        <div className="flex gap-1">
                          <div className="flex flex-col text-[8px] text-gray-400">
                            <ChevronUp className="h-2 w-2" />
                            <ChevronDown className="h-2 w-2" />
                          </div>
                          <span>in</span>
                        </div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ) : (
          <FormField
            control={control}
            name="heightCm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-gray-900">
                  Your Height <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      type="number"
                      {...field}
                      className="bg-gray-50/40 pr-12 h-11 text-sm border-gray-200 focus-visible:ring-[#AFC1B6] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-gray-600">
                      <div className="flex gap-1">
                        <div className="flex flex-col text-[8px] text-gray-400">
                          <ChevronUp className="h-2 w-2" />
                          <ChevronDown className="h-2 w-2" />
                        </div>
                        <span>cm</span>
                      </div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>

      {/* Weight Fields */}
      <div className="space-y-2">
        {unitSystem === "imperial" ? (
          <FormField
            control={control}
            name="weightLbs"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-gray-900">
                  Your Current Weight <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      type="number"
                      {...field}
                      className="bg-gray-50/40 pr-12 h-11 text-sm border-gray-200 focus-visible:ring-[#AFC1B6] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-gray-600">
                      <div className="flex gap-1">
                        {" "}
                        <div className="flex flex-col text-[8px] text-gray-400">
                          <ChevronUp className="h-2 w-2" />
                          <ChevronDown className="h-2 w-2" />
                        </div>
                        <span>lbs</span>
                      </div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <FormField
            control={control}
            name="weightKgs"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-gray-900">
                  Your Current Weight <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      type="number"
                      {...field}
                      className="bg-gray-50/40 pr-12 h-11 text-sm border-gray-200 focus-visible:ring-[#AFC1B6] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div className="absolute right-3 flex items-center gap-1.5 pointer-events-none text-xs font-medium text-gray-600">
                      <div className="flex gap-1">
                        <div className="flex flex-col text-[8px] text-gray-400">
                          <ChevronUp className="h-2 w-2" />
                          <ChevronDown className="h-2 w-2" />
                        </div>
                        <span>kgs</span>
                      </div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>
    </div>
  );
}
