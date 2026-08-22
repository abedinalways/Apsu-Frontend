'use client';

import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

export interface QuickCheckItem {
  id: string;
  text: string;
}

export interface QuickCheckCardProps {
  /**
   * Title for the left column (positive/good fit cases)
   * Defaults to the text from Frame 2147240888.png
   */
  goodFitTitle?: string;
  /**
   * List of items representing a good fit
   * Defaults to the text from Frame 2147240888.png
   */
  goodFitItems?: QuickCheckItem[];
  /**
   * Title for the right column (cautious/needs evaluation cases)
   * Defaults to the text from Frame 2147240888.png
   */
  closerLookTitle?: string;
  /**
   * List of items needing a closer look
   * Defaults to the text from Frame 2147240888.png
   */
  closerLookItems?: QuickCheckItem[];
}

const DEFAULT_GOOD_FIT_ITEMS: QuickCheckItem[] = [
  {
    id: 'good-1',
    text: 'Adults who want prescription birth control without clinic trips',
  },
  {
    id: 'good-2',
    text: 'Those who want it delivered, with refills handled',
  },
  {
    id: 'good-3',
    text: 'People who want care explained in their own language',
  },
];

const DEFAULT_CLOSER_LOOK_ITEMS: QuickCheckItem[] = [
  {
    id: 'look-1',
    text: 'History of blood clots, stroke, or certain hormone-sensitive cancers',
  },
  {
    id: 'look-2',
    text: 'Smokers over 35, or uncontrolled high blood pressure or migraine with aura (affects which options are safe)',
  },
  {
    id: 'look-3',
    text: 'Currently pregnant, or think you might be',
  },
];

export default function QuickCheckCard({
  goodFitTitle = 'Often a good fit',
  goodFitItems = DEFAULT_GOOD_FIT_ITEMS,
  closerLookTitle = 'Needs a closer look',
  closerLookItems = DEFAULT_CLOSER_LOOK_ITEMS,
}: QuickCheckCardProps) {
  return (
    <div className="w-full py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
        {/* Left Column: Often a Good Fit */}
        <div className="space-y-6 md:space-y-8 bg-white rounded-2xl p-5 lg:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-bg tracking-tight">
            {goodFitTitle}
          </h3>

          <ul className="space-y-6">
            {goodFitItems.map(item => (
              <li key={item.id} className="flex items-start gap-4 group">
                {/* Custom circular green check icon based on the reference image */}
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success text-white shadow-sm transition-transform group-hover:scale-105 duration-200">
                  <Check className="h-3.5 w-3.5 stroke-[3.5]" />
                </div>
                <span className="text-base md:text-lg text-gray-700 font-normal leading-relaxed tracking-tight">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Needs a Closer Look */}
        <div className="space-y-6 md:space-y-8 bg-white rounded-2xl p-5 lg:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-bg tracking-tight">
            {closerLookTitle}
          </h3>

          <ul className="space-y-6">
            {closerLookItems.map(item => (
              <li key={item.id} className="flex items-start gap-4 group">
                {/* Custom circular golden warning icon inspired by Frame 2147240888.png */}
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#D9A71B] bg-transparent text-[#D9A71B] transition-transform group-hover:scale-105 duration-200">
                  <span className="text-sm font-black font-sans leading-none -mt-[1px]">
                    !
                  </span>
                </div>
                <span className="text-base md:text-lg text-gray-700 font-normal leading-relaxed tracking-tight">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
