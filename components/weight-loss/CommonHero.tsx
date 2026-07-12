import { FeatureItem } from "@/app/(Frond-End)/weight-loss/page";

interface CommonHeroProps {
  features: FeatureItem[];
  title: string;
  subtitle?: string;
  description: string;
}

function CommonHero({
  features,
  title,
  subtitle,
  description,
}: CommonHeroProps) {
  return (
    <div className="mt-0 lg:mt-8 container pt-24 lg:pt-32 mx-auto">
      <div className="text-greenColor flex flex-col items-center text-center gap-4 lg:gap-6 w-full">
        <div className="flex items-center flex-wrap justify-center gap-3 lg:gap-6 w-full">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <p
                key={item.id}
                className="text-xs md:text-sm flex items-center gap-2 font-medium"
              >
                {Icon && <Icon className="size-4 md:size-5" />}
                {item.text}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col items-center text-center w-full max-w-[1000px] mx-auto mt-2">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-primaryColor max-w-[600px] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <h4 className="text-lg md:text-xl lg:text-2xl text-primaryColor text-center mt-3 font-medium">
              {subtitle}
            </h4>
          )}
          <p className="text-base text-descriptionColor text-center mt-4 max-w-[1056px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommonHero;
