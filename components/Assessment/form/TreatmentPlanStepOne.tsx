"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { FormData } from "@/zod/AssessmentSchema";
// import { FormData } from "./schema";

interface PlanOption {
  id: "1-month" | "3-months" | "6-months" | "12-months";
  title: string;
  description: string;
  badge: string;
  badgeVariant: "neutral" | "save";
  totalPrice: string;
  monthlyPrice: string;
  originalPrice?: string;
}

const PLAN_OPTIONS: PlanOption[] = [
  {
    id: "1-month",
    title: "1 month supply",
    description: "Good for getting started",
    badge: "No commitment",
    badgeVariant: "neutral",
    totalPrice: "$299",
    monthlyPrice: "$299/month",
  },
  {
    id: "3-months",
    title: "3 months supply",
    description: "Save more with our most popular plan",
    badge: "Save $80",
    badgeVariant: "save",
    totalPrice: "$717",
    monthlyPrice: "$239/month",
    originalPrice: "$897",
  },
  {
    id: "6-months",
    title: "6 months supply",
    description: "Our best value",
    badge: "Save $180",
    badgeVariant: "save",
    totalPrice: "$1,314",
    monthlyPrice: "$219/month",
    originalPrice: "$1,794",
  },
  {
    id: "12-months",
    title: "12 months supply",
    description: "Maximum savings",
    badge: "Save $420",
    badgeVariant: "save",
    totalPrice: "$2,388",
    monthlyPrice: "$199/month",
    originalPrice: "$3,588",
  },
];

export default function TreatmentPlanStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedPlan = watch("treatmentPlan") || "3-months";

  return (
    <div className="space-y-4">
      {/* Visual Header Banner matching Screenshot 2026-07-05 104917.png */}
      <div className="relative overflow-hidden rounded-2xl bg-[#D2FDEB] p-5 flex items-center justify-between">
        <div className="space-y-1 max-w-[70%] z-10">
          <h2 className="text-base font-bold text-[#0B251A] tracking-tight">
            Choose a plan that fits you.
          </h2>
          <p className="text-xs text-[#0B251A]/80 leading-relaxed font-medium">
            Select the duration that works best for your goals. Longer plans
            offer greater savings.
          </p>
        </div>
        {/* Mocking the prescription vials visual representation on the right */}
        <div className="absolute right-2 bottom-0 top-0 flex items-center justify-center opacity-80 pointer-events-none w-24">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-8 h-14 bg-white/90 border border-gray-300 rounded-md rotate-[-12deg] translate-x-2 translate-y-1 shadow-sm relative flex flex-col justify-between p-1">
              <div className="h-2 bg-emerald-700/40 rounded-sm w-full" />
              <div className="h-1 bg-gray-200 w-full my-1" />
            </div>
            <div className="w-8 h-14 bg-white border border-gray-200 rounded-md rotate-[8deg] shadow-md relative flex flex-col justify-between p-1">
              <div className="h-2 bg-emerald-800 rounded-sm w-full" />
              <div className="h-1 bg-gray-200 w-full my-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Plan Option Row List */}
      <FormField
        control={control}
        name="treatmentPlan"
        render={() => (
          <FormItem className="space-y-3">
            <FormControl>
              <div className="flex flex-col gap-3">
                {PLAN_OPTIONS.map((plan) => {
                  const isSelected = selectedPlan === plan.id;

                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() =>
                        setValue("treatmentPlan", plan.id, {
                          shouldValidate: true,
                        })
                      }
                      className={`w-full p-4 rounded-2xl border text-left flex items-start justify-between transition-all relative ${
                        isSelected
                          ? "border-[#AFC1B6] bg-white ring-1 ring-[#AFC1B6] shadow-sm"
                          : "border-gray-100 bg-[#FAF9F6]/60 hover:bg-[#FAF9F6]"
                      }`}
                    >
                      <div className="flex gap-3 items-start">
                        {/* Radio circle element indicator */}
                        <div
                          className={`h-5 w-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                            isSelected
                              ? "border-[#AFC1B6] bg-[#AFC1B6]"
                              : "border-gray-400 bg-white"
                          }`}
                        >
                          {isSelected && (
                            <div className="h-2.5 w-2.5 rounded-full bg-[#AFC1B6]" />
                          )}
                        </div>

                        {/* Title, Subtitle & Badge tags */}
                        <div className="space-y-1.5">
                          <div className="font-bold text-sm text-gray-900 leading-none">
                            {plan.title}
                          </div>
                          <div className="text-xs text-gray-500 font-medium leading-none">
                            {plan.description}
                          </div>
                          <div
                            className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                              plan.badgeVariant === "save"
                                ? "bg-[#D2FDEB] text-emerald-800"
                                : "bg-gray-200/60 text-gray-600"
                            }`}
                          >
                            {plan.badge}
                          </div>
                        </div>
                      </div>

                      {/* Pricing columns matching right alignment */}
                      <div className="text-right flex flex-col justify-between items-end h-full min-h-[56px]">
                        <div className="text-base font-bold text-emerald-800 leading-none">
                          {plan.totalPrice}
                        </div>
                        <div className="text-[11px] text-gray-500 font-medium mt-1">
                          {plan.monthlyPrice}
                        </div>
                        {plan.originalPrice && (
                          <div className="text-[10px] text-gray-400 line-through mt-1 font-medium">
                            {plan.originalPrice}
                          </div>
                        )}
                      </div>
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
