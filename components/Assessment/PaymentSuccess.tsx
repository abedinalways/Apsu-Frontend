'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export interface OrderDetails {
  orderId?: string;
  treatment?: string;
  plan?: string;
  estimatedDelivery?: string;
  totalAmount?: string;
  productName?: string;
  productSubtext?: string;
  productImageUrl?: string;
}

export interface PaymentSuccessProps {
  title?: string;
  subtitle?: string;
  orderDetails?: OrderDetails;
  buttonText?: string;
  onScheduleConsultation?: () => void;
}

export default function PaymentSuccess({
  title = 'Payment Successful!',
  subtitle = 'Your payment has been received successfully.',
  orderDetails: orderDetailsProp,
  buttonText = 'Continue to Profile',
  onScheduleConsultation,
}: PaymentSuccessProps) {
  const router = useRouter();

  const handleButtonClick = () => {
    if (onScheduleConsultation) {
      onScheduleConsultation();
    } else {
      router.push('/profile');
    }
  };
  const [orderDetails] = useState<OrderDetails>(
    orderDetailsProp || {
      orderId: '9400 1111 2222',
      treatment: 'Weight loss',
      plan: '3 Months',
      estimatedDelivery: 'Jul 30, 2026',
      totalAmount: '$200',
      productImageUrl: '/images/PaymentSuccess.png',
    },
  );

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md mx-auto pt-10 px-4 pb-4">
        <div className="relative bg-[#FAF8F5] border border-stone-200/80 rounded-[28px] p-6 pt-10 md:p-8 md:pt-12 text-center shadow-sm">
          <div className="absolute -top-9 left-1/2 -translate-x-1/2 flex items-center justify-center w-18 h-18 rounded-full bg-[#036845] text-white shadow-md ring-4 ring-white">
            <Check className="w-9 h-9 stroke-3" />
          </div>

          <div className="mb-6 space-y-1.5">
            <h2 className="text-[20px] font-semibold text-[#102b1c] tracking-tight">
              {title}
            </h2>
            <p className="text-[14px] text-[#3b3b3c] mt-1.5">{subtitle}</p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200/70 p-4 md:p-5 text-left mb-6 shadow-xs">
            <div className="grid grid-cols-12 gap-3 md:gap-4 items-center">
              <div className="col-span-5 aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src="/images/PaymentSuccess.png"
                  alt="Order item preview"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="col-span-7 flex flex-col justify-between h-full space-y-2">
                <h3 className="text-sm md:text-base font-bold text-secondary-bg">
                  Order Summary
                </h3>

                <div className="space-y-1.5 text-xs md:text-[13px]">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500 font-normal">Order ID</span>
                    <span className="font-semibold text-stone-800">
                      {orderDetails.orderId || '9400 1111 2222'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-stone-500 font-normal">
                      Treatment
                    </span>
                    <span className="font-semibold text-stone-800">
                      {orderDetails.treatment || 'Weight loss'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-stone-500 font-normal">Plan</span>
                    <span className="font-semibold text-stone-800">
                      {orderDetails.plan || '3 Months'}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-stone-500 font-normal leading-tight">
                      Estimated
                      <br />
                      Delivery
                    </span>
                    <span className="font-semibold text-stone-800 text-right">
                      {orderDetails.estimatedDelivery || 'Jul 30, 2026'}
                    </span>
                  </div>
                </div>

                <div className="border-t border-stone-100 my-1 pt-1.5 flex justify-between items-center">
                  <span className="text-stone-500 text-xs font-normal">
                    Total
                  </span>
                  <span className="text-sm md:text-base font-bold text-secondary-bg">
                    {orderDetails.totalAmount || '$200'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleButtonClick}
            className="w-full bg-secondary-bg hover:bg-[#143B2A] text-white font-semibold text-sm md:text-base py-3.5 px-6 rounded-full transition-colors duration-200 shadow-sm active:scale-[0.99] cursor-pointer"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
