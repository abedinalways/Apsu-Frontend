'use client';

import { Video, Calendar } from 'lucide-react';
import CalenderIcon from '../icons/CalenderIocn';

interface ConsultationData {
  doctorName: string;
  specialty: string;
  program: string;
  status: string;
  time: string;
  date: string;
}

interface ConsultationCardProps {
  data: ConsultationData;
  onReschedule: () => void;
}

export default function ConsultationCard({
  data,
  onReschedule,
}: ConsultationCardProps) {
  return (
    <div className="w-full text-left space-y-4 font-[Work_Sans]">
      {/* Section Title */}
      <h3 className="text-lg font-semibold text-secondary-text">Upcoming</h3>

      {/* Main Card */}
      <div className="w-full bg-white border border-[#EBEAE4] rounded-[24px] p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left: Info Section */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#102b1c] flex items-center justify-center text-[#A3C9A8] shrink-0">
            <CalenderIcon />
          </div>

          <div className="space-y-1.5">
            <span className="px-3 py-1 text-[12px] font-normal text-[#00a6f4] border border-[#c1e3f9] bg-[#def2ff] rounded-full">
              {data.status}
            </span>

            <h4 className="text-xl md:text-[1.5rem] font-medium text-gray-900 tracking-tight">
              {data.doctorName}
            </h4>

            <p className="text-xs md:text-sm text-[#6c6c6c] font-light leading-[160%]">
              {data.specialty} · {data.program}
            </p>

            {/* Meta: Time and Date */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs md:text-sm text-gray-600">
              <span className="flex items-center gap-1.5 font-light text-sm md:text-[16px]">
                <svg
                  className="w-4 h-4 opacity-60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {data.time}
              </span>
              <span className="flex items-center gap-1.5 font-light text-sm md:text-[16px]">
                <Calendar className="w-4 h-4 opacity-60" />
                {data.date}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2   items-center gap-4 md:gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0">
          <button className="flex-1 md:flex-none bg-secondary-text hover:bg-[#1c3d2a] text-white text-sm font-medium h-11 px-5 rounded-full flex items-center justify-center gap-2 transition-colors">
            <Video className="w-4 h-4" /> Join Call
          </button>
          <button
            onClick={onReschedule}
            className="flex-1 md:flex-none bg-white hover:bg-gray-50 text-gray-700 text-sm md:text-[16px] font-medium h-11 px-5 border border-[#102b1c] rounded-full transition-colors"
          >
            Reschedule
          </button>
        </div>
      </div>
    </div>
  );
}
