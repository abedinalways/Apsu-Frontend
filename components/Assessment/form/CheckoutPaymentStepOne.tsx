"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import VisaCardIcons from "@/components/icons/VisaCardIcons";
import MsCardIcons from "@/components/icons/MsCardIcons";
import MXCardIcons from "@/components/icons/MXCardIcons";

export default function CheckoutPaymentStepOne() {
  const { control } = useFormContext();
  const cardIcons = [VisaCardIcons, MsCardIcons, MXCardIcons];
  return (
    <div className="space-y-4">
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

      <div className="bg-[#FAF9F4] rounded-2xl p-4 space-y-3 text-xs">
        <h3 className="font-bold text-sm text-gray-800 mb-1">Order Summary</h3>
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-900">$450.00</span>
        </div>
        <hr className="border" />
        <div className="flex justify-between text-gray-600 items-center">
          <span>
            Shipping fee{" "}
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
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-gray-800">Self Checkout</span>
          <div className="flex items-center gap-2">
            {cardIcons.map((Icon, index) => (
              <div
                key={index}
                className="flex h-10 w-14 items-center justify-center rounded-md border border-border bg-white"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border rounded-2xl p-4 space-y-4 shadow-sm">
          <FormField
            control={control}
            name="cardName"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[11px] font-medium text-gray-700">
                  Name on Card <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your card name"
                    {...field}
                    className="bg-[#FAF9F4] h-11"
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
                  Card Number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your card number"
                    {...field}
                    className="bg-[#FAF9F4] h-11"
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
                    <FormLabel className="text-[14px] text-[#111]">
                      Expiry Date <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="MM / YY"
                        {...field}
                        className="bg-[#FAF9F4] h-11 text-center"
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
                    <FormLabel className="text-[14px] text-[#111]">
                      CVV <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123"
                        {...field}
                        className="bg-[#FAF9F4] h-11 text-center"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <span className="text-[#0B251A] underline cursor-pointer">
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
                  I have read and agree to the website{" "}
                  <span className="text-[#0B251A] underline cursor-pointer">
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
