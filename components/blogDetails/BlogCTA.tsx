import Link from 'next/link';
import Image from 'next/image';

interface BlogCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function BlogCTA({
  title = 'Ready to take the next step?',
  description = 'Apsu connects patients with licensed U.S. providers who can review your health history, answer your questions, and help you decide whether treatment is right for you.',
  buttonText = 'Start your consultation',
  buttonHref = '/assessment',
}: BlogCTAProps) {
  return (
    <div className="mt-10 rounded-[20px] bg-brand p-8 md:p-10 text-center text-white">
      <div className="mx-auto max-w-2xl space-y-4">
        <h3 className="text-2xl md:text-[28px] font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-base md:text-[17px] leading-relaxed text-white/90">
          {description}
        </p>
        <div className="pt-2">
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-gray-100"
          >
            {buttonText}
            <Image
              src="/images/blogDetails/arrow-right.png"
              alt=""
              width={16}
              height={16}
              className="h-4 w-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
