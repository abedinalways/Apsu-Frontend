'use client';

import ArrowIcon from '@/components/icons/ArrowIcon';
import { cn } from '@/lib/utils';
import Link from 'next/link';


interface ButtonWithArrowProps {
  text: string;
  href?: string;
  width?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function ReusableButton({
  text,
  href,
  width = 'w-fit',
  className,
  type = 'button',
  onClick,
}: ButtonWithArrowProps) {
  const buttonClasses = cn(
    'inline-flex items-center justify-center rounded-full bg-primary px-4 sm:px-8 py-4 text-base sm:text-lg font-medium text-white transition-all duration-300 hover:bg-primary-900 hover:scale-[1.02] active:scale-[0.98] z-100',
    width,
    className,
  );

  const content = (
    <>
      <span>{text}</span>

      <span className="ml-2 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full aspect-square bg-white">
        <ArrowIcon className="group-hover:-rotate-45 transition-all duration-200" />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}
