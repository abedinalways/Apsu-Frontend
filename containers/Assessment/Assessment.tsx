'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BirthControlIcons from '@/components/icons/BirthControlIcons';
import SleepIcons from '@/components/icons/SleepIcons';
import WeightLossIcons from '@/components/icons/WeightLossIcons';

export default function Assessment() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      description: 'GLP-1 and metabolic support, guided by a physician.',
      icon: <WeightLossIcons />,
      href: '/assessment/weight-loss',
    },
    {
      id: 'birth-control',
      title: 'Birth Control',
      description: 'Pills, patches, rings - delivered discreetly each month.',
      icon: <BirthControlIcons />,
      href: '/assessment/birth',
    },
    {
      id: 'sleep',
      title: 'Sleep',
      description: 'Personalized plans for falling and staying asleep.',
      icon: <SleepIcons />,
      href: '/assessment/sleep',
    },
  ] as const;

  const handleContinue = () => {
    const selectedOption = options.find(o => o.id === selected);
    if (selectedOption) {
      router.push(selectedOption.href);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 py-4 bg-[#FFFFFF] max-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-[20px] font-semibold text-greenColor mb-6">
          What would you like help with today?
        </h2>

        <div className="grid gap-4">
          {options.map(option => {
            const isSelected = selected === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelected(option.id)}
                className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-lightGreenColor bg-lightGreenColor'
                    : 'border-gray-100 bg-background hover:bg-background/50'
                }`}
              >
                <div className="space-y-3 pr-4">
                  <p className="font-medium text-gray-900">{option.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {option.description}
                  </p>
                </div>
                <div className="">{option.icon}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6 border-t mt-6 bg-[#FFFFFF]">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selected}
            className="px-6 py-3 bg-secondary-bg text-white rounded-full text-sm font-medium disabled:opacity-30 cursor-pointer"
          >
            Continue &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
