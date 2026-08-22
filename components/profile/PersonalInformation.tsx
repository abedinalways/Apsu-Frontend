'use client';

import { Control } from 'react-hook-form';

import ProfileIcon from '../icons/ProfileIcon';
import InputField from '../reusable/InputFiled/InputField';
import { ProfileFormValues } from './type';

interface PersonalInformationProps {
  control: Control<ProfileFormValues>;
}

export default function PersonalInformation({
  control,
}: PersonalInformationProps) {
  return (
    <div className="space-y-4 rounded-[12px] border border-gray-100 bg-white p-5 shadow">
      <div className="flex items-center gap-2 border-b border-gray-50 pb-2 text-sm font-medium text-secondary-text">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ecf9f1]">
          <ProfileIcon />
        </span>

        <span className="text-base">Personal Information</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputField
          control={control}
          name="firstName"
          label="First Name"
          placeholder="Enter first name"
        />

        <InputField
          control={control}
          name="lastName"
          label="Last Name"
          placeholder="Enter last name"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputField
          control={control}
          name="dob"
          label="Date of Birth"
          placeholder="DD/MM/YYYY"
        />

        <InputField
          control={control}
          name="phone"
          label="Phone"
          placeholder="Enter phone number"
        />
      </div>

      <InputField
        control={control}
        name="email"
        label="Email"
        placeholder="Enter email address"
      />
    </div>
  );
}
