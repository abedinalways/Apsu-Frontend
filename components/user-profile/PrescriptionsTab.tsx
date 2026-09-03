'use client';

import { CalendarDays, MoreVertical, Pill, Syringe } from 'lucide-react';
import { useEffect, useState } from 'react';
import PrescriptionMenu from './PrescriptionMenu';
import PrescriptionDetailsModal from './PrescriptionDetailsModal';
import PrescriptionTrackOrderModal from './PrescriptionTrackOrderModal';

interface PrescriptionData {
  id: string;
  treatmentName: string;
  treatmentSub: string;
  duration: string;
  status: 'Approved' | 'Pending';
  type: 'pill' | 'injection';
}

interface ModalData {
  id: string;
  treatmentName: string;
  treatmentSub: string;
  duration: string;
  status: 'Approved' | 'Pending';
  type: 'pill' | 'injection';
  dosage: string;
  prescribedId: string;
  issueDate: string;
  startDate: string;
  expiryDate: string;
  morning: string;
  afternoon: string;
  evening: string;
  doctorName: string;
  doctorTitle: string;
  approvalNote: string;
}

export default function PrescriptionsTab() {
  const prescriptions: PrescriptionData[] = [
    {
      id: '1',
      treatmentName: 'Semaglutide Injection',
      treatmentSub: 'Weight Loss Treatment',
      duration: '6 Months Plan',
      status: 'Approved',
      type: 'injection',
    },
    {
      id: '2',
      treatmentName: 'Wegovy',
      treatmentSub: 'Weight Loss Treatment',
      duration: '6 Months Plan',
      status: 'Approved',
      type: 'pill',
    },
  ];

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [trackModalData, setTrackModalData] = useState<PrescriptionData | null>(
    null,
  );

  const handleMenuClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMenuId(prev => (prev === id ? null : id));
  };

  const openDetailsModal = (item: PrescriptionData) => {
    const data: ModalData = {
      ...item,
      dosage:
        item.type === 'injection'
          ? '0.5 mg weekly injection'
          : '1 tablet daily',
      prescribedId: `RX-APSU-10024${item.id}`,
      issueDate: 'Jul 27, 2026',
      startDate: 'Jul 27, 2026',
      expiryDate: 'Jul 27, 2026',
      morning: '0',
      afternoon: '1, before meal',
      evening: '1, before meal',
      doctorName: 'Dr. Robert Wilson',
      doctorTitle: 'Licensed Physician, US',
      approvalNote:
        'Your prescription has been reviewed and approved by your physician.',
    };
    setModalData(data);
    setShowModal(true);
    setOpenMenuId(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  const openTrackModal = (item: PrescriptionData) => {
    setTrackModalData(item);
    setShowTrackModal(true);
    setOpenMenuId(null);
  };

  const closeTrackModal = () => {
    setShowTrackModal(false);
    setTrackModalData(null);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  useEffect(() => {
    if (showTrackModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showTrackModal]);

  return (
    <section className="w-full font-[Work_Sans]">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-[32px] font-semibold text-secondary-text">
          Prescriptions
        </h2>
        <p className="mt-2 text-sm md:text-base text-grayColor1">
          Approved by APSU physicians.
        </p>
      </div>

      <div className="space-y-4 md:space-y-5">
        {prescriptions.map(item => (
          <div
            key={item.id}
            className="group rounded-[24px] border border-lightGreenColor bg-white p-4 md:p-6 transition-all duration-300 hover:border-lightGreenColor hover:shadow-lg"
          >
            <div className="hidden md:flex items-start justify-between gap-4">
              <div className="flex flex-1 items-start gap-4">
                <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-primaryColor text-white">
                  {item.type === 'injection' ? (
                    <Syringe className="h-6 w-6 md:h-7 md:w-7" />
                  ) : (
                    <Pill className="h-6 w-6 md:h-7 md:w-7" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                    <h3 className="text-md md:text-lg font-semibold leading-tight text-secondary-text">
                      {item.treatmentName}
                    </h3>
                    <span className="w-fit rounded-full border border-lightGreenColor bg-background px-3 py-1 text-xs font-medium text-greenColor">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-grayColor1 flex items-start">
                    {item.treatmentSub}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-grayColor1">
                    <CalendarDays className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm">{item.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button
                    onClick={e => handleMenuClick(e, item.id)}
                    className="flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full border border-lightGreenColor text-grayColor1 transition hover:bg-background hover:text-secondary-text"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                  <PrescriptionMenu
                    open={openMenuId === item.id}
                    onClose={() => setOpenMenuId(null)}
                    onViewDetails={() => openDetailsModal(item)}
                    onTrackOrder={() => openTrackModal(item)}
                  />
                </div>
              </div>
            </div>

            <div className="flex md:hidden items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primaryColor text-white">
                {item.type === 'injection' ? (
                  <Syringe className="h-5 w-5" />
                ) : (
                  <Pill className="h-5 w-5" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <span className="flex items-start rounded-full border border-lightGreenColor bg-background px-3 py-1 text-xs font-medium text-greenColor w-fit">
                      {item.status}
                    </span>
                    <h3 className="mt-3 text-base font-semibold leading-tight text-secondary-text flex items-start">
                      {item.treatmentName}
                    </h3>
                    <p className="mt-2 text-sm text-grayColor1 flex items-start">
                      {item.treatmentSub}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-grayColor1">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={e => handleMenuClick(e, item.id)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lightGreenColor text-grayColor1 transition hover:bg-background hover:text-secondary-text"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>
                    <PrescriptionMenu
                      open={openMenuId === item.id}
                      onClose={() => setOpenMenuId(null)}
                      onViewDetails={() => openDetailsModal(item)}
                      onTrackOrder={() => openTrackModal(item)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && modalData && (
        <PrescriptionDetailsModal
          open={showModal}
          onClose={closeModal}
          data={modalData}
        />
      )}

      {showTrackModal && trackModalData && (
        <PrescriptionTrackOrderModal
          open={showTrackModal}
          onClose={closeTrackModal}
          data={trackModalData}
        />
      )}
    </section>
  );
}
