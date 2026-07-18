'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/components/ui/form';

import {
  ContactFormValues,
  contactSchema,
} from '@/lib/validations/contactSchema';

import ContactFormFields from './ContactFormFields';
import ContactFooterInfo from './ContactFooterInfo';
import PrimaryButton from '../reusable/button/PrimaryButton';

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: ContactFormValues) {
    console.log(values);
  }

  return (
    <div className="rounded-2xl  bg-white  shadow h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" p-8"
        >
          <ContactFormFields control={form.control} />

          <div className="w-full mx-auto flex justify-center mt-8 md:mt-12 ">
            <PrimaryButton text="Submit Request" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-12 md:mt-10">
            <div className="w-full sm:w-auto order-2 sm:order-1">
              <ContactFooterInfo />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
