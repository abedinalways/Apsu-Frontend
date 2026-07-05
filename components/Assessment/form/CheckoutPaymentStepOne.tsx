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

export default function CheckoutPaymentStepOne() {
  const { control } = useFormContext();

  return (
    <div className="space-y-4">
      <div className="bg-[#E2FBF0] p-4 rounded-xl flex justify-between items-center border border-emerald-100">
        <div>
          <h4 className="font-bold text-gray-900 text-sm">
            Weight loss - 3 months
          </h4>
          <p className="text-emerald-700 font-extrabold text-lg mt-1">$717</p>
          <p className="text-[10px] text-muted-foreground">$239/month</p>
        </div>
        <div className="w-16 h-12 bg-white/60 rounded border flex items-center justify-center text-[10px] text-muted-foreground">
          Vial/Med
        </div>
      </div>

      <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 space-y-3 text-xs">
        <h3 className="font-bold text-sm text-gray-800 mb-1">Order Summary</h3>
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-900">$450.00</span>
        </div>
        <div className="flex justify-between text-gray-600 items-center">
          <span>
            Shipping fee{" "}
            <span className="text-[10px] text-muted-foreground">
              (Standard 1-3 Days)
            </span>
          </span>
          <span className="font-semibold text-gray-900">$0.00</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Consultation fee</span>
          <span className="font-semibold text-gray-900">$0.00</span>
        </div>
        <hr className="border-dashed" />
        <div className="flex justify-between font-bold text-sm text-gray-900 pt-1">
          <span>Total</span>
          <span>$450.00</span>
        </div>
      </div>

      <div className="bg-white border rounded-2xl p-4 space-y-4 shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-gray-800">Self Checkout</span>
          <div className="flex gap-1 text-[10px] font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
            VISA / MC / AMEX
          </div>
        </div>

        <FormField
          control={control}
          name="cardName"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-[11px] font-medium text-gray-700">
                Name on Card *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your card name"
                  {...field}
                  className="bg-gray-50/40 h-9 text-xs"
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
                Card Number *
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your card number"
                  {...field}
                  className="bg-gray-50/40 h-9 text-xs"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={control}
            name="cardExpiry"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[11px] font-medium text-gray-700">
                  Expiry Date *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="MM / YY"
                    {...field}
                    className="bg-gray-50/40 h-9 text-xs text-center"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="cardCvv"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[11px] font-medium text-gray-700">
                  CVV *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="123"
                    {...field}
                    className="bg-gray-50/40 h-9 text-xs text-center"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground leading-relaxed">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our{" "}
        <span className="text-emerald-700 underline cursor-pointer">
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
                <span className="text-red-400 underline cursor-pointer">
                  terms and conditions*
                </span>
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}
