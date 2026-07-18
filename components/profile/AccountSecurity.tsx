'use client';

import { Lock } from 'lucide-react';
import { Control } from 'react-hook-form';

import InputField from '../reusable/InputFiled/InputField';
import { ProfileFormValues } from './type';
import ShildIcon from '../icons/ShildIcon';


interface AccountSecurityProps {
  control: Control<ProfileFormValues>;
}

export default function AccountSecurity({ control }: AccountSecurityProps) {
  return (
    <div className="space-y-4 rounded-[16px] border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 border-b border-gray-50 pb-2 text-sm font-medium text-[#142C1E]">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ecf9f1]">
          <ShildIcon/>
        </span>

        <span className="text-base">Account Security</span>
      </div>

      <InputField
        control={control}
        type="password"
        name="currentPassword"
        label="Current Password"
        placeholder="Enter current password"
      />

      <InputField
        control={control}
        type="password"
        name="newPassword"
        label="New Password"
        placeholder="Enter new password"
      />

      <InputField
        control={control}
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm new password"
      />
    </div>
  );
}
