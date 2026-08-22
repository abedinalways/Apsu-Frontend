// "use client";

// import { useFormContext } from "react-hook-form";
// import {
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import Image from "next/image";
// import VisaCardIcons from "@/components/icons/VisaCardIcons";
// import MsCardIcons from "@/components/icons/MsCardIcons";
// import MXCardIcons from "@/components/icons/MXCardIcons";

// export default function CheckoutPaymentStepOne() {
//   const { control } = useFormContext();
//   const cardIcons = [VisaCardIcons, MsCardIcons, MXCardIcons];
//   return (
//     <div className="space-y-4">
//       <div className="bg-[#C9FFEB] rounded-xl flex justify-between">
//         <div className="space-y-3 p-4">
//           <h4 className="font-bold text-gray-900 text-sm">
//             Weight loss - 3 months
//           </h4>
//           <p className="text-emerald-700 font-extrabold text-lg mt-1">$717</p>
//           <p className="text-[10px] text-muted-foreground">$239/month</p>
//         </div>
//         <div className="w-32 h-32 flex items-center justify-center">
//           <Image
//             src="/images/PaymentSuccess.png"
//             alt="Payment"
//             width={400}
//             height={400}
//             className="object-cover"
//           />
//         </div>
//       </div>

//       <div className="bg-[background] rounded-2xl p-4 space-y-3 text-xs">
//         <h3 className="font-bold text-sm text-gray-800 mb-1">Order Summary</h3>
//         <div className="flex justify-between text-gray-600">
//           <span>Subtotal</span>
//           <span className="font-semibold text-gray-900">$450.00</span>
//         </div>
//         <hr className="border" />
//         <div className="flex justify-between text-gray-600 items-center">
//           <span>
//             Shipping fee{" "}
//             <span className="text-[10px] text-muted-foreground">
//               (Standard 1-3 Days)
//             </span>
//           </span>
//           <span className="font-semibold text-gray-900">$0.00</span>
//         </div>
//         <hr className="border" />
//         <div className="flex justify-between text-gray-600">
//           <span>Consultation fee</span>
//           <span className="font-semibold text-gray-900">$0.00</span>
//         </div>
//         <hr className="border" />
//         <div className="flex justify-between font-bold text-sm text-gray-900 pt-1">
//           <span>Total</span>
//           <span>$450.00</span>
//         </div>
//         <hr className="border" />
//         <div className="flex justify-between items-center">
//           <span className="text-xs font-bold text-gray-800">Self Checkout</span>
//           <div className="flex items-center gap-2">
//             {cardIcons.map((Icon, index) => (
//               <div
//                 key={index}
//                 className="flex h-10 w-14 items-center justify-center rounded-md border border-border bg-white"
//               >
//                 <Icon />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="bg-white border rounded-2xl p-4 space-y-4 shadow-sm">
//           <FormField
//             control={control}
//             name="cardName"
//             render={({ field }) => (
//               <FormItem className="space-y-1">
//                 <FormLabel className="text-[11px] font-medium text-gray-700">
//                   Name on Card <span className="text-red-500">*</span>
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Enter your card name"
//                     {...field}
//                     className="bg-[background] h-11"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={control}
//             name="cardNumber"
//             render={({ field }) => (
//               <FormItem className="space-y-1">
//                 <FormLabel className="text-[11px] font-medium text-gray-700">
//                   Card Number <span className="text-red-500">*</span>
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Enter your card number"
//                     {...field}
//                     className="bg-[background] h-11"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start auto-rows-auto">
//             <div className="min-w-0">
//               <FormField
//                 control={control}
//                 name="cardExpiry"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-col gap-1">
//                     <FormLabel className="text-[14px] text-[#111]">
//                       Expiry Date <span className="text-red-500">*</span>
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="MM / YY"
//                         {...field}
//                         className="bg-[background] h-11 text-center"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="min-w-0">
//               <FormField
//                 control={control}
//                 name="cardCvv"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-col gap-1">
//                     <FormLabel className="text-[14px] text-[#111]">
//                       CVV <span className="text-red-500">*</span>
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="123"
//                         {...field}
//                         className="bg-[background] h-11 text-center"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </div>
//         </div>
//         <p className="text-[10px] text-muted-foreground leading-relaxed">
//           Your personal data will be used to process your order, support your
//           experience throughout this website, and for other purposes described
//           in our{" "}
//           <span className="text-[secondary-bg] underline cursor-pointer">
//             privacy policy
//           </span>
//           .
//         </p>

//         <FormField
//           control={control}
//           name="agreeTerms"
//           render={({ field }) => (
//             <FormItem className="flex flex-row items-start space-x-2 space-y-0 pt-1">
//               <FormControl>
//                 <Checkbox
//                   checked={field.value}
//                   onCheckedChange={field.onChange}
//                   className="mt-0.5"
//                 />
//               </FormControl>
//               <div className="space-y-1 leading-none">
//                 <FormLabel className="text-[11px] text-muted-foreground">
//                   I have read and agree to the website{" "}
//                   <span className="text-[secondary-bg] underline cursor-pointer">
//                     terms and conditions<span className="text-red-500">*</span>
//                   </span>
//                 </FormLabel>
//                 <FormMessage />
//               </div>
//             </FormItem>
//           )}
//         />
//       </div>
//     </div>
//   );
// }

'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from 'next/image';
import VisaCardIcons from '@/components/icons/VisaCardIcons';
import MsCardIcons from '@/components/icons/MsCardIcons';
import MXCardIcons from '@/components/icons/MXCardIcons';
// import { BuildingLibraryIcon } from "@heroicons/react/24/outline";

export default function CheckoutPaymentStepOne() {
  const { control, watch } = useFormContext();
  const selectedPaymentMethod = watch('paymentMethod', 'card');
  const cardIcons = [VisaCardIcons, MsCardIcons, MXCardIcons];

  return (
    <div className="space-y-4">
      {/* Product Banner */}
      <div className="bg-[#C9FFEB] rounded-xl flex justify-between">
        <div className="space-y-3 p-4">
          <h4 className="font-bold text-gray-900 text-sm">
            Weight loss - 3 months
          </h4>
          <p className="text-emerald-700 font-extrabold text-lg mt-1">$717</p>
          <p className="text-[10px] text-muted-foreground">$239/month</p>
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
          <Image
            src="/images/PaymentSuccess.png"
            alt="Payment"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>

      {/* Order Summary & Payment Options */}
      <div className="bg-[background] rounded-2xl p-4 space-y-3 text-xs">
        <h3 className="font-bold text-sm text-gray-800 mb-1">Order Summary</h3>
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-900">$450.00</span>
        </div>
        <hr className="border" />
        <div className="flex justify-between text-gray-600 items-center">
          <span>
            Shipping fee{' '}
            <span className="text-[10px] text-muted-foreground">
              (Standard 1-3 Days)
            </span>
          </span>
          <span className="font-semibold text-gray-900">$0.00</span>
        </div>
        <hr className="border" />
        <div className="flex justify-between text-gray-600">
          <span>Consultation fee</span>
          <span className="font-semibold text-gray-900">$0.00</span>
        </div>
        <hr className="border" />
        <div className="flex justify-between font-bold text-sm text-gray-900 pt-1">
          <span>Total</span>
          <span>$450.00</span>
        </div>
        <hr className="border" />

        {/* Payment Selection Section */}
        <div className="space-y-3 pt-2">
          <div>
            <h4 className="text-sm font-bold text-gray-800">
              Select Payment Option
            </h4>
            <p className="text-[10px] text-muted-foreground">
              All transactions are secure and encrypted
            </p>
          </div>

          <FormField
            control={control}
            name="paymentMethod"
            defaultValue="card"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value || 'card'}
                    className="space-y-3"
                  >
                    {/* Option 1: Credit / Debit / Prepaid Card */}
                    <div
                      className={`border rounded-2xl p-4 space-y-4 bg-white shadow-sm transition-all ${
                        selectedPaymentMethod === 'card'
                          ? 'border-[#AFC1B6] border-2 text-[secondary-bg]'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between cursor-pointer">
                        <label className="flex items-center gap-3 cursor-pointer w-full">
                          <RadioGroupItem value="card" id="card" />
                          <span className="font-bold text-xs text-gray-800">
                            Credit/Debit/Prepaid Card
                          </span>
                        </label>
                        <div className="flex items-center gap-1.5">
                          {cardIcons.map((Icon, index) => (
                            <div
                              key={index}
                              className="flex h-7 w-10 items-center justify-center rounded border border-border bg-white"
                            >
                              <Icon />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expandable Form Fields for Card details */}
                      {selectedPaymentMethod === 'card' && (
                        <div className="space-y-4 pt-2 border-t border-gray-100">
                          <FormField
                            control={control}
                            name="cardName"
                            render={({ field }) => (
                              <FormItem className="space-y-1">
                                <FormLabel className="text-[11px] font-medium text-gray-700">
                                  Name on Card{' '}
                                  <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter your card name"
                                    {...field}
                                    className="bg-[background] h-11"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={control}
                            name="cardNumber"
                            render={({ field }) => (
                              <FormItem className="space-y-1">
                                <FormLabel className="text-[11px] font-medium text-gray-700">
                                  Card Number{' '}
                                  <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter your card number"
                                    {...field}
                                    className="bg-[background] h-11"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start auto-rows-auto">
                            <div className="min-w-0">
                              <FormField
                                control={control}
                                name="cardExpiry"
                                render={({ field }) => (
                                  <FormItem className="flex flex-col gap-1">
                                    <FormLabel className="text-[11px] font-medium text-gray-700">
                                      Expiry Date{' '}
                                      <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="MM / YY"
                                        {...field}
                                        className="bg-[background] h-11 text-center"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="min-w-0">
                              <FormField
                                control={control}
                                name="cardCvv"
                                render={({ field }) => (
                                  <FormItem className="flex flex-col gap-1">
                                    <FormLabel className="text-[11px] font-medium text-gray-700">
                                      CVV{' '}
                                      <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="123"
                                        {...field}
                                        className="bg-[background] h-11 text-center"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Option 2: Paypal */}
                    <div
                      className={`border rounded-2xl p-4 py-5 flex items-center justify-between bg-white shadow-sm transition-all ${
                        selectedPaymentMethod === 'paypal'
                          ? 'border-[#AFC1B6] border-2 text-[secondary-bg]'
                          : 'border-gray-200'
                      }`}
                    >
                      <label className="flex items-center gap-3 cursor-pointer w-full">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <span className="font-bold text-xs text-gray-800">
                          Paypal
                        </span>
                      </label>
                      <span className="text-blue-600 font-extrabold italic text-sm">
                        PayPal
                      </span>
                    </div>

                    {/* Option 3: Venmo */}
                    <div
                      className={`border rounded-2xl p-4 py-5 flex items-center justify-between bg-white shadow-sm transition-all ${
                        selectedPaymentMethod === 'venmo'
                          ? 'border-[#AFC1B6] border-2 text-[secondary-bg]'
                          : 'border-gray-200'
                      }`}
                    >
                      <label className="flex items-center gap-3 cursor-pointer w-full">
                        <RadioGroupItem value="venmo" id="venmo" />
                        <span className="font-bold text-xs text-gray-800">
                          Venmo
                        </span>
                      </label>
                      <span className="text-sky-500 font-extrabold italic text-sm">
                        venmo
                      </span>
                    </div>

                    {/* Option 4: Bank Account */}
                    <div
                      className={`border rounded-2xl p-4 py-5 flex items-center justify-between bg-white shadow-sm transition-all ${
                        selectedPaymentMethod === 'bank'
                          ? 'border-[#AFC1B6] border-2 text-[secondary-bg]'
                          : 'border-gray-200'
                      }`}
                    >
                      <label className="flex items-center gap-3 cursor-pointer w-full">
                        <RadioGroupItem value="bank" id="bank" />
                        <span className="font-bold text-xs text-gray-800">
                          Bank Account
                        </span>
                      </label>
                      {/* <BuildingLibraryIcon className="w-5 h-5 text-gray-600" /> */}
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Legal Text & Checkbox */}
        <p className="text-[10px] text-muted-foreground leading-relaxed pt-2">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{' '}
          <span className="text-[secondary-bg] underline cursor-pointer">
            privacy policy
          </span>
          .
        </p>

        <FormField
          control={control}
          name="agreeTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 pt-1">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-0.5"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-[11px] text-muted-foreground">
                  I have read and agree to the website{' '}
                  <span className="text-[secondary-bg] underline cursor-pointer">
                    terms and conditions<span className="text-red-500">*</span>
                  </span>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
