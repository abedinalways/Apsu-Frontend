'use client';

import {
  CalendarDays,
  Clock,
  CloudSun,
  MessageSquare,
  Moon,
  Sun,
  Syringe,
  X,
} from 'lucide-react';
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

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

export default function PrescriptionDetailsModal({
  open,
  onClose,
  data,
}: PrescriptionDetailsModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!overlayRef.current || !modalRef.current) return;

    if (open) {
      gsap.killTweensOf([overlayRef.current, modalRef.current]);

      gsap.set(overlayRef.current, { display: 'flex', opacity: 0 });
      gsap.set(modalRef.current, { opacity: 0, y: 24, scale: 0.96 });

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.25,
        ease: 'power2.out',
      });

      gsap.to(modalRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });

      document.body.style.overflow = 'hidden';
    } else {
      gsap.killTweensOf([overlayRef.current, modalRef.current]);

      gsap.to(modalRef.current, {
        opacity: 0,
        y: 16,
        scale: 0.97,
        duration: 0.2,
        ease: 'power2.in',
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { display: 'none' });
          }
        },
      });

      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!data) return null;

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
      className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
      onClick={e => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[920px] max-h-[90vh] overflow-y-auto rounded-[28px] bg-white shadow-[0_24px_80px_rgba(20,44,30,0.18)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="prescription-details-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#E8F0EB] px-6 py-5 md:px-8 md:py-6">
          <div>
            <h2
              id="prescription-details-title"
              className="text-xl md:text-2xl font-semibold text-[#142C1E]"
            >
              Prescriptions Details
            </h2>
            <p className="mt-1 text-sm text-[#666666]">
              View your prescription and treatment information
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8E6DE] text-[#97A7A0] transition hover:bg-[#F7FAF8] hover:text-[#142C1E]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 p-4 md:space-y-5 md:p-6">
          {/* Top summary card */}
          <div className="rounded-[20px] border border-[#E8F0EB] bg-[#FAFCFA] p-4 md:p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:justify-between">
              {/* Left: treatment */}
              <div className="flex flex-1 gap-3 md:gap-4">
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-[#14311F] text-white">
                  <Syringe className="h-5 w-5 md:h-6 md:w-6" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base md:text-lg font-semibold text-[#142C1E]">
                      {data.treatmentName}
                    </h3>
                    <span className="rounded-full border border-[#BCEFD0] bg-[#ECFFF3] px-2.5 py-0.5 text-xs font-medium text-[#21A45A]">
                      {data.status}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-[#21A45A]">
                    {data.treatmentSub}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                    {approvalNote}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden w-px shrink-0 bg-[#E0EBE4] lg:block" />
              <div className="h-px w-full bg-[#E0EBE4] lg:hidden" />

              {/* Right: doctor */}
              <div className="flex flex-col items-start gap-3 lg:min-w-[220px] lg:items-end">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#14311F] text-xs font-semibold text-white">
                    DR
                  </div>
                  <div className="text-left lg:text-right">
                    <p className="text-xs text-[#888888]">Prescribed By</p>
                    <p className="text-sm font-semibold text-[#142C1E]">
                      {doctorName}
                    </p>
                    <p className="text-xs text-[#888888]">{doctorTitle}</p>
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 rounded-full border border-[#D8E6DE] bg-white px-4 py-2 text-sm font-medium text-[#142C1E] transition hover:bg-[#F7FAF8]">
                  <MessageSquare className="h-4 w-4" />
                  Message Care Team
                </button>
              </div>
            </div>
          </div>

          {/* Details grid */}
          <div className="rounded-[20px] border border-[#E8F0EB] bg-white p-4 md:p-6">
            <h4 className="mb-4 text-base font-semibold text-[#142C1E]">
              Details
            </h4>

            <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              <DetailItem
                icon={<Syringe className="h-4 w-4 text-[#21A45A]" />}
                label="Dosage"
                value={dosage}
              />
              <DetailItem
                icon={<Clock className="h-4 w-4 text-[#21A45A]" />}
                label="Duration"
                value={data.duration}
              />
              <DetailItem
                icon={<Syringe className="h-4 w-4 text-[#21A45A]" />}
                label="Prescribed ID"
                value={prescribedId}
              />
              <DetailItem
                icon={<CalendarDays className="h-4 w-4 text-[#21A45A]" />}
                label="Prescription Issue Date"
                value={issueDate}
              />
              <DetailItem
                icon={<CalendarDays className="h-4 w-4 text-[#21A45A]" />}
                label="Medication Start Date"
                value={startDate}
              />
              <DetailItem
                icon={<CalendarDays className="h-4 w-4 text-[#21A45A]" />}
                label="Expiry Date"
                value={expiryDate}
              />
              <DetailItem
                icon={<Sun className="h-4 w-4 text-[#21A45A]" />}
                label="Morning"
                value={morning}
              />
              <DetailItem
                icon={<CloudSun className="h-4 w-4 text-[#21A45A]" />}
                label="Afternoon"
                value={afternoon}
              />
              <DetailItem
                icon={<Moon className="h-4 w-4 text-[#21A45A]" />}
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

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ECFFF3]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-[#888888]">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-[#142C1E]">{value}</p>
      </div>
    </div>
  );
}
