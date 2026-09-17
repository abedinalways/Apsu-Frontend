import { Suspense } from "react";
import { pageMetadata } from '@/lib/seo/metadata';
import ProfileClient from "@/containers/user-profile/ProfileClient";

export const metadata = pageMetadata({
  title: 'My Profile | Apsu',
  description: 'Manage your treatments, consultations, and orders.',
  path: '/profile',
  noIndex: true, // Don't index user profile pages
});

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 flex justify-center items-start mt-40 ">
      <div className="w-full max-w-5xl space-y-6 ">
        <Suspense fallback={<div className="text-center py-10 text-grayColor1">Loading profile...</div>}>
          <ProfileClient />
        </Suspense>
      </div>
    </main>
  );
}
