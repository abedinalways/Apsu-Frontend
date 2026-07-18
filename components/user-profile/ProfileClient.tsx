'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import EmptyTabState from './EmptyTabState';
import EditProfileModal from './EditProfileModal';
import EditIcon from '../icons/EditIcon';
import MessageIcon from '../icons/MessageIcon';
import CallIcon from '../icons/CallIcon';
import LocationIcon from '../icons/LocationIcon';
import VideoCallIcon from '../icons/VideoCallIcon';
import TreatmentCard from './TreatmentCard';
import NotApprovedTreatment from './NotApprovedTreatment';
import ConsultationTabContainer from './ConsultationTabContainer';
import OrderDetailsTab from './OrderDetailsTab';
import PrescriptionsTab from './PrescriptionsTab';

const TABS = [
  { id: 'my-treatments', label: 'My Treatments' },
  { id: 'consultations', label: 'Consultations' },
  { id: 'order-details', label: 'Order Details' },
  { id: 'prescriptions', label: 'Prescriptions' },
];

export default function ProfileClient() {
  const [treatmentState, setTreatmentState] = useState<
    'approved' | 'not-approved' | 'empty'
  >('not-approved');
  const hasOrders = true;
  const hasPrescriptions = true;

  const activeTreatment = {
    title: 'Weight Loss Program',
    planDuration: '12 months plan',
    status: 'Active',
    medication: 'Semaglutide 0.5mg',
    startDate: 'Jan 15, 2025',
    duration: '6 Months',
    renewalDate: 'Jul 15, 2025',
    progressPercentage: 33,
  };

  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'my-treatments';
  const { user, isLoading: isAuthLoading } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabChange = (tabId: string) => {
    router.push(`/profile?tab=${tabId}`, { scroll: false });
  };

  // Derive user display info from auth context
  const userName = user?.name || user?.email?.split('@')[0] || 'User';
  const userEmail = user?.email || '';
  const userInitials = userName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'US';

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthLoading && !user) {
      router.replace('/login?redirect=%2Fprofile');
    }
  }, [user, isAuthLoading, router]);

  if (isAuthLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="space-y-6 font-[Work_Sans] w-full">
      <div className="bg-white border border-[#cddcd3] rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative">
        <div className="w-24 h-24 md:w-40 md:h-40 md:absolute md:top-6 md:left-4 rounded-full bg-[#102b1c] top-10 flex items-center justify-center text-white text-2xl md:text-3xl font-semibold shrink-0">
          {userInitials}
        </div>

        <div className="text-center md:w-full md:mx-auto space-y-3 mt-2">
          <h1 className="text-2xl md:text-[32px] font-medium text-[#142C1E] text-start md:ml-60">
            {userName}
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-3 md:gap-5 text-[14px] text-gray-500">
            <span className="flex items-center gap-1.5">
              <MessageIcon /> {userEmail}
            </span>
            <span className="flex items-center gap-1.5">
              <CallIcon /> (555)-XXX-XXXX
            </span>
            <span className="flex items-center gap-1.5">
              <LocationIcon /> Jakarta, Indonesia
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="md:absolute md:top-8 md:right-8 flex items-center gap-2 px-4 py-2 border border-[#EBEAE4] rounded-full text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
        >
          <EditIcon /> Edit
        </button>
      </div>

      <div className="bg-white border border-[#EBEAE4] rounded-[24px] p-6 max-w-md w-full space-y-4 mt-12">
        <p className="text-sm md:text-[16px] font-normal tracking-wider text-[#00774d] uppercase">
          Upcoming Consultation
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-[24px] font-bold text-[#102b1c]">
              Jul 20, 2026
            </h3>
            <p className="text-md md:text-[16px] text-[#3b3b3c] mt-0.5">
              02:00 PM EST, Dr. Robert
            </p>
          </div>
          <button className="bg-[#102b1c] hover:bg-[#1c3d2a] text-white text-sm font-medium h-11 px-5 rounded-full flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
            <VideoCallIcon /> Join Call
          </button>
        </div>
      </div>

      <div className="bg-white border border-[#EBEAE4] rounded-[24px] overflow-hidden">
        <div className="px-4 py-4 md:px-8 border-b border-[#F4F3EF] flex justify-center md:justify-start">
          <div className="bg-transparent lg:bg-[#E8F3ED] flex flex-wrap md:flex-nowrap mx-auto justify-center gap-2 p-2 md:p-2 rounded-full">
            {TABS.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${isActive ? 'bg-[#A3C9A8] text-[#142C1E] shadow-sm cursor-pointer' : 'text-gray-600 hover:text-gray-900 hover:bg-[#F4F3EF] cursor-pointer'}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-3 md:p-8 min-h-[320px] flex flex-col items-center justify-center ">
          {activeTab === 'my-treatments' && (
            <>
              {treatmentState === 'approved' && (
                <TreatmentCard data={activeTreatment} />
              )}

              {treatmentState === 'not-approved' && (
                <NotApprovedTreatment
                  onViewOrder={() => handleTabChange('order-details')}
                  onStartAssessment={() => router.push('/assessment')}
                />
              )}

              {treatmentState === 'empty' && (
                <EmptyTabState
                  message="No active treatment yet."
                  subMessage="Your treatment details and timelines will be listed here once active."
                />
              )}
            </>
          )}

          {activeTab === 'consultations' && <ConsultationTabContainer />}

          {activeTab === 'order-details' &&
            (hasOrders ? (
              <OrderDetailsTab />
            ) : (
              <EmptyTabState
                message="No orders placed yet."
                subMessage="Track your prescription shipments and delivery status right here."
              />
            ))}

          {activeTab === 'prescriptions' &&
            (hasPrescriptions ? (
              <PrescriptionsTab />
            ) : (
              <EmptyTabState
                message="No active prescriptions found."
                subMessage="Once our medical panel approves your request, authorized details will be available."
              />
            ))}
        </div>
      </div>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
