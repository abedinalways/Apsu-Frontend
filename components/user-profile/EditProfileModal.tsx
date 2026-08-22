'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';


import { useState } from 'react';
import { ProfileFormValues } from '../profile/type';
import { profileSchema } from '@/lib/validations/profile.schema';
import { profileDefaultValues } from '../profile/defaultValues';
import PersonalInformation from '../profile/PersonalInformation';
import ShippingAddress from '../profile/ShippingAddress';
import HealthcarePreferences from '../profile/HealthcarePreferences';
import AccountSecurity from '../profile/AccountSecurity';
import ModalFooter from '../profile/ModalFooter';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
}: EditProfileModalProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: profileDefaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (values: ProfileFormValues) => {
    try {
      setIsLoading(true);

      console.log(values);

      // await profileService.updateProfile(values);

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/10 p-4 font-[Work_Sans] animate-fade-in">
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[12px] bg-white shadow">
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 bg-white p-4">
          <div>
            <h2 className="text-xl font-medium text-[#102b1c]">
              Profile Settings
            </h2>

            <p className="mt-0.5 text-sm font-light text-[#3b3b3c] md:text-[16px]">
              Manage your profile and preferences.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full border border-gray-100 p-1.5 text-green-200 transition-colors hover:bg-gray-50 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <Form {...form}>
          <form
            id="edit-profile-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-4 overflow-y-auto p-4"
          >
            <PersonalInformation control={form.control} />

            <ShippingAddress control={form.control} />

            <HealthcarePreferences form={form} />

            <AccountSecurity control={form.control} />
          </form>
        </Form>

        <ModalFooter onClose={onClose} isLoading={isLoading} />
      </div>
    </div>
  );
}
