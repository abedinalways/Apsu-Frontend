import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  UserCheck,
  Stethoscope,
  FileText,
  Truck,
  ArrowRight,
} from "lucide-react";

export interface PricingFeature {
  label: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export interface PricingCardSectionProps {
  // Background configuration
  bgImageUrl: string;
  bgImageAlt?: string;

  // Left side hero headers
  tagline?: string;
  title: string;

  // Right side pricing card information
  planName?: string;
  planDescription?: string;
  priceLabel?: string;
  priceAmount: string;
  pricePeriod?: string;

  // Interactive configurations
  buttonText?: string;
  onButtonClick?: () => void;

  // Checklist elements
  featuresTitle?: string;
  features?: PricingFeature[];

  className?: string;
}

// Default fallback icons map matching the layout features
const defaultFeatures: PricingFeature[] = [
  { label: "Eligibility check", icon: UserCheck },
  { label: "Physician consult", icon: Stethoscope },
  { label: "Prescription", icon: FileText },
  { label: "Shipping", icon: Truck },
];

export default function PricingCardSection({
  bgImageUrl,
  bgImageAlt = "Pricing plan background representation",
  tagline = "PRICING",
  title,
  planName = "Care Plan",
  planDescription = "You pay only for medication. The consult, prescription, and shipping are included.",
  priceLabel = "Starts from",
  priceAmount,
  pricePeriod = "/mo",
  buttonText = "See your price & check eligibility",
  onButtonClick,
  featuresTitle = "What's included:",
  features = defaultFeatures,
  className,
}: PricingCardSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-[800px] flex items-center py-12 md:py-20 px-4 md:px-12 lg:px-24 overflow-hidden",
        className,
      )}
    >
      {/* Background Image Layer with Dark Overlay blending filter */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl}
          alt={bgImageAlt}
          fill
          className="object-fill"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" /> */}
      </div>

      {/* Main Structural Content Grid Box Layout */}
      <div className="relative z-10 w-full container grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side: Header Copy Content Wrapper block */}
        <div className="md:col-span-6 text-white space-y-3.5 max-w-md">
          {tagline && (
            <p className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
              {tagline}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.15]">
            {title}
          </h2>
        </div>

        {/* Right Side: Care Plan Floating White Card Surface block */}
        <div className="md:col-span-6 bg-white rounded-3xl p-6 md:p-8 shadow-2xl max-w-md w-full justify-self-center md:justify-self-end text-zinc-900">
          <h3 className="text-xl font-bold text-[#0B251A] mb-2">{planName}</h3>

          <p className="text-xs md:text-sm text-zinc-500 font-medium leading-relaxed mb-6">
            {planDescription}
          </p>

          {/* Pricing Highlight Embedded Banner */}
          <div className="bg-[#FAF9F6] rounded-2xl p-5 mb-6 space-y-2">
            <p className="text-xs font-semibold text-[#0B251A] tracking-tight">
              {priceLabel}
            </p>
            <div className="flex items-baseline text-[#0F5A3E]">
              <span className="text-3xl md:text-4xl font-bold tracking-tight">
                {priceAmount}
              </span>
              <span className="text-sm font-semibold ml-0.5 text-zinc-600">
                {pricePeriod}
              </span>
            </div>

            {/* Action CTA Submission Button component frame */}
            <button
              onClick={onButtonClick}
              className="w-full mt-3 bg-[#102B1C] hover:bg-[#102B1C]/70 transition-all text-white rounded-full py-3 px-5 text-xs font-bold flex items-center justify-between shadow-md group"
            >
              <span>{buttonText}</span>
              <div className="bg-white text-[#0B251A] rounded-full p-1 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={3} />
              </div>
            </button>
          </div>

          {/* Checklist Feature Section Container */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-zinc-800 tracking-wide">
              {featuresTitle}
            </h4>

            <ul className="space-y-2.5">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs font-medium text-zinc-600"
                  >
                    {IconComponent ? (
                      <IconComponent
                        className="h-4 w-4 text-zinc-500 shrink-0"
                        strokeWidth={2}
                      />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mx-1" />
                    )}
                    <span>{feature.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
