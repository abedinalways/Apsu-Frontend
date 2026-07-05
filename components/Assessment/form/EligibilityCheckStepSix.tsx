"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { FormData } from "@/zod/AssessmentSchema";

// Mock suggestion array list for clinical lookup demo
const MEDICATION_SUGGESTIONS = [
  "Accutane",
  "Oral fungal treatment",
  "Phenytoin",
  "Metformin",
  "Lisinopril",
  "Albuterol",
  "Omeprazole",
  "Levothyroxine",
];

export default function EligibilityCheckStepSix() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const selectedMeds = watch("currentMedications") || [];

  const handleAddMedication = (med: string) => {
    let updated = [...selectedMeds];
    // Remove "None" if present
    updated = updated.filter((item) => item !== "I don't have any");

    if (!updated.includes(med)) {
      updated.push(med);
    }
    setValue("currentMedications", updated, { shouldValidate: true });
    setSearchQuery("");
    setShowSuggestions(false);
  };

  const handleRemoveMedication = (medName: string) => {
    const updated = selectedMeds.filter((item) => item !== medName);
    setValue("currentMedications", updated, { shouldValidate: true });
  };

  const handleClearAllMeds = () => {
    // Force set exclusively to static clean state array
    setValue("currentMedications", ["I don't have any"], {
      shouldValidate: true,
    });
    setSearchQuery("");
    setShowSuggestions(false);
  };

  const filteredSuggestions = MEDICATION_SUGGESTIONS.filter(
    (item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedMeds.includes(item),
  );

  const hasNoneSelected = selectedMeds.includes("I don't have any");

  return (
    <div className="space-y-6">
      {/* Step description headers matching Screenshot 2026-07-05 113111.png */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-[#0B251A] tracking-tight leading-snug">
          Are you currently taking any medications every day, even if only for a
          short time? Please do not include birth control.
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          To help us respond to your request quickly and accurately, please
          select all the medications you take - either regularly or as needed.
          This includes prescriptions, over-the-counter medications, vitamins,
          and supplements. We cross-check this list with a national pharmacy
          database to ensure comprehensive care.
        </p>
      </div>

      <FormField
        control={control}
        name="currentMedications"
        render={() => (
          <FormItem className="space-y-4 relative">
            <FormControl>
              <div className="space-y-4">
                {/* Combobox Search Field Container */}
                <div className="relative">
                  <Search className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Search your medication name"
                    disabled={hasNoneSelected}
                    className="pl-11 pr-4 py-6 rounded-2xl border-none bg-[#FAF9F6] text-sm focus-visible:ring-1 focus-visible:ring-emerald-700 placeholder:text-gray-400 w-full"
                  />

                  {/* Dynamic suggestions drop list dropdown portal container */}
                  {showSuggestions && searchQuery.trim().length > 0 && (
                    <div className="absolute z-20 top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 shadow-xl max-h-48 overflow-y-auto divide-y divide-gray-50">
                      {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            onClick={() => handleAddMedication(suggestion)}
                            className="w-full text-left px-4 py-3 text-xs font-medium text-gray-700 hover:bg-emerald-50/40 transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            handleAddMedication(searchQuery.trim())
                          }
                          className="w-full text-left px-4 py-3 text-xs font-semibold text-emerald-800 hover:bg-emerald-50/40 transition-colors"
                        >
                          Add missing: &ldquo;{searchQuery}&rdquo;
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Badges Pill Row grid layout container */}
                {selectedMeds.filter((m) => m !== "I don't have any").length >
                  0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedMeds
                      .filter((m) => m !== "I don't have any")
                      .map((med) => (
                        <div
                          key={med}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0B251A] text-white text-xs font-medium transition-all"
                        >
                          <span>{med}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveMedication(med)}
                            className="p-0.5 rounded-full hover:bg-white/20 transition-colors"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                  </div>
                )}

                {/* Exclusive negative select clearance trigger element button option */}
                <button
                  type="button"
                  onClick={handleClearAllMeds}
                  className={`w-full py-4 text-center rounded-2xl border text-sm font-medium transition-all ${
                    hasNoneSelected
                      ? "border-emerald-700 bg-emerald-50/20 text-[#0B251A] font-semibold"
                      : "border-gray-100 bg-[#FAF9F6]/50 hover:bg-[#FAF9F6] text-gray-700"
                  }`}
                >
                  I don&apos;t have any
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
