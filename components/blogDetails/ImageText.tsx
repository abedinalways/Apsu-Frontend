import Image from 'next/image';
import { BoltIcon } from '../icons/CheckIcon';


interface ImageTextProps {
  image?: string;
  alt?: string;
  description?: string;
  bullets?: string[];
  layout?: 'left' | 'right';
  imageRatio?: 'portrait' | 'wide';
}

function VisualBlock({
  image,
  alt,
  imageRatio = 'portrait',
}: Pick<ImageTextProps, 'image' | 'alt' | 'imageRatio'>) {
  if (!image) return null;

  return (
    <div
      className={`relative w-full md:-top-24 overflow-hidden rounded-[12px] ${
        imageRatio === 'wide' ? 'aspect-[16/16]' : 'aspect-[5/5]'
      }`}
    >
      <Image
        src={image}
        alt={alt ?? ''}
        fill
        className="object-contain w-full h-full " 
        // sizes="(min-width: 768px) 45vw, 100vw"
      />
    </div>
  );
}

export default function ImageText({
  image,
  alt,
  description,
  bullets,
  layout = 'right',
  imageRatio = 'portrait',
}: ImageTextProps) {
  const visual = (
    <VisualBlock image={image} alt={alt} imageRatio={imageRatio} />
  );

  const text = (
    <div className="space-y-4 md:space-y-0">
      {description && (
        <p className="text-[1.13rem] leading-relaxed text-text-primary ">
          {description}
        </p>
      )}
      {bullets?.length ? (
        <ul className="space-y-3">
          {bullets.map(item => (
            <li
              key={item}
              className="flex items-start gap-3 text-[0.95rem] text-text-primary "
            >
              <BoltIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );

  return (
    <div className="grid items-start gap-8 md:grid-cols-2">
      {layout === 'left' ? (
        <>
          {visual}
          {text}
        </>
      ) : (
        <>
          {text}
          {visual}
        </>
      )}
    </div>
  );
}
