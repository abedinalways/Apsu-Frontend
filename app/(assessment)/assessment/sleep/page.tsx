import { pageMetadata } from '@/lib/seo/metadata';

export const metadata = pageMetadata({
  title: 'Sleep Assessment',
  description: 'Complete your sleep assessment with US-licensed physicians.',
  path: '/assessment/sleep',
  noIndex: true, // Don't index assessment pages
});


import MultiStepForm from "@/containers/Assessment/Sleep/MultiStepForm";
import React from "react";

export default function SleepPage() {
  return (
    <div className="bg-background-color min-h-screen">
      <MultiStepForm />
    </div>
  );
}
