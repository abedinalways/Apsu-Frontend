import Assessment from "@/components/Assessment/Assessment";
import React from "react";

export default function AssessmentPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Assessment />
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import GetStartModal from "@/components/Assessment/modal/GetStartModal";

// export default function AssessmentPage() {
//   const router = useRouter();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedFlow, setSelectedFlow] = useState<
//     "sleep" | "weight" | "birth" | null
//   >(null);

//   const triggerModal = (flow: "sleep" | "weight" | "birth") => {
//     setSelectedFlow(flow);
//     setModalOpen(true);
//   };

//   const executeRouting = () => {
//     setModalOpen(false);
//     if (selectedFlow === "sleep") router.push("/assessment/sleep");
//     if (selectedFlow === "weight") router.push("/assessment/weight-loss");
//     if (selectedFlow === "birth") router.push("/assessment/birth-control");
//   };

//   return (
//     <div className="p-8 space-x-4">
//       <button
//         onClick={() => triggerModal("sleep")}
//         className="border p-2 rounded"
//       >
//         Sleep Button
//       </button>
//       <button
//         onClick={() => triggerModal("weight")}
//         className="border p-2 rounded bg-black text-white"
//       >
//         Weight Button
//       </button>
//       <button
//         onClick={() => triggerModal("birth")}
//         className="border p-2 rounded bg-black text-white"
//       >
//         Birth Control
//       </button>

//       <GetStartModal
//         isOpen={modalOpen}
//         onOpenChange={setModalOpen}
//         onGetStarted={executeRouting}
//       />
//     </div>
//   );
// }
