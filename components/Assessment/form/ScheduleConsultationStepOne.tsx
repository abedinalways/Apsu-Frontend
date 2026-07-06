"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight, Globe, ChevronDown } from "lucide-react";
import { FormData } from "@/zod/AssessmentSchema";

const TIME_SLOTS = [
  "08:30 AM",
  "09:30 AM",
  "10:30 AM",
  "11:30 AM",
  "05:30 PM",
  "06:30 PM",
  "07:30 PM",
  "08:30 PM",
];

const COMMON_TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Asia/Dhaka",
];

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ScheduleConsultationStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();

  // Track active calendar view index state (initialized to current year/month)
  const [currentDate, setCurrentDate] = useState(new Date());

  const selectedDateStr = watch("consultationDate");
  const activeTime = watch("consultationTime");
  const activeTimezone = watch("timezone");
  const today = new Date();
  const todayDateStr = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // Dynamically auto-detect browser local system timezone on mount if not yet assigned
  useEffect(() => {
    if (!activeTimezone) {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setValue("timezone", userTimezone || "America/Los_Angeles");
    }
  }, [activeTimezone, setValue]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Compute layout structure grid matrix
  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray: (number | null)[] = [];

    for (let i = 0; i < firstDayIndex; i++) {
      daysArray.push(null);
    }
    for (let d = 1; d <= totalDaysInMonth; d++) {
      daysArray.push(d);
    }
    return daysArray;
  }, [year, month]);

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDateSelect = (day: number) => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setValue("consultationDate", formattedDate, { shouldValidate: true });
  };

  const monthLabel = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* Step Header Block */}
      <div>
        <h2 className="text-xl font-bold text-[#0B251A] tracking-tight">
          Schedule Your Consultation
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5">
          Choose a convenient date and time to meet with a licensed physician.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[60%_1fr] gap-6 items-start">
        {/* Left Grid Layout Element: Calendar Panel */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-900 tracking-wide">
            Select date
          </label>
          <FormField
            control={control}
            name="consultationDate"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="p-4 border border-gray-100 rounded-3xl bg-white shadow-sm">
                    {/* Header controls matching image_0de666.png perfectly */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                       <button
                         type="button"
                         onClick={handlePrevMonth}
                         className="h-10 w-10 rounded-full border border-gray-100 bg-[#FAF9F6] flex items-center justify-center hover:bg-gray-50 transition-colors"
                       >
                         <ChevronLeft className="h-4 w-4 text-gray-600" />
                       </button>
                       <span className="text-sm font-semibold text-gray-800 min-w-[100px] text-center">
                         {monthLabel}
                       </span>
                       <button
                         type="button"
                         onClick={handleNextMonth}
                         className="h-10 w-10 rounded-full border border-gray-100 bg-[#FAF9F6] hover:bg-gray-50 flex items-center justify-center hover:opacity-90 transition-opacity"
                       >
                         <ChevronRight className="h-4 w-4 text-gray-600" />
                       </button>
                    </div>

                    {/* Calendar Table Grid */}
                    <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-xs">
                      {DAYS_OF_WEEK.map((day) => (
                        <span
                          key={day}
                          className="text-gray-500 font-medium pb-2"
                        >
                          {day}
                        </span>
                      ))}

                      {calendarDays.map((day, idx) => {
                        if (day === null) return <div key={`empty-${idx}`} />;

                        const thisDateStr = `${year}-${String(
                          month + 1,
                        ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                        const isSelected = selectedDateStr === thisDateStr;
                        const isToday = todayDateStr === thisDateStr;

                        return (
                          <button
                            key={`day-${day}`}
                            type="button"
                            onClick={() => handleDateSelect(day)}
                            className={`h-10 w-10 rounded-full mx-auto flex items-center justify-center font-medium text-xs transition-all ${
                              isSelected
                                   ? "bg-[#AFC1B6] text-white font-bold scale-105 shadow-sm"
                                   : isToday
                                     ? "bg-[#E2FBF0] text-gray-900 hover:bg-[#AFC1B6]"
                                  : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Right Layout Grid: Time List Picker */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-900 tracking-wide">
            Select time
          </label>
          <FormField
            control={control}
            name="consultationTime"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="space-y-2 max-h-[290px] overflow-y-auto pr-1 scrollbar-thin">
                    {TIME_SLOTS.map((slot) => {
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
                          className={`w-full py-2.5 text-center rounded-full text-xs font-medium border transition-all ${
                            isSelected
                              ? "bg-[#AFC1B6] text-white border-transparent"
                              : "border-gray-400 text-gray-800 hover:bg-gray-50 bg-white"
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

      {/* Dynamic Selector Dropdown for Timezone handling */}
      <div className="space-y-2 pt-2">
        <label className="text-xs font-bold text-gray-900 tracking-wide">
          Time zone
        </label>
        <FormField
          control={control}
          name="timezone"
          render={() => (
            <FormItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs text-gray-700 font-medium bg-none border-none outline-none focus:outline-none">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="underline cursor-pointer hover:text-gray-900">
                    {activeTimezone || "Detecting time zone..."}
                  </span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 max-h-48 overflow-y-auto rounded-xl"
                >
                  {COMMON_TIMEZONES.map((tz) => (
                    <DropdownMenuItem
                      key={tz}
                      onClick={() =>
                        setValue("timezone", tz, { shouldValidate: true })
                      }
                       className="text-xs cursor-pointer focus:bg-[#AFC1B6]/10 focus:text-[#0B251A]"
                    >
                      {tz}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
