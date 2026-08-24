'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '@/public/images/schedule/Content.png';
import image2 from '@/public/images/schedule/Sourced-from-licensed-US-V2.jpg';
import image4 from '@/public/images/schedule/delivery-male-with-mask-packages.jpg';
import image3 from '@/public/images/schedule/team_doctor_nurse_preparing_prescription_paper_patient_annual_checkup.png';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // বা আপনার প্রোজেক্টের যেকোনো অ্যারো আইকন
// Swiper styles ইমপোর্ট করতে ভুলবেন না
import Image, { StaticImageData } from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
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
      title: '24/7 Provider Support',
      image: image1,
      isDarkText: false,
    },
    {
      id: 2,
      title: 'Easy Manager Treatment',
      image: image3,
      isDarkText: true,
    },
    {
      id: 3,
      title: 'Sourced from licensed U.S. pharmacies',
      image: image2,
      isDarkText: true,
    },
    {
      id: 4,
      title: 'Free Delivery & Shipping',
      image: image4,
      isDarkText: true,
    },
  ];

  return (
    <div className="bg-background py-6 md:py-8 font-sans text-primaryColor">
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
          onSwiper={swiper => (swiperRef.current = swiper)}
          onSlideChange={swiper => setCurrentIndex(swiper.realIndex + 1)}
          className="w-full"
        >
          {sliderData.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className="relative flex items-end h-127.5  md:h-155.5  bg-white shadow-[0_4px_12px_0_rgba(2,31,24,0.06)] rounded-2xl overflow-hidden w-full justify-start text-center">
                <Image
                  src={slide?.image}
                  alt={slide.title}
                  width={600}
                  height={600}
                  className="w-full object-cover flex items-end h-full"
                />

                <div className={`absolute top-0 w-full h-full  left-0  `}>
                  <h3
                    className={`relative ${slide?.isDarkText && 'bg-linear-to-b  from-greenColor to-transparent pb-8 text-white'} text-2xl md:text-2xl lg:text-3xl font-semibold tracking-tight p-4 lg:px-10 lg:p-6 leading-[116%]  z-10 `}
                  >
                    {slide.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ScheduleSlider;
