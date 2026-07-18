"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";

import {
  ContactFormValues,
  contactSchema,
} from "@/lib/validations/contactSchema";

import ContactFooterInfo from "./ContactFooterInfo";
import ContactFormFields from "./ContactFormFields";

import PrimaryButton from "../reusable/button/PrimaryButton";

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    console.log(values);
  }

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-white md:py-16 py-6 px-6 shadow-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6"
        >
          <ContactFormFields control={form.control} />

          <div className="w-full mx-auto flex justify-center py-4">
            <PrimaryButton text="Submit Request" type="submit" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-2">
            <div className="w-full sm:w-auto order-2 sm:order-1">
              <ContactFooterInfo />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
