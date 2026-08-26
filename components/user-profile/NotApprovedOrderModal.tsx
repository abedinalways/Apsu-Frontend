

'use client';

import SyringeIcon from '../icons/SyringeIcon';

interface NotApprovedOrderModalProps {
  order: {
    orderId: string;
    orderDate: string;
    totalPrice: string;
    paymentStatus?: string;
  };
}

export default function NotApprovedOrderModal({
  order,
}: NotApprovedOrderModalProps) {
  const isRefundCompleted = order.paymentStatus === 'Refunded';

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-[Work_Sans]">
        <div className="grid grid-cols-1 gap-4">
          <div className="order-1 rounded-[12px] p-4 flex flex-col justify-between space-y-4 shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 p-2 rounded-full bg-greenColor flex items-center justify-center text-lightGreenColor shrink-0">
                <SyringeIcon />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-semibold text-base md:text-[18px] text-gray-900">
                    Semaglutide Injection
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[12px] font-medium text-redColor border border-borderColor bg-background">
                    Not Approved
                  </span>
                </div>
                <p className="text-xs md:text-[14px] text-greenColor font-medium mt-0.5">
                  Weight Loss Treatment
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left pt-2 border-t border-borderColor">
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
                {isRefundCompleted ? (
                  <p className="text-sm font-medium text-yellowColor whitespace-nowrap leading-[124%]">
                    Refunded
                  </p>
                ) : (
                  <p className="text-sm font-medium text-yellowColor whitespace-nowrap leading-[124%]">
                    Refund <br /> Initiated
                  </p>
                )}
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
        </div>

        <div className="rounded-[12px] p-4 flex flex-col justify-start bg-white shadow border border-borderColor space-y-4">
          <h5 className="text-base md:text-lg font-medium text-blackColor w-full text-left">
            {isRefundCompleted ? 'Refund Completed' : 'Refund Initiated'}
          </h5>
          <div className="w-full space-y-3 pt-2">
            <div className="flex justify-between items-center border-b border-borderColor pb-2">
              <span className="text-sm text-grayColor1 font-light">
                {isRefundCompleted ? 'Refunded Amount' : 'Total Refundable'}
              </span>
              <span className="text-sm font-semibold text-blackColor">
                {order.totalPrice}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-grayColor1 font-light">
                {isRefundCompleted ? 'Refund Date' : 'Estimated Time'}
              </span>
              <span className="text-sm font-medium text-blackColor">
                {isRefundCompleted ? 'Jun 27, 2026' : '3-5 business days'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {isRefundCompleted ? (
        <div className="bg-background border border-borderColor rounded-[12px] p-4 text-left shadow">
          <p className="text-xs md:text-[14px] text-blackColor font-normal leading-[160%]">
            Your refund has been successfully processed and returned to your
            original payment method.
          </p>
        </div>
      ) : (
        <div className="bg-background border border-redColor/20 rounded-[12px] p-4 text-left shadow">
          <h4 className="text-sm md:text-[16px] font-medium text-greenColor mb-1">
            Treatment not approved
          </h4>
          <p className="text-xs md:text-[14px] text-greenColor font-normal leading-[160%]">
            Unfortunately, your treatment was not approved by the physician
            based on your health assessment. Your refund has been initiated and
            will be returned to your original payment method within 3–5 business
            days.
          </p>
        </div>
      )}
    </>
  );
}
