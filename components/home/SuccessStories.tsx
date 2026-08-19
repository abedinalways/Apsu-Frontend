"use client";
import image1 from "@/public/images/work/Our-Success-Stories-1 (Maria R).jpg";
import image3 from "@/public/images/work/Our-Success-Stories-1-(David-L).jpg";
import image2 from "@/public/images/work/success.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  Instagram,
  Linkedin,
  Star,
  Twitter,
} from "lucide-react"; // বা আপনার ব্যবহৃত যেকোনো স্টার আইকন
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
      image: image2,
    },
    {
      id: 3,
      category: "Sleep",
      rating: 5,
      testimonial:
        "Private, simple, and in my language the whole way through. It made getting care feel normal again.",
      name: "An N.",
      location: "San Jose, CA",
      image: image3,
    },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useGSAP(
    () => {
      if (!swiperReady) return;

      const select = gsap.utils.selector(sectionRef);
      const cards = select<HTMLElement>(".medicine-card");

      gsap.fromTo(
        cards,
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.inOut",
          stagger: 0.08,
          overwrite: "auto",
          force3D: true,
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { dependencies: [swiperReady], scope: sectionRef, revertOnUpdate: true },
  );
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [activeCard, setActiveCard] = useState<number | null>(2);
  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();
  return (
    <section className="mt-10 lg:mt-20">
      <div className="container">
        <div className="bg-whiteColor px-6 py-16 md:py-24 font-sans text-primaryColor rounded-4xl">
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
          {/* Swiper Slider */}
          <div className="relative">
            <div className="lg:hidden">
              <button
                onClick={goPrev}
                className="w-9 h-9 absolute -left-6 top-1/2 transform -translate-y-1/2 z-20 rounded-full border cursor-pointer border-primaryColor flex items-center justify-center bg-primaryColor text-white transition-colors duration-200 disabled:opacity-40"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="w-9 h-9 absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 rounded-full border cursor-pointer border-primaryColor flex items-center justify-center bg-primaryColor text-white transition-colors duration-200 disabled:opacity-40"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div ref={sectionRef} className="relative">
              <Swiper
                slidesPerView={1}
                spaceBetween={24}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 3 },
                }}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 300000,
                  disableOnInteraction: true,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setSwiperReady(true);
                }}
                onSlideChange={(swiper) =>
                  setCurrentIndex(swiper.realIndex + 1)
                }
                className="w-full"
              >
                {stories.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className="group medicine-card relative flex flex-col bg-bgColor shadow-[0_4px_12px_0_rgba(2,31,24,0.06)] rounded-2xl p-4 md:p-6 min-h-100  lg:min-h-132.5 justify-between overflow-hidden cursor-pointer transition-all duration-300 border border-[#F5F4EE]"
                      onMouseEnter={() => setActiveCard(item.id)}
                      onMouseLeave={() => setActiveCard(2)}
                      onClick={() =>
                        setActiveCard((prev) =>
                          prev === item.id ? 2 : item.id,
                        )
                      }
                    >
                      {/* --- NORMAL CONTENT STATE --- */}

                      <div
                        className={`flex flex-col gap-5 transition-all duration-300 ${activeCard === item.id ? "opacity-0 pointer-events-none" : ""}`}
                      >
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
                      <div
                        className={`flex items-end justify-between transition-all duration-300 ${activeCard === item.id ? "opacity-0 pointer-events-none" : ""}`}
                      >
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

                      <div
                        className={`absolute -inset-6 md:-inset-8 transition-opacity duration-500 rounded-2xl overflow-hidden ${activeCard === item.id ? "opacity-100" : "opacity-0"}`}
                      >
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Bottom dark gradient wrapper to make text readable */}
                        <div className="absolute inset-0 bg-linear-to-t from-primaryColor via-primaryColor/10 to-transparent pointer-events-none rounded-2xl" />

                        {/* Hover Content */}
                        <div className="absolute bottom-3 w-full flex flex-col justify-end p-10 md:p-12">
                          <div
                            className={`flex items-end justify-between text-white w-full transition-transform duration-500 ${activeCard === item.id ? "translate-y-0" : "translate-y-4"}`}
                          >
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
