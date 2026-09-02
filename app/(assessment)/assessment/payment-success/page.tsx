import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Success',
  robots: { index: false, follow: false },
};

import React from "react";
import PaymentSuccess from "@/containers/Assessment/PaymentSuccess";

export default function PaymentSuccessPage() {
  return (
    <div className="bg-background-color min-h-screen">
      <PaymentSuccess />
    </div>
  );
}
