'use client';

import { MapPin } from 'lucide-react';
import { Control } from 'react-hook-form';

import InputField from '../reusable/InputFiled/InputField';
import { ProfileFormValues } from './type';
import ProfileIcon from '../icons/ProfileIcon';

interface ShippingAddressProps {
  control: Control<ProfileFormValues>;
}

export default function ShippingAddress({ control }: ShippingAddressProps) {
  return (
    <div className="space-y-4 rounded-[16px] border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 border-b border-gray-50 pb-2 text-sm font-medium text-secondary-text">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lightGreenColor">
          <ProfileIcon />
        </span>

        <span className="text-base">Shipping Address</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputField
          control={control}
          name="state"
          label="State"
          placeholder="Enter state"
        />

        <InputField
          control={control}
          name="city"
          label="City"
          placeholder="Enter city"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputField
          control={control}
          name="country"
          label="Country"
          placeholder="Enter country"
        />

        <InputField
          control={control}
          name="postalCode"
          label="Postal Code"
          placeholder="Enter postal code"
        />
      </div>
    </div>
  );
}
