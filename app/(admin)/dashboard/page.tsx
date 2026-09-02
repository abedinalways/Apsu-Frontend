import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  robots: { index: false, follow: false },
};


import DashboardPage from "@/components/Dashboard/DashboardPage";

function page() {
  return (
    <div>
      <DashboardPage />
    </div>
  );
}

export default page;
