'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { FormData } from '@/zod/AssessmentSchema';

const METHOD_TAGS = ['Diet', 'Exercise', 'Prescribed medication', 'Surgery'];
const MOTIVATION_TAGS = [
  'Improve health',
  'More energy',
  'Medical clearance',
  'Confident',
];

export default function GoalLifestyleActivityStepThree() {
  const { control, getValues, setValue } = useFormContext<FormData>();

  // Appends a tag's text cleanly to the end of the corresponding textarea
  const handleAppendTag = (fieldName: keyof FormData, tagValue: string) => {
    const currentText = (getValues(fieldName) as string) || '';
    const cleanText = currentText.trim();
    const newText = cleanText
      ? `${cleanText}, ${tagValue.toLowerCase()}`
      : tagValue;

    setValue(fieldName, newText, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      {/* Step Header matching Screenshot 2026-07-05 120126.png */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#102b1c]">
          Share your challenges and motivations.
        </h2>
      </div>

      {/* Field 1: Weight Loss Methods */}
      <FormField
        control={control}
        name="weightLossMethods"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] text-[#111] flex items-center gap-0.5">
              What method do you applied for loosing your weight?{' '}
              <span className="text-red-500 font-serif">*</span>
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Tell us more.."
                className="min-h-[110px] resize-none rounded-xl border-gray-200 bg-[background] text-sm focus-visible:ring-[1px] placeholder:text-gray-400 p-3"
              />
            </FormControl>
            {/* Quick selection pill tags */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {METHOD_TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleAppendTag('weightLossMethods', tag)}
                  className="px-3 py-1 rounded-full border border-[#AFC1B6] text-[11px] font-medium text-secondary-bg bg-white hover:bg-[#AFC1B6]/10 active:scale-95 transition-all cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Field 2: Weight Loss Motivation */}
      <FormField
        control={control}
        name="weightLossMotivation"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] text-[#111] flex items-center gap-0.5">
              What&apos;s your primary motivation for loosing weight?{' '}
              <span className="text-red-500 font-serif">*</span>
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Tell us more.."
                className="min-h-[110px] resize-none rounded-xl border-gray-200 bg-[background] text-sm focus-visible:ring-[1px] placeholder:text-gray-400 p-3"
              />
            </FormControl>
            {/* Quick selection pill tags */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {MOTIVATION_TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleAppendTag('weightLossMotivation', tag)}
                  className="px-3 py-1 rounded-full border border-[#AFC1B6] text-[11px] font-medium text-secondary-bg bg-white hover:bg-[#AFC1B6]/10 active:scale-95 transition-all cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Field 3: Weight Loss Journey Barrier */}
      <FormField
        control={control}
        name="weightLossBarriers"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-[14px] text-[#111] flex items-center gap-0.5">
              What barrier do you think affect most on you weight loss journey?{' '}
              <span className="text-red-500 font-serif">*</span>
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Describe in brief.."
                className="min-h-[110px] resize-none rounded-xl border-gray-200 bg-[background] text-sm focus-visible:ring-[1px] placeholder:text-gray-400 p-3"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
