'use client';

import { useState } from 'react';
import { Eye, X } from 'lucide-react';
import InjectionIcon from '../icons/injectionIcon';
import OrderStepper from './OrderStepper';
import BoxIcon from '../icons/BoxIcon';
import NotApprovedOrderModal from './NotApprovedOrderModal';
import ShippedOrderModal from './ShippedOrderModal';

interface OrderData {
  orderId: string;
  treatmentName: string;
  treatmentSub: string;
  plan: string;
  orderDate: string;
  paymentStatus: string;
  totalPrice: string;
  status:
    | 'Under Review'
    | 'Prescribed'
    | 'Preparing'
    | 'Shipped'
    | 'Delivered'
    | 'Not Approved';
  progressStep: number;
}

const progressSteps = [
  'Review',
  'Prescribed',
  'Preparing',
  'Shipped',
  'Delivered',
];

export default function OrderDetailsTab() {
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);

  const orders: OrderData[] = [
    {
      orderId: 'RX-APSU-100245',
      treatmentName: 'Semaglutide Injection',
      treatmentSub: 'Weight Loss Treatment',
      plan: '6 Month',
      orderDate: 'Jul 27, 2026',
      paymentStatus: 'Paid',
      totalPrice: '$200',
      status: 'Under Review',
      progressStep: 1,
    },
    {
      orderId: 'RX-APSU-100246',
      treatmentName: 'Semaglutide Injection',
      treatmentSub: 'Weight Loss Treatment',
      plan: '6 Month',
      orderDate: 'Jul 27, 2026',
      paymentStatus: 'Refund Initiated',
      totalPrice: '$200',
      status: 'Not Approved',
      progressStep: 1,
    },
    {
      orderId: 'RX-APSU-100247',
      treatmentName: 'Semaglutide Injection',
      treatmentSub: 'Weight Loss Treatment',
      plan: '6 Month',
      orderDate: 'Jul 27, 2026',
      paymentStatus: 'Refunded',
      totalPrice: '$200',
      status: 'Not Approved',
      progressStep: 1,
    },
    {
      orderId: 'RX-APSU-100248',
      treatmentName: 'Semaglutide Injection',
      treatmentSub: 'Weight Loss Treatment',
      plan: '6 Month',
      orderDate: 'Jul 27, 2026',
      paymentStatus: 'Paid',
      totalPrice: '$200',
      status: 'Shipped',
      progressStep: 4,
    },
  ];

  return (
    <div className="w-full text-left space-y-4 font-[Work_Sans]">
      <div>
        <h3 className="text-xl font-bold text-brand">Order Details</h3>
        <p className="text-sm md:text-[16px] text-brand font-light mt-2">
          Track your medication order and delivery progress.
        </p>
      </div>

      <div className="w-full overflow-x-auto rounded-[12px] mt-6 border border-border bg-white ">
        <table className="w-full border-collapse text-left min-w-[750px]">
          <thead>
            <tr className="bg-bg-subtle text-brand font-medium text-sm">
              <th className="p-4 pl-6">Order#</th>
              <th className="p-4">Treatment</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Order Date</th>
              <th className="p-4">Payment</th>
              <th className="p-4">Status</th>
              <th className="p-4 pr-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EBEAE4] text-sm text-gray-800 font-medium">
            {orders.map(order => (
              <tr
                key={order.orderId}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="p-4 pl-6 font-medium text-gray-500">
                  {order.orderId.replace('RX-APSU-', 'APSU-')}
                </td>
                <td className="p-4 font-semibold text-gray-900">
                  {order.treatmentSub.replace(' Treatment', '')}
                </td>
                <td className="p-4 text-gray-600">{order.plan}</td>
                <td className="p-4 text-gray-600">{order.orderDate}</td>
                <td className="p-4 font-medium text-ink">
                  {order.status === 'Not Approved'
                    ? order.paymentStatus
                    : order.paymentStatus}
                </td>
                <td className="p-4">
                  <span
                    className={`md:px-3 py-1 rounded-full   line-clamp-none md:line-clamp-2 w-fit text-center md:text-start  text-xs font-medium ${order.status === 'Shipped' ? 'text-[#006aab] border border-[##b6e6ff] bg-[#eff9ff]' : order.status === 'Not Approved' ? 'text-error border border-bg-red-100 bg-bg-red-50' : 'text-[#bb4e02] border border-[#fde99f] bg-bg-warning'}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4 pr-6 text-center">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-secondary-text transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/20">
          <div className="bg-white rounded-[12px] max-w-4xl w-full p-6 relative shadow-xl font-[Work_Sans] text-left border border-border max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-secondary-text">
                Order Details
              </h3>
              <p className="text-sm md:text-[16px] text-gray-400 font-light mt-0.5">
                View detailed information and status updates for this order.
              </p>
            </div>

            {selectedOrder.status === 'Not Approved' ? (
              <NotApprovedOrderModal order={selectedOrder} />
            ) : selectedOrder.status === 'Shipped' ? (
              <ShippedOrderModal order={selectedOrder} />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="order-1 rounded-[12px] p-4 flex flex-col justify-between space-y-4 shadow">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 p-2 rounded-full bg-brand flex items-center justify-center text-brand-light shrink-0">
                          <InjectionIcon />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-semibold text-base md:text-[18px] text-gray-900">
                              {selectedOrder.treatmentName}
                            </h4>
                            <span className="px-2 py-0.5 rounded-full text-[12px] font-medium text-warning border border-bg-warning bg-bg-warning">
                              {selectedOrder.status}
                            </span>
                          </div>
                          <p className="text-xs md:text-[14px] text-success-dark font-medium mt-0.5">
                            {selectedOrder.treatmentSub}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left pt-2 border-t border-gray-50">
                        <div>
                          <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                            Order ID
                          </p>
                          <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                            {selectedOrder.orderId}
                          </p>
                        </div>
                        <div className="md:ml-8">
                          <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                            Order Date
                          </p>
                          <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                            {selectedOrder.orderDate}
                          </p>
                        </div>
                        <div className="md:ml-8">
                          <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                            Payment
                          </p>
                          <p className="text-sm font-medium text-success-dark whitespace-nowrap">
                            {selectedOrder.paymentStatus}
                          </p>
                        </div>
                        <div className="md:ml-8">
                          <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                            Total
                          </p>
                          <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
                            {selectedOrder.totalPrice}
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
                        currentStep={selectedOrder.progressStep}
                      />
                    </div>
                  </div>
                  <div className="rounded-[20px] p-4 flex flex-col justify-center items-center text-center bg-white shadow">
                    <h5 className="text-sm font-semibold text-gray-800 w-full text-left mb-auto">
                      Shipping Details
                    </h5>
                    <div className="py-4 flex flex-col items-center justify-center">
                      <BoxIcon />
                      <p className="text-sm text-gray-400 font-light mt-2">
                        No shipping details yet.
                      </p>
                    </div>
                    <div className="mb-auto"></div>
                  </div>
                </div>

                <div className="bg-bg-yellow-50 border border-bg-warning rounded-[16px] p-4 text-left shadow">
                  <h4 className="text-sm md:text-[16px] font-medium text-brand mb-1">
                    Under Physician Review
                  </h4>
                  <p className="text-xs md:text-[14px] text-text-secondary font-normal leading-[160%]">
                    Your physician is currently reviewing your health
                    assessment. We&apos;ll notify you by email once a decision
                    has been made. This typically takes 1-2 business days.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
