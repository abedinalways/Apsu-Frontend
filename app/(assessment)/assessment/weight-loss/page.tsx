import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Weight Loss Assessment',
  description: 'Complete your weight loss assessment with US-licensed physicians.',
  path: '/assessment/weight-loss',
  noIndex: true, // Don't index assessment pages
});


import MultiStepForm from "@/containers/Assessment/WeightLoss/MultiStepForm";
import React from "react";

export default function WeightLossPage() {
  return (
    <div className="bg-background-color min-h-screen">
      <MultiStepForm />
    </div>
  );
}
