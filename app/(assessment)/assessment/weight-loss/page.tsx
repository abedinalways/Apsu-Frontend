import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weight Loss Assessment',
  robots: { index: false, follow: false },
};


import MultiStepForm from "@/containers/Assessment/WeightLoss/MultiStepForm";
import React from "react";

export default function WeightLossPage() {
  return (
    <div className="bg-background-color min-h-screen">
      <MultiStepForm />
    </div>
  );
}
