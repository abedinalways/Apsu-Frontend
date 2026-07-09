import image1 from "@/public/images/work/success.jpg";
import { Instagram, Linkedin, Star, Twitter } from "lucide-react"; // বা আপনার ব্যবহৃত যেকোনো স্টার আইকন
import Image, { StaticImageData } from "next/image";
interface StoryItem {
  id: number;
  category: string;
  rating: number;
  testimonial: string;
  name: string;
  location: string;
  image: string | StaticImageData;
}

const SuccessStories = () => {
  const stories: StoryItem[] = [
    {
      id: 1,
      category: "Weight Loss",
      rating: 5,
      testimonial:
        "I described my symptoms in my own language and actually felt understood, no translating in my head.",
      name: "Maria R.",
      location: "Houston, TX",
      image: image1,
    },
    {
      id: 2,
      category: "General Health",
      rating: 5,
      testimonial:
        "The service exceeded my expectations. Having direct communication with professionals without language barriers changed everything.",
      name: "David L.",
      location: "Queens, NY",
      image: image1,
    },
    {
      id: 3,
      category: "Sleep",
      rating: 5,
      testimonial:
        "Private, simple, and in my language the whole way through. It made getting care feel normal again.",
      name: "An N.",
      location: "San Jose, CA",
      image: image1,
    },
  ];

  return (
    <section className="mt-10 lg:mt-20">
      <div className="container">
        <div className="bg-whiteColor px-6 py-16 md:py-24 font-sans text-primaryColor rounded-[32px]">
          {/* Title Section */}
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-5xl lg:text-[52px] font-medium tracking-tight">
              Our{" "}
              <span className="text-greenColor font-semibold">
                Success Stories
              </span>
            </h2>
            <p className="text-descriptionColor text-base md:text-xl tracking-wide">
              Care that finally made sense.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
            {stories.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col bg-bgColor shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.06)] rounded-2xl p-4 md:p-6 min-h-[400px]  lg:min-h-[530px] justify-between overflow-hidden cursor-pointer transition-all duration-300 border border-[#F5F4EE]"
              >
                {/* --- NORMAL CONTENT STATE --- */}

                <div className="flex flex-col gap-5 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                  <h3 className="text-greenColor text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
                    {item.category}
                  </h3>

                  {/* Stars */}
                  <div className="flex gap-0.5 text-[#FFCA00]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current stroke-none"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-descriptionColor text-base lg:text-lg leading-relaxed ">
                    "{item.testimonial}"
                  </p>
                </div>

                {/* Normal State Footer */}
                <div className="flex items-end justify-between transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                  <div>
                    <h4 className="text-blackColor font-semibold text-lg md:text-xl">
                      {item.name}
                    </h4>
                    <p className="text-descriptionColor text-sm md:text-base">
                      {item.location}
                    </p>
                  </div>
                  {/* Social Icons */}
                  <div className="flex gap-2 text-primaryColor">
                    <div className="w-7 h-7 rounded-full bg-primaryColor flex items-center justify-center text-white scale-90">
                      <Twitter className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-primaryColor flex items-center justify-center text-white scale-90">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-primaryColor flex items-center justify-center text-white scale-90">
                      <Linkedin className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                </div>

                {/* --- HOVER IMAGE STATE --- */}

                <div className="absolute -inset-6 md:-inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Bottom dark gradient wrapper to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primaryColor via-primaryColor/10 to-transparent pointer-events-none rounded-2xl" />

                  {/* Hover Content */}
                  <div className="absolute bottom-3 w-full   flex flex-col justify-end p-10 md:p-12">
                    <div className="flex items-end justify-between text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div>
                        <h4 className="font-semibold text-lg md:text-xl text-white">
                          {item.name}
                        </h4>
                        <p className="text-white/80 text-sm md:text-base">
                          {item.location}
                        </p>
                      </div>
                      {/* White backgrounded Social Icons on Hover */}
                      <div className="flex gap-2">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-primaryColor scale-90">
                          <Twitter className="w-3.5 h-3.5 fill-current" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-primaryColor scale-90">
                          <Instagram className="w-3.5 h-3.5" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-primaryColor scale-90">
                          <Linkedin className="w-3.5 h-3.5 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
