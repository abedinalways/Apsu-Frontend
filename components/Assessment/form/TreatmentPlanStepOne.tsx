'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { FormData } from '@/lib/validations/AssessmentSchema';
import Image from 'next/image';
// import { FormData } from "./schema";

interface PlanOption {
  id: '1-month' | '3-months' | '6-months' | '12-months';
  title: string;
  description: string;
  badge: string;
  badgeVariant: 'neutral' | 'save';
  totalPrice: string;
  monthlyPrice: string;
  originalPrice?: string;
}

const PLAN_OPTIONS: PlanOption[] = [
  {
    id: '1-month',
    title: '1 month supply',
    description: 'Good for getting started',
    badge: 'No commitment',
    badgeVariant: 'neutral',
    totalPrice: '$299',
    monthlyPrice: '$299/month',
  },
  {
    id: '3-months',
    title: '3 months supply',
    description: 'Save more with our most popular plan',
    badge: 'Save $80',
    badgeVariant: 'save',
    totalPrice: '$717',
    monthlyPrice: '$239/month',
    originalPrice: '$897',
  },
  {
    id: '6-months',
    title: '6 months supply',
    description: 'Our best value',
    badge: 'Save $180',
    badgeVariant: 'save',
    totalPrice: '$1,314',
    monthlyPrice: '$219/month',
    originalPrice: '$1,794',
  },
  {
    id: '12-months',
    title: '12 months supply',
    description: 'Maximum savings',
    badge: 'Save $420',
    badgeVariant: 'save',
    totalPrice: '$2,388',
    monthlyPrice: '$199/month',
    originalPrice: '$3,588',
  },
];

export default function TreatmentPlanStepOne() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const selectedPlan = watch('treatmentPlan') || '3-months';

  return (
    <div className="space-y-6">
      {/* Visual Header Banner matching Screenshot 2026-07-05 104917.png */}
      <div className="relative overflow-hidden rounded-2xl bg- p-5 flex items-center justify-between">
        <div className="space-y-1 max-w-[70%] z-10">
          <h2 className="text-[20px] font-semibold text-titleText">
            Choose a plan that fits you.
          </h2>
          <p className="text-[14px] text-blackColor">
            Select the duration that works best for your goals. Longer plans
            offer greater savings.
          </p>
        </div>
        <Image
          src="/images/payments1.png"
          alt="Prescription vials"
          width={96}
          height={96}
          className="absolute right-2 bottom-0 top-0 m-auto h-full w-auto object-contain opacity-80 pointer-events-none"
        />
      </div>

      {/* Plan Option Row List */}
      <FormField
        control={control}
        name="treatmentPlan"
        render={() => (
          <FormItem className="space-y-3">
            <FormLabel className="text-[14px] font-semibold text-blackColor">
              Choose a plan that fits you.
            </FormLabel>
            <FormControl>
              <div className="flex flex-col gap-3">
                {PLAN_OPTIONS.map(plan => {
                  const isSelected = selectedPlan === plan.id;

                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() =>
                        setValue('treatmentPlan', plan.id, {
                          shouldValidate: true,
                        })
                      }
                      className={`w-full p-4 rounded-2xl border text-left flex items-start justify-between transition-all relative bg-background cursor-pointer ${
                        isSelected
                          ? 'border-greenColor1  border-2 text-secondary-bg'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-3 ">
                        {/* Radio circle element indicator */}
                        <div
                          className={`h-5 w-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                            isSelected
                              ? 'border-greenColor1  bg-secondary-bg'
                              : 'border-gray-200 bg-white'
                          }`}
                        >
                          {isSelected && (
                            <div className="h-2.5 w-2.5 rounded-full bg-background" />
                          )}
                        </div>

                        {/* Title, Subtitle & Badge tags */}
                        <div className="space-y-1.5">
                          <div className="font-bold text-sm text-gray-900 leading-none">
                            {plan.title}
                          </div>
                          <div className="text-xs text-grayColor1 font-medium leading-none">
                            {plan.description}
                          </div>
                          <div
                            className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                              plan.badgeVariant === 'save'
                                ? 'border-greenColor1  text-secondary-bg'
                                : 'border-gray-200'
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
                        <div className="text-[11px] text-grayColor1 font-medium mt-1">
                          {plan.monthlyPrice}
                        </div>
                        {plan.originalPrice && (
                          <div className="text-[10px] text-grayColor1 line-through mt-1 font-medium">
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
