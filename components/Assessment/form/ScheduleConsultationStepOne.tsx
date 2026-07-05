"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Globe } from "lucide-react";
import { FormData } from "@/zod/AssessmentSchema";

export default function ScheduleConsultationStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const activeTime = watch("consultationTime");

  const timeSlots = [
    "08:30 AM",
    "09:30 AM",
    "10:30 AM",
    "11:30 AM",
    "05:30 PM",
    "06:30 PM",
    "07:30 PM",
    "08:30 PM",
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900">
          Schedule Your Consultation
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          Choose a convenient date and time to meet with a licensed physician.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <label className="text-sm font-semibold text-gray-800">
            Select date
          </label>
          <div className="p-4 border rounded-2xl bg-white shadow-sm text-center">
            <p className="text-sm font-medium mb-2">July 2026</p>
            <div className="grid grid-cols-7 gap-2 text-xs">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <span key={d} className="text-muted-foreground font-medium">
                  {d}
                </span>
              ))}
              {Array.from({ length: 31 }).map((_, i) => {
                const day = i + 1;
                const isSelected = day === 16;
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() =>
                      setValue("consultationDate", `2026-07-${day}`)
                    }
                    className={`h-7 w-7 rounded-full flex items-center justify-center ${
                      isSelected
                        ? "bg-[#0B251A] text-white font-bold"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-gray-800">
            Select time
          </label>
          <FormField
            control={control}
            name="consultationTime"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="space-y-2 max-h-[240px] overflow-y-auto pr-1">
                    {timeSlots.map((slot) => {
                      const isSelected = activeTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() =>
                            setValue("consultationTime", slot, {
                              shouldValidate: true,
                            })
                          }
                          className={`w-full py-2.5 text-center rounded-full text-xs border font-medium transition-all ${
                            isSelected
                              ? "bg-[#0B251A] text-white border-transparent"
                              : "border-gray-300 text-gray-800 hover:bg-gray-50"
                          }`}
                        >
                          {slot}
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
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-600 pt-2">
        <Globe className="w-4 h-4 text-gray-400" />
        <span>Time zone:</span>
        <span className="font-medium underline cursor-pointer">
          America/Los Angeles
        </span>
      </div>
    </div>
  );
}
