'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Form } from '@/components/ui/form';
import {
  ContactFormValues,
  contactSchema,
} from '@/lib/validations/contactSchema';

import ContactFormFields from './ContactFormFields';
import ContactFooterInfo from './ContactFooterInfo';
import PrimaryButton from '../reusable/button/PrimaryButton';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      // Simulate API call
      console.log('Form submitted:', values);
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      toast.success('Your message has been sent successfully!');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-white shadow h-full flex flex-col items-center justify-center p-8 text-center min-h-[500px]">
        <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <svg
            className="size-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-black mb-2 font-[Work_Sans]">Thank You!</h3>
        <p className="text-gray-600 mb-8">
          Your message has been received. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-primary font-semibold hover:underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl  bg-white  shadow h-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" p-8">
          <ContactFormFields control={form.control} />

          <div className="w-full mx-auto flex justify-center mt-8 md:mt-12 ">
            <PrimaryButton
              type="submit"
              text={isSubmitting ? 'Submitting...' : 'Submit Request'}
              disabled={isSubmitting}
            />
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
