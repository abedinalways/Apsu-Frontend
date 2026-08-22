'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import SyringeIcon from '../icons/SyringeIcon';
import ChatIcon from '../icons/ChatIcon';
import SyringeIconDark from '../icons/SyringeIconDark';
import ClockIcon from '../icons/ClockIcon';
import CalenderIcon from '../icons/CalenderIcon';
import SunIcon from '../icons/SunIcon';
import CloudIcon from '../icons/CloudIcon';
import MoonIcon from '../icons/MoonIcon';

export interface PrescriptionDetailsData {
  id: string;
  treatmentName: string;
  treatmentSub: string;
  duration: string;
  status: 'Approved' | 'Pending';
  type: 'pill' | 'injection';
  dosage?: string;
  prescribedId?: string;
  issueDate?: string;
  startDate?: string;
  expiryDate?: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
  doctorName?: string;
  doctorTitle?: string;
  approvalNote?: string;
}

interface PrescriptionDetailsModalProps {
  open: boolean;
  onClose: () => void;
  data: PrescriptionDetailsData | null;
}

function DetailItem({
  icon,
  label,
  value,
  index,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  index: number;
}) {
  return (
    <div
      className={`flex items-start gap-3 p-4 md:p-6 border-[#E8F0EB] max-lg:border-b last:max-lg:border-b-0 ${(index + 1) % 3 !== 0 ? 'lg:border-r' : ''} ${index < 6 ? 'lg:border-b' : ''}`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ecf9f1]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-[#888888] text-justify">{label}</p>
        <p className="mt-0.5 text-sm md:text-[16px] font-normal text-secondary-text text-justify">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function PrescriptionDetailsModal({
  open,
  onClose,
  data,
}: PrescriptionDetailsModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open || !data) return null;

  const dosage = data.dosage ?? '0.5 mg weekly injection';
  const prescribedId = data.prescribedId ?? 'RX-APSU-100245';
  const issueDate = data.issueDate ?? 'Jul 27, 2026';
  const startDate = data.startDate ?? 'Jul 27, 2026';
  const expiryDate = data.expiryDate ?? 'Jul 27, 2026';
  const morning = data.morning ?? '0';
  const afternoon = data.afternoon ?? '1, before meal';
  const evening = data.evening ?? '1, before meal';
  const doctorName = data.doctorName ?? 'Dr. Robert Wilson';
  const doctorTitle = data.doctorTitle ?? 'Licensed Physician, US';
  const approvalNote =
    data.approvalNote ??
    'Your prescription has been reviewed and approved by your physician.';

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
      onClick={e => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="relative w-full max-w-230 max-h-[90vh] overflow-y-auto rounded-[28px] bg-white shadow-[0_24px_80px_rgba(20,44,30,0.18)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="prescription-details-title"
      >
        <div className="flex items-start justify-between gap-4 px-6 py-5 md:px-8 md:py-6">
          <div className="flex flex-col items-start">
            <h2
              id="prescription-details-title"
              className="text-lg md:text-xl font-semibold text-secondary-text"
            >
              Prescriptions Details
            </h2>
            <p className="mt-1 text-sm text-[#666666]">
              View your prescription and treatment information
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8E6DE] text-[#97A7A0] transition hover:bg-[#F7FAF8] hover:text-secondary-text"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 p-4 md:space-y-5 md:p-6">
          <div className="rounded-[12px] border border-[#E8F0EB] bg-white p-4 shadow">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:justify-between">
              <div className="flex flex-1 gap-3 md:gap-4">
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-[#14311F] text-white">
                  <SyringeIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap-reverse md:flex-wrap md:items-center gap-2">
                    <h3 className="text-base md:text-lg font-medium text-[#111]">
                      {data.treatmentName}
                    </h3>
                    <span className="rounded-full border border-[#BCEFD0] bg-[#ECFFF3] px-2.5 py-0.5 text-xs font-medium text-[color-greenColor]">
                      {data.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[color-greenColor] flex items-start">
                    {data.treatmentSub}
                  </p>
                  <p className="mt-3 text-xs md:text-sm md:leading-relaxed text-[#111] text-justify">
                    {approvalNote}
                  </p>
                </div>
              </div>
              <div className="hidden w-px shrink-0 bg-[#E0EBE4] lg:block" />
              <div className="h-px w-full bg-[#E0EBE4] lg:hidden" />
              <div className="flex flex-col items-start gap-3 lg:min-w-55 lg:items-start">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#102b1c] text-xs font-semibold text-white">
                    DR
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[#6c6c6c]">Prescribed By</p>
                    <p className="text-sm md:text-lg font-medium text-secondary-text">
                      {doctorName}
                    </p>
                    <p className="text-xs md:text-[14px] text-[#3b3b3c]">
                      {doctorTitle}
                    </p>
                  </div>
                </div>
                <div className="w-full flex md:justify-end justify-center">
                  <button className="flex items-center gap-2 rounded-full border border-[#000] bg-white px-4 py-1 text-sm font-medium text-secondary-text transition hover:bg-[#F7FAF8]">
                    <ChatIcon /> Message Care Team
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[12px] shadow bg-white p-4">
            <h4 className="mb-4 text-base md:text-lg font-medium text-[#102b1c] text-justify">
              Details
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <DetailItem
                index={0}
                icon={<SyringeIconDark />}
                label="Dosage"
                value={dosage}
              />
              <DetailItem
                index={1}
                icon={<ClockIcon />}
                label="Duration"
                value={data.duration}
              />
              <DetailItem
                index={2}
                icon={<SyringeIconDark />}
                label="Prescribed ID"
                value={prescribedId}
              />
              <DetailItem
                index={3}
                icon={<CalenderIcon />}
                label="Prescription Issue Date"
                value={issueDate}
              />
              <DetailItem
                index={4}
                icon={<CalenderIcon />}
                label="Medication Start Date"
                value={startDate}
              />
              <DetailItem
                index={5}
                icon={<CalenderIcon />}
                label="Expiry Date"
                value={expiryDate}
              />
              <DetailItem
                index={6}
                icon={<SunIcon />}
                label="Morning"
                value={morning}
              />
              <DetailItem
                index={7}
                icon={<CloudIcon />}
                label="Afternoon"
                value={afternoon}
              />
              <DetailItem
                index={8}
                icon={<MoonIcon />}
                label="Evening"
                value={evening}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
