import { Check } from 'lucide-react';
import { BlogContentBlock } from '@/types/blogDetails';

type Props = Partial<BlogContentBlock>;

export default function BulletList({ items }: Props) {
  if (!items?.length) return null;

  return (
    <ul className="space-y-5">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4">
          <div
            className="
              mt-1
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#E8F8F1]
            "
          >
            <Check size={16} className="text-[#008C5E]" />
          </div>

          <p
            className="
              text-[18px]
              leading-[180%]
              text-[#555]
            "
          >
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}
