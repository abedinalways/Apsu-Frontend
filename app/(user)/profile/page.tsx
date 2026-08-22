import { Suspense } from "react";
import ProfileClient from "@/containers/user-profile/ProfileClient";


export const metadata = {
  title: 'My Profile | Apsu',
  description: 'Manage your treatments, consultations, and orders.',
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] p-4 md:p-8 flex justify-center items-start mt-40 ">
      <div className="w-full max-w-5xl space-y-6 ">
        <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading profile...</div>}>
          <ProfileClient />
        </Suspense>
      </div>
    </main>
  );
}
