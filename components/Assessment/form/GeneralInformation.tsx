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
      <h2 className="text-xl font-semibold text-gray-800">
        Tell us about yourself first!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="bg-[#FAF9F4] h-11"
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
                  className="bg-[#FAF9F4] h-11"
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
                className="bg-[#FAF9F4] h-11 flex flex-col text-muted-foreground pt-2"
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
                    className={`py-3 px-4 rounded-xl border text-sm capitalize transition-all h-11  ${
                      currentGender === g
                        ? "border-[#AFC1B6] bg-[#AFC1B6]/10 text-[#0B251A]"
                        : "border-gray-200 bg-[#FAF9F4] hover:bg-[#FAF9F4]/50"
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
                <SelectTrigger className="bg-[#FAF9F4] h-11! w-full">
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
