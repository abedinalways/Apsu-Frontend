"use client"
import React from "react";

type Option = "success" | "danger";

const ALERT_CLASSES: Record<string, string> = {
  success: "text-[var(--color-greenColor)] bg-[var(--color-lightGreenColor)] border-[var(--color-greenColor)]",
  danger: "text-[var(--color-redColor)] bg-[var(--color-lightRedColor)] border-[var(--color-redColor)]",
};

export function Alert({ type, children }: { type?: Option; children?: any }) {
  const classes = ALERT_CLASSES[type || ""] || "text-transparent bg-transparent border-transparent";

  return (
    <>
      <div
        className={`rounded-[4px] border-x-[1px] border-y-[1px] px-[20px] py-[6px] mb-3 ${classes}`}
      >
        {children}
      </div>
    </>
  );
}
