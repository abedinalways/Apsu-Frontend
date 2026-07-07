"use client";

import React from "react";
import { Globe } from "lucide-react";
import SelecteInputField from "@/components/reusable/InputFiled/SelecteInputField";
import Image from "next/image";
import Link from "next/link";

type LanguageOption = { value: string; label: string };

const languages: LanguageOption[] = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
];

export default function AssessmentNavbar() {
  const [language, setLanguage] = React.useState<string>("en");

  const selectedLabel =
    languages.find((l) => l.value === language)?.label ?? "Select Language";

  return (
    <header className="w-full bg-[#FAF9F6] border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <Link href={"/"}>
        {" "}
        <div className="flex items-center">
          {/* Left: Logo */}
          <Image src="/logo.png" alt="apsu" height={32} width={87} />
        </div>
      </Link>

      <div className="w-40">
        <SelecteInputField
          value={language}
          onValueChange={setLanguage}
          options={languages}
          placeholder="Select Language"
          className=""
        />
      </div>
    </header>
  );
}
