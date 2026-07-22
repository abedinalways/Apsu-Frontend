"use client";

import ArrowIcon from "@/components/icons/ArrowIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonWithArrowProps {
  text: string;
  href?: string;
  width?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function WhiteCustomButton({
  text,
  href,
  width = "w-fit",
  className,
  type = "button",
  onClick,
}: ButtonWithArrowProps) {
  const buttonClasses = cn(
    "h-12  text-base md:text-base lg:text-lg  pl-8 pr-2 cursor-pointer font-medium group w-fit bg-whiteColor text-secondary rounded-full flex items-center justify-between gap-2 hover:bg-[#F5F5F5] hover:shadow-md transition-all duration-300",
    width,
    className,
  );

  const content = (
    <>
      <span>{text}</span>

      <span className="size-7 rounded-full  text-secondary flex items-center justify-center bg-black">
        <ArrowIcon className="group-hover:-rotate-45 transition-all duration-200  text-whiteColor" />
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
