"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "@/public/images/schedule/Content.png";
import image2 from "@/public/images/schedule/Content2.png";
import image4 from "@/public/images/schedule/delivery-male-with-mask-packages.jpg";
import image3 from "@/public/images/schedule/team_doctor_nurse_preparing_prescription_paper_patient_annual_checkup.png";
import { ArrowLeft, ArrowRight } from "lucide-react"; // বা আপনার প্রোজেক্টের যেকোনো অ্যারো আইকন
// Swiper styles ইমপোর্ট করতে ভুলবেন না
import { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
interface SlideItem {
  id: number;
  title: string;
  image: string | StaticImageData;
  isDarkText: boolean;
}

const ScheduleSlider = () => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  const sliderData: SlideItem[] = [
    {
      id: 1,
      title: "24/7 Provider Support",
      image: image1,
      isDarkText: true,
    },
    {
      id: 2,
      title: "Easy Manager Treatment",
      image: image3,
      isDarkText: false,
    },
    {
      id: 3,
      title: "Access to FDA-approved Medication Options",
      image: image2,
      isDarkText: true,
    },
    {
      id: 4,
      title: "Free Delivery & Shipping",
      image: image4,
      isDarkText: false,
    },
    {
      id: 5,
      title: "Access to FDA-approved Medication Options",
      image: image2,
      isDarkText: true,
    },
  ];

  return (
    <div className="bg-[#FAF9F5] py-6 md:py-8 font-sans text-primaryColor">
      <div className="container ">
        {/* Header Section with Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-primaryColor max-w-md leading-tight">
            Completely online on your schedule
          </h2>

          {/* Custom Navigation Arrows */}
          <div className="flex mt-2 justify-end md:mt-0 gap-3">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border cursor-pointer border-primaryColor flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors duration-200 disabled:opacity-40"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border cursor-pointer border-primaryColor flex items-center justify-center hover:bg-primaryColor hover:text-white transition-colors duration-200 disabled:opacity-40"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.5 },
          }}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 300000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
          className="w-full"
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative flex flex-col items-center bg-white shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.06)] rounded-2xl overflow-hidden aspect-3/5   w-full p-6 md:p-8 justify-start text-center"
                style={{
                  backgroundImage: `url(${typeof slide.image === "string" ? slide.image : slide.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <h3 className="relative text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-[116%]  z-10 text-white">
                  {slide.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ScheduleSlider;
