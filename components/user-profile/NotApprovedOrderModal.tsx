// 'use client';

// import SyringeIcon from "../icons/SyringeIcon";

// interface NotApprovedOrderModalProps {
//   order: {
//     orderId: string;
//     orderDate: string;
//     totalPrice: string;
//   };
// }

// export default function NotApprovedOrderModal({
//   order,
// }: NotApprovedOrderModalProps) {
//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-[Work_Sans]">
//         <div className="grid grid-cols-1 gap-4">
//           <div className="order-1 rounded-[12px] p-4 flex flex-col justify-between space-y-4 shadow">
//             <div className="flex items-start gap-3">
//               <div className="w-10 h-10 p-2 rounded-full bg-brand flex items-center justify-center text-brand-light shrink-0">
//                 <SyringeIcon />
//               </div>
//               <div>
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <h4 className="font-semibold text-base md:text-[18px] text-gray-900">
//                     Semaglutide Injection
//                   </h4>
//                   <span className="px-2 py-0.5 rounded-full text-[12px] font-medium text-error border border-bg-red-100 bg-bg-red-50">
//                     Not Approved
//                   </span>
//                 </div>
//                 <p className="text-xs md:text-[14px] text-success-dark font-medium mt-0.5">
//                   Weight Loss Treatment
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left pt-2 border-t border-gray-50">
//               <div>
//                 <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
//                   Order ID
//                 </p>
//                 <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
//                   {order.orderId}
//                 </p>
//               </div>
//               <div className="md:ml-8">
//                 <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
//                   Order Date
//                 </p>
//                 <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
//                   {order.orderDate}
//                 </p>
//               </div>
//               <div className="md:ml-8">
//                 <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
//                   Payment
//                 </p>
//                 <p className="text-sm font-medium text-warning whitespace-nowrap leading-[124%]">
//                   Refund <br /> Initiated
//                 </p>
//               </div>
//               <div className="md:ml-8">
//                 <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
//                   Total
//                 </p>
//                 <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
//                   {order.totalPrice}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="rounded-[12px] p-4 flex flex-col justify-start bg-white shadow border border-gray-100/80 space-y-4">
//           <h5 className="text-base md:text-lg font-medium text-gray-900 w-full text-left">
//             Refund Initiated
//           </h5>
//           <div className="w-full space-y-3 pt-2">
//             <div className="flex justify-between items-center border-b border-gray-100 pb-2">
//               <span className="text-sm text-text-secondary font-light">
//                 Total Refundable
//               </span>
//               <span className="text-sm font-semibold text-gray-900">
//                 {order.totalPrice}
//               </span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-text-secondary font-light">
//                 Estimated Time
//               </span>
//               <span className="text-sm font-medium text-gray-700">
//                 3-5 business days
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-bg-red-50 border border-red-300 rounded-[12px] p-4 text-left shadow">
//         <h4 className="text-sm md:text-[16px] font-medium text-brand mb-1">
//           Treatment not approved
//         </h4>
//         <p className="text-xs md:text-[14px] text-brand font-normal leading-[160%]">
//           Unfortunately, your treatment was not approved by the physician based
//           on your health assessment. Your refund has been initiated and will be
//           returned to your original payment method within 3–5 business days.
//         </p>
//       </div>
//     </>
//   );
// }

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
              <div className="w-10 h-10 p-2 rounded-full bg-brand flex items-center justify-center text-brand-light shrink-0">
                <SyringeIcon />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-semibold text-base md:text-[18px] text-gray-900">
                    Semaglutide Injection
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[12px] font-medium text-error border border-bg-red-100 bg-bg-red-50">
                    Not Approved
                  </span>
                </div>
                <p className="text-xs md:text-[14px] text-success-dark font-medium mt-0.5">
                  Weight Loss Treatment
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left pt-2 border-t border-gray-50">
              <div>
                <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                  Order ID
                </p>
                <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  {order.orderId}
                </p>
              </div>
              <div className="md:ml-8">
                <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                  Order Date
                </p>
                <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  {order.orderDate}
                </p>
              </div>
              <div className="md:ml-8">
                <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                  Payment
                </p>
                {isRefundCompleted ? (
                  <p className="text-sm font-medium text-warning whitespace-nowrap leading-[124%]">
                    Refunded
                  </p>
                ) : (
                  <p className="text-sm font-medium text-warning whitespace-nowrap leading-[124%]">
                    Refund <br /> Initiated
                  </p>
                )}
              </div>
              <div className="md:ml-8">
                <p className="text-[12px] text-gray-400 font-light whitespace-nowrap">
                  Total
                </p>
                <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
                  {order.totalPrice}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[12px] p-4 flex flex-col justify-start bg-white shadow border border-gray-100/80 space-y-4">
          <h5 className="text-base md:text-lg font-medium text-gray-900 w-full text-left">
            {isRefundCompleted ? 'Refund Completed' : 'Refund Initiated'}
          </h5>
          <div className="w-full space-y-3 pt-2">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-sm text-text-secondary font-light">
                {isRefundCompleted ? 'Refunded Amount' : 'Total Refundable'}
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {order.totalPrice}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary font-light">
                {isRefundCompleted ? 'Refund Date' : 'Estimated Time'}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {isRefundCompleted ? 'Jun 27, 2026' : '3-5 business days'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {isRefundCompleted ? (
        <div className="bg-bg-warning border border-bg-warning rounded-[12px] p-4 text-left shadow">
          <p className="text-xs md:text-[14px] text-gray-800 font-normal leading-[160%]">
            Your refund has been successfully processed and returned to your
            original payment method.
          </p>
        </div>
      ) : (
        <div className="bg-bg-red-50 border border-red-300 rounded-[12px] p-4 text-left shadow">
          <h4 className="text-sm md:text-[16px] font-medium text-brand mb-1">
            Treatment not approved
          </h4>
          <p className="text-xs md:text-[14px] text-brand font-normal leading-[160%]">
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