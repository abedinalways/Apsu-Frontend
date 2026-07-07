import React from "react";
import Marquee from "react-fast-marquee";

const LanguageCarousel = ({
  direction = "left",
}: {
  direction?: "left" | "right" | "up" | "down";
}) => {
  const languages = [
    { name: "Español", active: false },
    { name: "Tiếng Việt", active: false },
    { name: "한국어", active: false },
    { name: "Tagalog", active: false },
    { name: "English", active: false },
    { name: "中文", active: true },
    { name: "Français", active: false },
    { name: "Português", active: true },
    { name: "हिन्दी", active: false },
    { name: "Русский", active: false },
    { name: "العربية", active: false },
  ];
  return (
    <div >
      
      <Marquee direction={direction} className="max-w-84 md:max-w-186 lg:max-w-250 xl:max-w-270">
        {languages.map((language) => (
          <div
            key={language.name}
            className={`mx-3 lg:mx-4 flex h-11  items-center justify-center rounded-full border px-4 py-2 lg:py-3 lg:px-8 text-sm lg:text-lg transition-colors ${
              language.active
                ? "border-[#B8D9C6] bg-[#B8D9C6] text-secondary"
                : "border-[#B4D7CC] bg-[#FAF9F4] text-[#585D5A]"
            }`}
          >
            {language.name}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LanguageCarousel;
