import Marquee from "react-fast-marquee";
// আপনার প্রোজেক্টের আইকনগুলোর সঠিক পাথ এখানে দিন
import {
  CashIcon,
  HeadphonesIcon,
  MapIcon,
  StethoscopeIcon,
  TruckIcon,
} from "../icons/Icons";

interface FeatureItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const WorkAddSection = ({
  direction = "left",
}: {
  direction?: "left" | "right" | "up" | "down";
}) => {
  const features: FeatureItem[] = [
    { name: "Cash-pay, No Insurance Needed", icon: CashIcon },
    { name: "Discreet Shipping", icon: TruckIcon },
    { name: "50 States", icon: MapIcon },
    { name: "US Board Certified MDs", icon: StethoscopeIcon },
    { name: "24/7 AI Care Assistant", icon: HeadphonesIcon },
  ];

  return (
    <div className="w-full bg-primary py-5 text-white overflow-hidden">
      <Marquee direction={direction} speed={40} gradient={false}>
        {[...features, ...features].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="mx-6 md:mx-10 flex items-center justify-center gap-2 text-sm md:text-base font-medium whitespace-nowrap"
            >
              {Icon && <Icon className="w-5 h-5 opacity-90" />}
              <span>{item.name}</span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default WorkAddSection;
