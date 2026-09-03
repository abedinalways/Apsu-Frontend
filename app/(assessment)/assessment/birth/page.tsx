import { pageMetadata } from '@/lib/seo/metadata';

export const metadata = pageMetadata({
  title: 'Birth Control Assessment',
  description: 'Complete your birth control assessment with US-licensed physicians.',
  path: '/assessment/birth',
  noIndex: true, // Don't index assessment pages
});


import MultiStepForm from "@/containers/Assessment/BirthControl/MultiStepForm";

export default function BirthPage() {
  return (
    <div className="bg-background-color min-h-screen">
      <MultiStepForm />
    </div>
  );
}
