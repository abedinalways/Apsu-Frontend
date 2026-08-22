import { BlogContentBlock } from '@/types/blogDetails';

type Props = Partial<BlogContentBlock>;

export default function NumberList({ items }: Props) {
  if (!items?.length) return null;

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex gap-5">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#123826]
              text-white
              font-semibold
            "
          >
            {index + 1}
          </div>

          <div className="pt-2">
            <p
              className="
                text-[18px]
                font-medium
                text-text-primary
              "
            >
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
