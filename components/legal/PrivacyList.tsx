import { privacyData } from '@/lib/data/privacyData';
import { PrivacySectionComponent } from './PrivacySection';


export function PrivacyList() {
  return (
    <div className="w-full max-w-[760px] space-y-12">
      {privacyData.map(section => (
        <PrivacySectionComponent key={section.id} section={section} />
      ))}
    </div>
  );
}