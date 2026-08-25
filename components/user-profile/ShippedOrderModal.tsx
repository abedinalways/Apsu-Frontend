'use client';

import InjectionIcon from '../icons/injectionIcon';
import OrderStepper from './OrderStepper';

interface ShippedOrderModalProps {
  order: {
    orderId: string;
    treatmentName: string;
    treatmentSub: string;
    orderDate: string;
    paymentStatus: string;
    totalPrice: string;
    status: string;
    progressStep: number;
    trackingNumber?: string;
    carrier?: string;
    estimatedDelivery?: string;
    shippingAddress?: string;
  };
}

const progressSteps = [
  'Review',
  'Prescribed',
  'Preparing',
  'Shipped',
  'Delivered',
];

export default function ShippedOrderModal({ order }: ShippedOrderModalProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-[Work_Sans]">
        <div className="grid grid-cols-1 gap-4">
          <div className="order-1 rounded-[12px] p-4 flex flex-col justify-between space-y-4 shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 p-2 rounded-full bg-greenColor flex items-center justify-center text-lightGreenColor shrink-0">
                <InjectionIcon />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-semibold text-base md:text-[18px] text-blackColor">
                    {order.treatmentName}
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[12px] font-medium text-orangeColor border border-background bg-backround">
                    {order.status}
                  </span>
                </div>
                <p className="text-xs md:text-[14px] text-greenColor font-medium mt-0.5">
                  {order.treatmentSub}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left pt-2 border-t border-gray-50">
              <div>
                <p className="text-[12px] text-grayColor1 font-light whitespace-nowrap">
                  Order ID
                </p>
                <p className="text-sm font-medium text-blackColor whitespace-nowrap">
                  {order.orderId}
                </p>
              </div>
              <div className="md:ml-8">
                <p className="text-[12px] text-grayColor1 font-light whitespace-nowrap">
                  Order Date
                </p>
                <p className="text-sm font-medium text-blackColor whitespace-nowrap">
                  {order.orderDate}
                </p>
              </div>
              <div className="md:ml-8">
                <p className="text-[12px] text-grayColor1 font-light whitespace-nowrap">
                  Payment
                </p>
                <p className="text-sm font-medium text-greenColor whitespace-nowrap">
                  {order.paymentStatus}
                </p>
              </div>
              <div className="md:ml-8">
                <p className="text-[12px] text-grayColor1 font-light whitespace-nowrap">
                  Total
                </p>
                <p className="text-sm font-bold text-blackColor whitespace-nowrap">
                  {order.totalPrice}
                </p>
              </div>
            </div>
          </div>
          <div className="order-2 rounded-[12px] space-y-4 bg-white shadow p-2">
            <h5 className="text-lg font-medium text-secondary-text mb-6 md:mb-8">
              Order Progress
            </h5>
            <OrderStepper
              steps={progressSteps}
              currentStep={order.progressStep}
            />
          </div>
        </div>
        <div className="rounded-[20px] p-4 flex flex-col justify-center bg-white shadow">
          <h5 className="text-lg font-semibold text-blackColor w-full text-left mb-6">
            Shipping Details
          </h5>
          <div className="space-y-5">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-sm text-grayColor1 font-light">
                Tracking Number
              </span>
              <span className="text-sm font-medium text-blackColor">
                {order.trackingNumber || '9400 1111 2222'}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-background pb-3">
              <span className="text-sm text-grayColor1 font-light">
                Carrier
              </span>
              <span className="text-sm font-medium text-blackColor">
                {order.carrier || 'USPS Priority Mail'}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-background pb-3">
              <span className="text-sm text-grayColor1 font-light">
                Estimated Delivery
              </span>
              <span className="text-sm font-medium text-blackColor">
                {order.estimatedDelivery || 'Jul 30, 2026'}
              </span>
            </div>
            <div className="pt-2">
              <p className="text-sm text-grayColor1 font-light mb-2">
                Shipping Address
              </p>
              <p className="text-sm font-medium text-blackColor leading-relaxed">
                {order.shippingAddress ||
                  '123 Main Street, Apt 4B Miami, FL 33101'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#eff9ff] border border-blueColor rounded-[12px] p-4 text-left shadow">
        <h4 className="text-sm md:text-[16px] font-medium text-greenColor mb-1">
          Your Order Is On Its Way
        </h4>
        <p className="text-xs md:text-[14px] text-grayColor1 font-normal leading-[160%]">
          Your medication has been shipped and is on its way. You can track your
          package using the tracking number above.
        </p>
      </div>
    </>
  );
}
