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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData } from "@/zod/AssessmentSchema";

export default function GeneralInformation() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const currentGender = watch("gender");

  const genders = ["male", "female", "intersex"] as const;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Tell us about yourself first!
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">
                First Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className="bg-gray-50/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">
                Last Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  className="bg-gray-50/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="dob"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">
              Date of Birth <span className="text-red-500">*</span>
            </FormLabel>
            <FormControl>
              <Input
                type="date"
                {...field}
                className="bg-gray-50/50 text-muted-foreground"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="gender"
        render={() => (
          <FormItem>
            <FormLabel className="text-xs">
              Gender <span className="text-red-500">*</span>
            </FormLabel>
            <FormControl>
              <div className="grid grid-cols-3 gap-3">
                {genders.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() =>
                      setValue("gender", g, { shouldValidate: true })
                    }
                    className={`py-3 px-4 rounded-xl border text-sm capitalize transition-all ${
                      currentGender === g
                        ? "border-emerald-600 bg-emerald-50/40 text-emerald-900"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="residence"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">
              Select your Residence <span className="text-red-500">*</span>
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-gray-50/50">
                  <SelectValue placeholder="Select your state name" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="california">California</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="texas">Texas</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
