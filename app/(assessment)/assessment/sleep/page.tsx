import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sleep Assessment',
  robots: { index: false, follow: false },
};


import MultiStepForm from "@/containers/Assessment/Sleep/MultiStepForm";
import React from "react";

export default function SleepPage() {
  return (
    <div className="bg-background-color min-h-screen">
      <MultiStepForm />
    </div>
  );
}
