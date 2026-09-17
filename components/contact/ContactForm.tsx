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
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  async function onSubmit(_values: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      toast.error('Contact form is not connected to a backend yet.');
    } catch (error) {
      const message = 'Something went wrong. Please try again later.';
      setSubmitError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleRetry = () => {
    setSubmitError(null);
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="rounded-2xl  bg-white  shadow h-full">
      {submitError && (
        <div className="mb-4 p-4 bg-red-50 border border-orengeColor rounded-lg flex items-center justify-between">
          <p className="text-sm text-redColor">{submitError}</p>
          <button
            type="button"
            onClick={handleRetry}
            className="text-sm text-redColor hover:text-redColor font-medium"
          >
            Retry
          </button>
        </div>
      )}
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
