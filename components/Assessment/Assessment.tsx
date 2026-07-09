"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { FormData } from "@/zod/AssessmentSchema";
import BirthControlIcons from "@/components/icons/BirthControlIcons";
import SleepIcons from "@/components/icons/SleepIcons";
import WeightLossIcons from "@/components/icons/WeightLossIcons";
import { useRouter } from "next/navigation";

export default function Treatment() {
  const { control, watch, setValue, trigger } = useFormContext<FormData>();
  const router = useRouter();
  const currentGoal = watch("goal");

  const options = [
    {
      id: "weight-loss",
      title: "Weight Loss",
      description: "GLP-1 and metabolic support, guided by a physician.",
      icon: <WeightLossIcons />,
    },
    {
      id: "birth-control",
      title: "Birth Control",
      description: "Pills, patches, rings - delivered discreetly each month.",
      icon: <BirthControlIcons />,
    },
    {
      id: "sleep",
      title: "Sleep",
      description: "Personalized plans for falling and staying asleep.",
      icon: <SleepIcons />,
    },
  ] as const;

  const handleContinue = async () => {
    if (!currentGoal) {
      await trigger("goal");
      return;
    }

    switch (currentGoal) {
      case "weight-loss":
        router.push("/assessment/weight-loss");
        break;
      case "birth-control":
        router.push("/assessment/birth-control");
        break;
      case "sleep":
        router.push("/assessment/sleep");
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
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
                          ? "border-[#ECF9F1] bg-[#ECF9F1]"
                          : "border-gray-100 bg-[#FAF9F4] hover:bg-[#FAF9F4]/50"
                      }`}
                    >
                      <div className="space-y-3 pr-4">
                        <p className="font-medium text-gray-900">
                          {option.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                      <div className="">{option.icon}</div>
                    </button>
                  );
                })}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <button
        type="button"
        onClick={handleContinue}
        className="w-full py-3 bg-[#0B251A] text-white rounded-full text-sm font-medium"
      >
        Continue &gt;
      </button>
    </div>
  );
}
