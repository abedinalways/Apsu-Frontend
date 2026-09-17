'use client';

export function InfoHero() {
  return (
    <section className="flex flex-col  justify-start mb-4 max-w-3xl">
      <div className="flex flex-col  gap-2  max-w-4xl">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[110%] text-primaryColor">
          Medications Safety Information
        </h1>

        {/* Last Updated */}
        <p className="text-[20px] text-grayColor1 leading-[120%]">
          Last updated on 21 June, 2026
        </p>
        <div className="w-full border-t border-dashed border-lightGreenColor py-4"></div>
        <p className="py-4 hidden md:block">
          Please read this carefully. This page is a general summary of safety
          information for the medications offered through Apsu. It does not
          contain all possible information, is not medical advice, and does not
          replace the guidance of your provider or pharmacist or the official
          prescribing information for your medication. Always read the materials
          your provider and pharmacy give you.
        </p>

        <p className="mb-14 hidden md:block">
          If you think you may be having a medical emergency, call 911 or go to
          the nearest emergency room. If you are in emotional distress or
          crisis, call or text 988 (the Suicide & Crisis Lifeline).
        </p>
      </div>
    </section>
  );
}
