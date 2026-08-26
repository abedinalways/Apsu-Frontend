'use client';

import CheckupIcon from '../icons/CheckupIcon';

interface TreatmentData {
  title: string;
  planDuration: string;
  status: string;
  medication: string;
  startDate: string;
  duration: string;
  renewalDate: string;
  progressPercentage: number;
}

interface TreatmentCardProps {
  data: TreatmentData;
}

export default function TreatmentCard({ data }: TreatmentCardProps) {
  return (
    <div className="w-full bg-white border border-lightGreenColor rounded-2xl p-6 text-left space-y-6 font-[Work_Sans]">
      {/* Top Header Section */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-13 h-13 rounded-full bg-primaryColor flex items-center justify-center text-lightGreenColor shrink-0">
            <CheckupIcon />
          </div>
          <div>
            <h3 className="text-xl md:text-[24px] font-semibold text-blackColor tracking-tight">
              {data.title}
            </h3>
            <p className="text-sm md:text-[16px] text-grayColor1 font-light">
              {data.planDuration}
            </p>
          </div>
        </div>

        <span className="px-3 py-1 text-xs font-medium text-secondary-text bg-lightGreenColor border border-lightGreenColor rounded-full capitalize">
          {data.status}
        </span>
      </div>

      {/* Info Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 pt-2 ">
        <div className="space-y-1">
          <span className="text-sm text-grayColor1 font-light">Medication</span>
          <p className="text-md md:text-[18px] font-bold text-blackColor">
            {data.medication}
          </p>
        </div>

        <div className="space-y-1">
          <span className="text-sm text-grayColor1 font-light">Start Date</span>
          <p className="text-md md:text-[18px] font-bold text-blackColor">
            {data.startDate}
          </p>
        </div>

        <div className="space-y-1">
          <span className="text-sm text-grayColor1 font-light">Duration</span>
          <p className="text-md md:text-[18px] font-bold text-blackColor">
            {data.duration}
          </p>
        </div>

        <div className="space-y-1">
          <span className="text-sm text-grayColor1 font-light">
            Renewal Date
          </span>
          <p className="text-md md:text-[18px] font-bold text-blackColor">
            {data.renewalDate}
          </p>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="space-y-2 pt-2">
        <div className="flex justify-between items-center text-xs text-grayColor1 font-light">
          <span>Progress</span>
          <span className="text-grayColor1">
            {data.progressPercentage}% complete
          </span>
        </div>
        <div className="w-full h-2 bg-lightGreenColor rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${data.progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
