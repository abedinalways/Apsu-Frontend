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
import BirthControlIcons from '@/components/icons/BirthControlIcons';
import SleepIcons from '@/components/icons/SleepIcons';
import WeightLossIcons from '@/components/icons/WeightLossIcons';

export default function Treatment() {
  const { control, watch, setValue } = useFormContext<FormData>();
  const currentGoal = watch('goal');

  const options = [
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      description: 'GLP-1 and metabolic support, guided by a physician.',
      icon: <WeightLossIcons />,
    },
    {
      id: 'birth-control',
      title: 'Birth Control',
      description: 'Pills, patches, rings - delivered discreetly each month.',
      icon: <BirthControlIcons />,
    },
    {
      id: 'sleep',
      title: 'Sleep',
      description: 'Personalized plans for falling and staying asleep.',
      icon: <SleepIcons />,
    },
  ] as const;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-blackColor">
        What would you like help with today?
      </h2>

      <FormField
        control={control}
        name="goal"
        render={() => (
          <FormItem className="space-y-4">
            <FormLabel className="text-[14px] font-semibold text-blackColor">
              What would you like help with today?
            </FormLabel>
            <FormControl>
              <div className="grid gap-4">
                {options.map(option => {
                  const isSelected = currentGoal === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        setValue('goal', option.id, { shouldValidate: true })
                      }
                      className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-greenColor1  bg-lightGreenColor'
                          : 'border-gray-100 bg-background hover:bg-background/50'
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
                      <div className="">
                        {/* <Image
                          src={option.icon}
                          alt={option.title}
                          fill
                          className="w-6 h-6 object-contain"
                        /> */}
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
