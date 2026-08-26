'use client';

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface GetStartModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onGetStarted: () => void;
}

export default function GetStartModal({
  isOpen,
  onOpenChange,
  onGetStarted,
}: GetStartModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        showClose={false}
        overlayClassName="bg-white"
        noDefaultLayout
        overlayOnClick={() => onOpenChange(false)}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[460px] max-h-[90vh] overflow-y-auto bg-white"
      >
        <div className="px-6 py-10">
          {/* Top Feature Banner Image */}
          <div className="relative w-full h-[180px] rounded-2xl overflow-hidden mb-5">
            <Image
              src="/images/woman-smiling.png"
              alt="Find the right plan"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Modal Heading Title */}
          <h2 className="text-[24px] font-bold text-greenColor tracking-tight leading-tight mb-4">
            Let&apos;s find the right plan for you
          </h2>

          {/* Content Section divider separator */}
          <div className="border-t border-gray-100/80 pt-4 mb-4">
            <h3 className="text-[20px] font-semibold text-blackColor tracking-wide mb-3">
              How It Works
            </h3>

            {/* Feature Flow Checklist */}
            <ul className="space-y-2.5">
              {[
                'Choose your program',
                'Share your history',
                'A physician reviews',
                'Medication ships',
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 text-gray-700 text-sm font-medium"
                >
                  <CheckCircle2 className="h-5 w-5 fill-greenColor text-white shrink-0" />
                  <span className="text-[18px]">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Plan Cost Highlight Box Section */}
          <div className="bg-lightGreenColor border border-[#EBF7F0] p-4 rounded-xl mb-6">
            <p className="text-[14px] text-blackColor font-medium leading-relaxed">
              Our physician and shipping cost both are $0. No membership
              required.
            </p>
          </div>

          {/* Call to action action trigger */}
          <button
            type="button"
            onClick={onGetStarted}
            className="w-full py-3.5 bg-greenColor hover:bg-greenColor/80 text-[#fff] font-medium text-[16px] rounded-full tracking-wide shadow-sm active:scale-[0.99] transition-all cursor-pointer"
          >
            Get started
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
