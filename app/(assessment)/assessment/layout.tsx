import AssessmentNavbar from "@/components/Assessment/AssessmentNavbar";
import Loader from "@/components/reusable/Loader";
import React, { Suspense } from "react";

function AssessmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-[#FFFFFF]">
        <AssessmentNavbar />
        {children}
      </div>
    </Suspense>
  );
}

export default AssessmentLayout;
