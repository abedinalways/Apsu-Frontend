'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Eye } from 'lucide-react';
import ConsultationCard from './ConsultationCard';

interface Consultation {
  id: string;
  doctorName: string;
  specialty: string;
  program: string;
  status: 'Scheduled' | 'Upcoming' | 'Successful';
  time: string;
  date: string;
  notes?: string;
}

export default function ConsultationTabContainer() {
  const [selectedConsultation, setSelectedConsultation] =
    useState<Consultation | null>(null);

  const upcomingConsultation: Consultation = {
    id: '1',
    doctorName: 'Dr. Robert',
    specialty: 'Nutritionist',
    program: 'Weight Loss Program',
    status: 'Scheduled',
    time: '02:00 PM EST',
    date: 'Tue, Jul 20',
  };

  const consultationHistory: Consultation[] = [
    {
      id: 'h1',
      doctorName: 'Dr. Robert',
      specialty: 'Nutritionist',
      program: 'Weight Loss Program',
      status: 'Upcoming',
      time: '02:00 PM EST',
      date: 'Jul 20, 2026',
    },
    {
      id: 'h2',
      doctorName: 'Dr. Robert',
      specialty: 'Nutritionist',
      program: 'Birth Control Program',
      status: 'Successful',
      time: '02:00 PM EST',
      date: 'Jul 20, 2026',
      notes:
        'Discussed current medication efficacy. Patient reports no side effects. Continuing with current prescription. Follow-up in 6 months.',
    },
    {
      id: 'h3',
      doctorName: 'Dr. Robert',
      specialty: 'Nutritionist',
      program: 'Sleep Program',
      status: 'Successful',
      time: '02:00 PM EST',
      date: 'Jul 20, 2026',
      notes:
        'Patient is recovering well. Sleep cycle improved by 20%. Recommended continuing the evening routine.',
    },
  ];

  const handleReschedule = () => {
    toast('Reschedule Requested', {
      description: 'Our care team will contact you to reschedule.',
      duration: 4000,
    });
  };

  return (
    <div className="w-full space-y-10">
      <ConsultationCard
        data={upcomingConsultation}
        onReschedule={handleReschedule}
      />

      {/* history table for consultation */}
      <div className="w-full text-left space-y-4 font-[Work_Sans] ">
        <h3 className="text-xl  font-medium text-greenColor">
          Consultation History
        </h3>

        <div className="w-full overflow-x-auto rounded-[12px] border border-background bg-white">
          <table className="w-full border-collapse text-left min-w-[650px]">
            <thead>
              <tr className="bg-lightGreenColor text-secondary-text font-semibold text-sm">
                <th className="p-4 pl-6">Date & Time</th>
                <th className="p-4">Physician</th>
                <th className="p-4">Treatment</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-background text-sm text-blackColor">
              {consultationHistory.map(item => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  {/* Date & Time */}
                  <td className="p-4 pl-6">
                    <p className="font-medium">{item.date}</p>
                    <p className="text-xs text-grayColor1 font-light">
                      {item.time}
                    </p>
                  </td>

                  {/* Physician */}
                  <td className="p-4 font-medium text-gray-900">
                    {item.doctorName}
                  </td>

                  {/* Treatment */}
                  <td className="p-4 text-blackColor">{item.program}</td>

                  {/* Status */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-medium border ${
                        item.status === 'Upcoming'
                          ? 'text-blueColor border-borderColor bg-background'
                          : 'text-greenColor border-borderColor bg-background'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Action Button */}
                  <td className="p-4 pr-6 text-center">
                    <button
                      onClick={() => setSelectedConsultation(item)}
                      disabled={!item.notes}
                      className={`inline-flex items-center  cursor-pointer gap-1.5 text-sm font-medium transition-colors ${
                        item.notes
                          ? 'text-grayColor1 hover:text-secondary-text'
                          : 'text-grayColor1 cursor-not-allowed'
                      }`}
                      title={
                        item.notes
                          ? 'View Physician Notes'
                          : 'No notes available'
                      }
                    >
                      <Eye className="w-4 h-4" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Physician Notes (Modal) */}
      {selectedConsultation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-fade-in">
          <div className="bg-white rounded-[24px] max-w-md w-full p-6 relative shadow-xl font-[Work_Sans] text-left border border-background">
            {/* Close Button */}
            <button
              onClick={() => setSelectedConsultation(null)}
              className="absolute top-5 right-5 text-grayColor1 hover:text-grayColor1 p-1 rounded-full border border-borderColor hover:bg-background transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="space-y-4">
              <span className="text-xs md:text-[16px] font-normal uppercase tracking-[.13em] text-primary block">
                Physician Notes
              </span>

              <div className="flex gap-10 text-sm border-b border-gray-50 pb-3">
                <div>
                  <p className="text-xs md:text-[14px] text-grayColor1 font-light mb-0.5">
                    Date
                  </p>
                  <p className="font-medium text-sm md:text-[18px] text-blackColor">
                    {selectedConsultation.date}
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-[14px] text-grayColor1 font-light mb-0.5">
                    Physician
                  </p>
                  <p className="font-medium text-sm md:text-[18px] text-blackColor">
                    {selectedConsultation.doctorName}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content / Note Body */}
            <div className="mt-6 bg-background rounded-[12px] p-3 text-sm md:text-[16px] text-grayColor1 font-light leading-[160%]">
              {selectedConsultation.notes}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
