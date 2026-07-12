"use client";
import care1 from "@/public/images/about/care1.png";
import care2 from "@/public/images/about/care2.png";
import care3 from "@/public/images/about/care3.png";
import care4 from "@/public/images/about/care4.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";
import { useRef } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonHeader from "../reusable/CommonHeader";
import CareCard from "./CareCard";

export interface SlideItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  mainImage: string | StaticImageData;
}

function AboutCareWork() {
  const swiperRef = useRef<any>(null);

  const sliderData: SlideItem[] = [
    {
      id: 1,
      stepNumber: "01",
      title: "Choose your program",
      description: "Weight loss, birth control, or sleep — pick what you need.",
      mainImage: care1,
    },
    {
      id: 2,
      stepNumber: "02",
      title: "Share your history",
      description:
        "Complete your intake in the language you think in. We translate it for your physician.",
      mainImage: care2,
    },
    {
      id: 3,
      stepNumber: "03",
      title: "A physician reviews",
      description:
        "A U.S.-licensed doctor evaluates, follows up, and prescribes only when it's clinically appropriate.",
      mainImage: care3,
    },
    {
      id: 4,
      stepNumber: "04",
      title: "Medication ships",
      description:
        "Delivered to your door in discreet packaging. Cash-pay, no insurance needed.",
      mainImage: care4,
    },
  ];

  return (
    <div className="container">
      <div className=" bg-white my-14 lg:my-30 p-4 lg:p-6 font-sans rounded-xl lg:rounded-2xl text-primaryColor">
        <div className="">
          <div className="text-center mb-10 lg:mb-16">
            <CommonHeader
              sectionName="HOW CAREWORKS"
              title="From your words to your door only in 4 steps."
            />
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1280: { slidesPerView: 1 },
            }}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 300000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full"
          >
            {sliderData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <CareCard slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-start gap-3 mt-8 lg:mt-12">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border-2 cursor-pointer border-primaryColor flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border-2 cursor-pointer border-primaryColor flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors duration-200"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCareWork;
