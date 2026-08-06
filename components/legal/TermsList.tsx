import { termsData } from "@/lib/data/termsData";
import { TermsSectionComponent } from "./TermsSection";


export function TermsList() {
  return (
    <div className="w-full max-w-[760px] space-y-12">
      {termsData.map(section => (
        <TermsSectionComponent key={section.id} section={section} />
      ))}
    </div>
  );
}