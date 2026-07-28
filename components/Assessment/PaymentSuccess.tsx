"use client";

import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormData } from "@/zod/AssessmentSchema";

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
  className?: string;
}

function getOrderDetails(data: FormData): OrderDetails {
  const goalLabel =
    data.goal === "weight-loss"
      ? "Weight Loss"
      : data.goal === "birth-control"
        ? "Birth Control"
        : "Sleep";

  const planLabel =
    data.treatmentPlan === "1-month"
      ? "1 Month"
      : data.treatmentPlan === "3-months"
        ? "3 Months"
        : data.treatmentPlan === "6-months"
          ? "6 Months"
          : "12 Months";

  const planPrice: Record<string, string> = {
    "1-month": "$150",
    "3-months": "$450",
    "6-months": "$800",
    "12-months": "$1500",
  };

  const orderId =
    Math.floor(1000 + Math.random() * 9000) +
    " " +
    Math.floor(1000 + Math.random() * 9000) +
    " " +
    Math.floor(1000 + Math.random() * 9000);

  const deliveryDate = data.consultationDate
    ? new Date(data.consultationDate + "T00:00:00").toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          year: "numeric",
        },
      )
    : "TBD";

  return {
    orderId,
    treatment: goalLabel,
    plan: planLabel,
    estimatedDelivery: deliveryDate,
    totalAmount: planPrice[data.treatmentPlan] || "$450",
    productName: goalLabel,
    productSubtext: planLabel + " Plan",
  };
}

function TirzepatideVialsIllustration() {
  return (
    <div className="relative w-full h-full min-h-[140px] flex items-center justify-center bg-[#D3FAF0] rounded-2xl overflow-hidden p-3 select-none">
      <svg
        viewBox="0 0 200 180"
        className="w-full h-full max-h-[150px] filter drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(100, 30) rotate(12) scale(0.85)">
          <rect
            x="25"
            y="55"
            width="40"
            height="55"
            rx="4"
            fill="#E6FAF3"
            opacity="0.9"
          />
          <rect
            x="25"
            y="80"
            width="40"
            height="30"
            rx="2"
            fill="#B3F3DC"
            opacity="0.6"
          />
          <rect
            x="22"
            y="35"
            width="46"
            height="80"
            rx="8"
            stroke="#728A81"
            strokeWidth="2.5"
            fill="white"
            fillOpacity="0.85"
          />
          <rect x="27" y="25" width="36" height="10" rx="2" fill="#78A393" />
          <rect x="24" y="17" width="42" height="9" rx="3" fill="#A3C6B9" />
          <rect x="26" y="15" width="38" height="3" rx="1.5" fill="#5F8878" />
          <rect
            x="24"
            y="45"
            width="42"
            height="50"
            fill="white"
            rx="2"
            stroke="#E2E8F0"
            strokeWidth="1"
          />
          <text
            x="45"
            y="60"
            textAnchor="middle"
            fontSize="6.5"
            fontWeight="bold"
            fill="#0B251A"
            letterSpacing="0.5"
          >
            TIRZEPATIDE
          </text>
          <text x="45" y="68" textAnchor="middle" fontSize="3.5" fill="#4B6358">
            Weight Loss Program
          </text>
          <line
            x1="30"
            y1="73"
            x2="60"
            y2="73"
            stroke="#CBD5E1"
            strokeWidth="0.8"
          />
          <text x="45" y="80" textAnchor="middle" fontSize="3" fill="#64748B">
            Physician Prescribed
          </text>
          <text x="45" y="86" textAnchor="middle" fontSize="3" fill="#64748B">
            Multi-Dose Vial
          </text>
        </g>
        <g transform="translate(25, 20) rotate(-8)">
          <rect
            x="25"
            y="55"
            width="46"
            height="60"
            rx="4"
            fill="#E6FAF3"
            opacity="0.9"
          />
          <rect
            x="25"
            y="85"
            width="46"
            height="30"
            rx="2"
            fill="#9BEAD0"
            opacity="0.75"
          />
          <rect
            x="22"
            y="35"
            width="52"
            height="88"
            rx="10"
            stroke="#5A786E"
            strokeWidth="3"
            fill="white"
            fillOpacity="0.9"
          />
          <rect x="28" y="23" width="40" height="12" rx="2" fill="#6E9A8A" />
          <rect x="24" y="14" width="48" height="10" rx="4" fill="#91B8AA" />
          <rect x="27" y="11" width="42" height="4" rx="2" fill="#4A7565" />
          <rect
            x="24"
            y="47"
            width="48"
            height="56"
            fill="white"
            rx="2"
            stroke="#E2E8F0"
            strokeWidth="1"
          />
          <text
            x="48"
            y="64"
            textAnchor="middle"
            fontSize="7.5"
            fontWeight="bold"
            fill="#0B251A"
            letterSpacing="0.8"
          >
            TIRZEPATIDE
          </text>
          <text x="48" y="73" textAnchor="middle" fontSize="4" fill="#3B5248">
            Weight Loss Program
          </text>
          <line
            x1="32"
            y1="78"
            x2="64"
            y2="78"
            stroke="#E2E8F0"
            strokeWidth="0.8"
          />
          <text x="48" y="85" textAnchor="middle" fontSize="3.5" fill="#64748B">
            Physician Prescribed
          </text>
          <text x="48" y="92" textAnchor="middle" fontSize="3.5" fill="#64748B">
            Multi-Dose Vial
          </text>
        </g>
      </svg>
    </div>
  );
}

export default function PaymentSuccess({
  title = "Payment Successful!",
  subtitle = "Your payment has been received successfully.",
  orderDetails: orderDetailsProp,
  buttonText = "Continue to Profile",
  onScheduleConsultation,
  className = "",
}: PaymentSuccessProps) {
  const router = useRouter();

  const handleButtonClick = () => {
    if (onScheduleConsultation) {
      onScheduleConsultation();
    } else {
      router.push("/profile");
    }
  };
  const [orderDetails, setOrderDetails] = useState<OrderDetails>(
    orderDetailsProp || {
      orderId: "9400 1111 2222",
      treatment: "Weight loss",
      plan: "3 Months",
      estimatedDelivery: "Jul 30, 2026",
      totalAmount: "$200",
    },
  );

  useEffect(() => {
    if (orderDetailsProp) return;
    const stored = sessionStorage.getItem("assessmentFormData");
    if (stored) {
      try {
        const data: FormData = JSON.parse(stored);
        setOrderDetails(getOrderDetails(data));
      } catch {
        setOrderDetails({
          orderId: "9400 1111 2222",
          treatment: "Weight loss",
          plan: "3 Months",
          estimatedDelivery: "Jul 30, 2026",
          totalAmount: "$200",
        });
      }
    }
  }, [orderDetailsProp]);

  return (
    <div className={`w-full max-w-md mx-auto pt-10 px-4 pb-4 ${className}`}>
      <div className="relative bg-[#FAF8F5] border border-stone-200/80 rounded-[28px] p-6 pt-10 md:p-8 md:pt-12 text-center shadow-sm">
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 flex items-center justify-center w-18 h-18 rounded-full bg-[#036845] text-white shadow-md ring-4 ring-white">
          <Check className="w-9 h-9 stroke-[3]" />
        </div>

        <div className="mb-6 space-y-1.5">
          <h2 className="text-xl md:text-2xl font-bold text-[#0B251A] tracking-tight">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-stone-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200/70 p-4 md:p-5 text-left mb-6 shadow-xs">
          <div className="grid grid-cols-12 gap-3 md:gap-4 items-center">
            <div className="col-span-5 aspect-square relative rounded-xl overflow-hidden bg-[#D3FAF0]">
              {orderDetails.productImageUrl ? (
                <img
                  src={orderDetails.productImageUrl}
                  alt="Order item preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <TirzepatideVialsIllustration />
              )}
            </div>

            <div className="col-span-7 flex flex-col justify-between h-full space-y-2">
              <h3 className="text-sm md:text-base font-bold text-[#0B251A]">
                Order Summary
              </h3>

              <div className="space-y-1.5 text-xs md:text-[13px]">
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 font-normal">Order ID</span>
                  <span className="font-semibold text-stone-800">
                    {orderDetails.orderId || "9400 1111 2222"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-stone-500 font-normal">Treatment</span>
                  <span className="font-semibold text-stone-800">
                    {orderDetails.treatment || "Weight loss"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-stone-500 font-normal">Plan</span>
                  <span className="font-semibold text-stone-800">
                    {orderDetails.plan || "3 Months"}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-stone-500 font-normal leading-tight">
                    Estimated
                    <br />
                    Delivery
                  </span>
                  <span className="font-semibold text-stone-800 text-right">
                    {orderDetails.estimatedDelivery || "Jul 30, 2026"}
                  </span>
                </div>
              </div>

              <div className="border-t border-stone-100 my-1 pt-1.5 flex justify-between items-center">
                <span className="text-stone-500 text-xs font-normal">
                  Total
                </span>
                <span className="text-sm md:text-base font-bold text-[#0B251A]">
                  {orderDetails.totalAmount || "$200"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleButtonClick}
          className="w-full bg-[#0B251A] hover:bg-[#143B2A] text-white font-semibold text-sm md:text-base py-3.5 px-6 rounded-full transition-colors duration-200 shadow-sm active:scale-[0.99] cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
