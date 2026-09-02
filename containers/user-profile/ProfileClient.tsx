'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { ProfileService, type Treatment } from '@/lib/services/profile.service';
import EmptyTabState from '@/components/user-profile/EmptyTabState';
import EditProfileModal from './EditProfileModal';
import EditIcon from '@/components/icons/EditIcon';
import ErrorStateWithRetry from '@/components/user-profile/ErrorStateWithRetry';
import MessageIcon from '@/components/icons/MessageIcon';
import CallIcon from '@/components/icons/CallIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import TreatmentCard from '@/components/user-profile/TreatmentCard';
import NotApprovedTreatment from '@/components/user-profile/NotApprovedTreatment';
import MessageTabContainer from '@/components/user-profile/MessageTabContainer';
import OrderDetailsTab from '@/components/user-profile/OrderDetailsTab';
import PrescriptionsTab from '@/components/user-profile/PrescriptionsTab';
import { MessagingProvider } from '@/contexts/MessagingContext';

const TABS = [
  { id: 'my-treatments', label: 'My Treatments' },
  { id: 'messages', label: 'Messages' },
  { id: 'order-details', label: 'Order Details' },
  { id: 'prescriptions', label: 'Prescriptions' },
];

type TabId = (typeof TABS)[number]['id'];

export default function ProfileClient() {
    const [treatmentState, setTreatmentState] = useState<
    'active' | 'not-approved' | 'empty' | 'loading' | 'error'
  >('loading');
  const [treatment, setTreatment] = useState<Treatment | null>(null);
  const [hasOrders, setHasOrders] = useState(false);
  const [hasPrescriptions, setHasPrescriptions] = useState(false);
    const [profileError, setProfileError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get('tab') as TabId) || 'my-treatments';
  const { isLoading: isAuthLoading } = useAuth();
  const { user } = useCurrentUser();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabChange = (tabId: string) => {
    router.push(`/profile?tab=${tabId}`, { scroll: false });
  };

  // Derive user display info from auth context
  const userName = user?.name || user?.email?.split('@')[0] || 'User';
  const userEmail = user?.email || '';
  const userInitials =
    userName
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

    // Fetch profile data with retry support
  const loadProfile = useCallback(async () => {
    if (retryCount > 0) {
      // Exponential backoff: 1s, 2s, 4s
      const delay = Math.pow(2, retryCount - 1) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    setIsRetrying(true);
    try {
      const data = await ProfileService.getProfile();

      setTreatment(data.treatment);
      setHasOrders(data.orders.length > 0);
      setHasPrescriptions(data.prescriptions.length > 0);
      // Tag names now match what each branch renders:
      //  - treatment exists (Active/Pending)      -> 'active' card
      //  - treatment exists but was denied        -> 'not-approved' screen
      //  - no treatment at all                    -> 'empty' state
      setTreatmentState(
        !data.treatment
          ? 'empty'
          : data.treatment.status === 'Not Approved'
            ? 'not-approved'
            : 'active',
      );
      setProfileError(null);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to load profile data.';
      setProfileError(message);
      setTreatmentState('error');
    } finally {
      setIsRetrying(false);
    }
  }, [retryCount]);

  useEffect(() => {
    if (user || !isAuthLoading) {
      loadProfile();
    }
  }, [user, isAuthLoading, loadProfile]);

  const handleRetry = () => {
    if (retryCount < 3) {
      setRetryCount(prev => prev + 1);
    }
  };

  if (isAuthLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-grayColor1">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  if (treatmentState === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-grayColor1">Loading profile...</div>
      </div>
    );
  }

  if (treatmentState === 'error') {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <ErrorStateWithRetry
          message={profileError || 'Failed to load profile data.'}
          retryCount={retryCount}
          maxRetries={3}
          isRetrying={isRetrying}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  const activeTreatment = treatment ?? {
    title: 'Weight Loss Program',
    planDuration: '12 months plan',
    status: 'Active',
    medication: 'Semaglutide 0.5mg',
    startDate: 'Jan 15, 2025',
    duration: '6 Months',
    renewalDate: 'Jul 15, 2025',
    progressPercentage: 33,
  };

  return (
    <div className="space-y-6 font-[Work_Sans] w-full">
      <div className="bg-white border border-lightGreenColor rounded-[16px] p-6 md:p-8 flex flex-col lg:flex-row items-center md:items-end  gap-4 md:gap-2 relative">
        <div className="w-24 h-24 md:w-40 md:h-40 md:absolute md:top-6 md:left-4 rounded-full bg-primaryColor top-10 flex items-center justify-center text-white text-2xl md:text-3xl font-semibold shrink-0">
          {userInitials}
        </div>

        <div className="text-center w-fit md:w-full md:mx-auto space-y-3 mt-2 ">
          <h1 className="text-2xl md:text-[32px] font-medium text-secondary-text text-center md:text-start md:ml-60 ">
            {userName}
          </h1>
          <div className="lg:flex flex-wrap space-y-2 md:space-y-3 lg:space-y-0  lg:gap-4 text-[14px] text-grayColor1  w-fit mx-auto">
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
          className="md:absolute md:top-20 md:right-8 flex items-end gap-2 px-4 py-2 border border-background rounded-full text-xs font-medium text-blackColor hover:bg- transition-colors shadow-sm"
        >
          <EditIcon /> Edit
        </button>
      </div>

      <div className="bg-white border border-background rounded-[16px] p-6 max-w-md w-full space-y-4 mt-12">
        <p className="text-sm md:text-[16px] font-normal tracking-wider text-primary uppercase">
          ACTIVE TRAETMENT
        </p>
        <div className="flex flex-col  gap-4">
          <div>
            <h3 className="text-xl md:text-[24px] font-medium text-greenColor">
              {activeTreatment.title}
            </h3>
          </div>
          <h4 className="text-sm md:text-[16px] font-normal tracking-wider text-primary ">
            {activeTreatment.planDuration}
          </h4>
        </div>
      </div>

      <div className="bg-white border border-background rounded-[24px] overflow-hidden">
        <div className="px-4 py-4 md:px-8 border-b border-background flex justify-center md:justify-start">
          <div className="bg-transparent lg:bg-lightGreenColor flex flex-wrap md:flex-nowrap mx-auto justify-center gap-2 p-2 md:p-2 rounded-full">
            {TABS.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primaryColor text-whiteColor  shadow-sm cursor-pointer' : 'text-grayColor1 bg-white border-lightGreenColor hover:text-gray-900 hover:bg-background cursor-pointer'}`}
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
              {treatmentState === 'active' && (
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

          {activeTab === 'messages' && (
            <MessagingProvider>
              <MessageTabContainer />
            </MessagingProvider>
          )}

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
