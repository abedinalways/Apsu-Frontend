import { infoData } from '@/lib/data/infoData';
import { TermsSectionComponent } from './InfoSection';

export function InfoList() {
  return (
    <div className="w-full max-w-[760px] space-y-12 ">
      {infoData.map(section => (
        <TermsSectionComponent key={section.id} section={section} />
      ))}
    </div>
  );
}
