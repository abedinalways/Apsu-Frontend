"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Heart, Moon } from "lucide-react";
import { FormData } from "@/zod/AssessmentSchema";

export default function StepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const currentGoal = watch("goal");

  const options = [
    {
      id: "weight-loss",
      title: "Weight Loss",
      description: "GLP-1 and metabolic support, guided by a physician.",
      icon: <Heart className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: "birth-control",
      title: "Birth Control",
      description: "Pills, patches, rings - delivered discreetly each month.",
      icon: <span className="text-xl">🌸</span>,
    },
    {
      id: "sleep",
      title: "Sleep",
      description: "Personalized plans for falling and staying asleep.",
      icon: <Moon className="w-6 h-6 text-emerald-600" />,
    },
  ] as const;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        What would you like help with today?
      </h2>

      <FormField
        control={control}
        name="goal"
        render={() => (
          <FormItem className="space-y-4">
            <FormControl>
              <div className="grid gap-4">
                {options.map((option) => {
                  const isSelected = currentGoal === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setValue("goal", option.id, { shouldValidate: true })
                      }
                      className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "border-emerald-600 bg-emerald-50/40 shadow-sm"
                          : "border-gray-100 bg-gray-50/50 hover:bg-gray-50"
                      }`}
                    >
                      <div className="space-y-1 pr-4">
                        <p className="font-medium text-gray-900">
                          {option.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                      <div className="p-2 bg-white rounded-full border shadow-sm">
                        {option.icon}
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
