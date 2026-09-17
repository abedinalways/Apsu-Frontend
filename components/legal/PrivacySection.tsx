import type { PrivacySection } from '@/lib/data/privacyData';

interface PrivacySectionProps {
  section: PrivacySection;
}

export function PrivacySectionComponent({ section }: PrivacySectionProps) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-blackColor mb-6">
        {section.serial && <span className="mr-2">{section.serial}.</span>}
        {section.title}
      </h2>
      <div
        className="prose prose-lg max-w-none text-grayColor1 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    </section>
  );
}
