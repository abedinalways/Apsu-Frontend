'use client';

import { X, Pill } from 'lucide-react';
import SyringeIcon from '../icons/SyringeIcon';
import OrderStepper from './OrderStepper';

interface PrescriptionTrackOrderModalProps {
  open: boolean;
  onClose: () => void;
  data: {
    id: string;
    treatmentName: string;
    treatmentSub: string;
    status: string;
    type: 'pill' | 'injection';
    issueDate?: string;
    trackingNumber?: string;
    carrier?: string;
    estimatedDelivery?: string;
    shippingAddress?: string;
  };
}

const progressSteps = ['Prescribed', 'Preparing', 'Shipped', 'Delivered'];

export default function PrescriptionTrackOrderModal({
  open,
  onClose,
  data,
}: PrescriptionTrackOrderModalProps) {
  if (!open || !data) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-[12px] max-w-4xl w-full p-6 relative shadow-xl font-[Work_Sans] text-left border border-border max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-secondary-text">Track Order</h3>
          <p className="text-sm md:text-[16px] text-gray-400 font-light mt-0.5">
            Track your prescription delivery status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-[Work_Sans]">
          <div className="grid grid-cols-1 gap-4">
            <div className="order-1 rounded-[12px] p-4 flex flex-col justify-between space-y-4 shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 p-2 rounded-full bg-brand flex items-center justify-center text-brand-light shrink-0">
                  {data.type === 'injection' ? (
                    <SyringeIcon />
                  ) : (
                    <Pill className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-semibold text-base md:text-[18px] text-gray-900">
                      {data.treatmentName}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-[12px] font-medium text-warning border border-bg-warning bg-bg-warning">
                      {data.status}
                    </span>
                  </div>
                  <p className="text-xs md:text-[14px] text-success-dark font-medium mt-0.5">
                    {data.treatmentSub}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left pt-2 border-t border-gray-50">
                <div>
                  <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                    Prescription ID
                  </p>
                  <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                    {data.id}
                  </p>
                </div>
                <div className="md:ml-8">
                  <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                    Issue Date
                  </p>
                  <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                    {data.issueDate || 'Jul 27, 2026'}
                  </p>
                </div>
                <div className="md:ml-8">
                  <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                    Status
                  </p>
                  <p className="text-sm font-medium text-success-dark whitespace-nowrap">
                    {data.status}
                  </p>
                </div>
                <div className="md:ml-8">
                  <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                    Type
                  </p>
                  <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
                    {data.type === 'injection' ? 'Injection' : 'Pill'}
                  </p>
                </div>
              </div>
            </div>
            <div className="order-2 rounded-[12px] space-y-4 bg-white shadow p-2">
              <h5 className="text-lg font-medium text-secondary-text mb-6 md:mb-8">
                Order Progress
              </h5>
              <OrderStepper steps={progressSteps} currentStep={3} />
            </div>
          </div>
          <div className="rounded-[20px] p-4 flex flex-col justify-center bg-white shadow">
            <h5 className="text-sm font-semibold text-gray-800 w-full text-left mb-6">
              Shipping Details
            </h5>
            <div className="space-y-5">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-sm text-text-secondary font-light">
                  Tracking Number
                </span>
                <span className="text-sm font-medium text-gray-900">
                  {data.trackingNumber || '9400 1111 2222'}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-sm text-text-secondary font-light">
                  Carrier
                </span>
                <span className="text-sm font-medium text-gray-900">
                  {data.carrier || 'USPS Priority Mail'}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-sm text-text-secondary font-light">
                  Estimated Delivery
                </span>
                <span className="text-sm font-medium text-gray-900">
                  {data.estimatedDelivery || 'Jul 30, 2026'}
                </span>
              </div>
              <div className="pt-2">
                <p className="text-sm text-text-secondary font-light mb-2">
                  Shipping Address
                </p>
                <p className="text-sm font-medium text-gray-900 leading-relaxed">
                  {data.shippingAddress ||
                    '123 Main Street, Apt 4B Miami, FL 33101'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-bg-yellow-50 border border-bg-warning rounded-[16px] p-4 text-left shadow">
          <h4 className="text-sm md:text-[16px] font-medium text-brand mb-1">
            Prescription Shipped
          </h4>
          <p className="text-xs md:text-[14px] text-text-secondary font-normal leading-[160%]">
            Your prescription has been shipped and is on its way. You'll receive
            a notification once it's delivered.
          </p>
        </div>
      </div>
    </div>
  );
}
