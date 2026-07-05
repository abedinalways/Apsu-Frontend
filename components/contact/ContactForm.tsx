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

import ButtonWithArrow from '@/components/reusable/button/Button';
import Button from '@/components/reusable/button/Button';

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
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ContactFormFields control={form.control} />

          <div className="flex items-center justify-center">
            <Button text="Submit Request" href="/submit" />
          </div>
          <div className="flex items-center justify-end pt-4">
            <ContactFooterInfo />
          </div>
        </form>
      </Form>
    </div>
  );
}
