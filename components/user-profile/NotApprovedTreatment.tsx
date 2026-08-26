'use client';

import FileIcon from '../icons/FileIcon';

interface NotApprovedTreatmentProps {
  onViewOrder?: () => void;
  onStartAssessment?: () => void;
}

export default function NotApprovedTreatment({
  onViewOrder,
  onStartAssessment,
}: NotApprovedTreatmentProps) {
  return (
    <div className="w-full py-12 flex flex-col items-center justify-center text-center font-[Work_Sans] max-w-xl mx-auto">
      {/* File Cross Icon Box */}
      <div className="w-16 h-16 rounded-full bg-whiteColor flex items-center justify-center text-grayColor1 mb-5 border border-grayColor1">
        <FileIcon />
      </div>

      {/* Main Messages */}
      <h3 className="text-lg font-medium text-grayColor1 tracking-tight">
        Treatment not Approved
      </h3>
      <p className="text-sm text-grayColor1/80 font-light mt-3 leading-[160%] max-w-md italic">
        Unfortunately, your recent treatment request wasn't approved. If you'd
        like to explore another treatment option, you can start a new
        assessment.
      </p>

      {/* Action Buttons Group */}
      <div className="flex items-center gap-4 mt-8 w-full justify-center">
        <button
          onClick={onViewOrder}
          className="h-11 px-6 border border-greenColor rounded-full text-sm font-medium text-blackColor hover:bg-gray-50 transition-colors bg-white min-w-[140px]"
        >
          View Order
        </button>
        <button
          onClick={onStartAssessment}
          className="h-11 px-6 bg-greenColor hover:bg-greenColor text-white text-sm font-medium rounded-full transition-colors min-w-[180px]"
        >
          Start New Assessment
        </button>
      </div>
    </div>
  );
}
