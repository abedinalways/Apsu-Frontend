import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Birth Control Assessment',
  robots: { index: false, follow: false },
};


import MultiStepForm from "@/containers/Assessment/BirthControl/MultiStepForm";

export default function BirthPage() {
  return (
    <div className="bg-background-color min-h-screen">
      <MultiStepForm />
    </div>
  );
}
