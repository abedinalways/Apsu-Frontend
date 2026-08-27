import Marquee from 'react-fast-marquee';

const LanguageCarousel = ({
  direction = 'left',
}: {
  direction?: 'left' | 'right' | 'up' | 'down';
}) => {
  const languages = [
    { name: 'Español', active: true },
    { name: 'Tiếng Việt', active: false },
    { name: '한국어', active: false },
    { name: 'Tagalog', active: true },
    { name: 'English', active: false },
    { name: '中文', active: true },
    { name: 'Français', active: false },
    { name: 'Português', active: false },
    { name: 'हिन्दी', active: false },
    { name: 'Русский', active: false },
    { name: 'العربية', active: false },
  ];
  return (
    <div>
      <Marquee
        direction={direction}
        className="max-w-84 md:max-w-186 lg:max-w-250 xl:max-w-270"
      >
        {languages.map(language => (
          <div
            key={language.name}
            className={`md:mx-3 mx-1 lg:mx-4 flex   items-center justify-center rounded-full border px-4 py-2 lg:py-3 lg:px-8 text-sm lg:text-lg transition-colors ${
              language.active
                ? 'border-primarySecondColor bg-primarySecondColor text-secondary'
                : 'border-primarySecondColor bg-background text-grayColor1'
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
