'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RecommendedCard from './RecommendedCard';
import RecommendedHeader from './RecommendedHeader';
import useRecommendedCarousel from '@/hooks/useRecommendedCarousel';
import { recommendedBlogs } from '@/lib/data/recommendedBlogs';
import Autoplay from 'embla-carousel-autoplay';


export default function RecommendedCarousel() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      tl.from('.recommended-title', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
      }).from(
        '.recommended-card',
        {
          opacity: 0,
          y: 40,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power3.out',
        },
        '-=0.3',
      );
    },
    {
      scope: sectionRef,
    },
  );
 

  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: true,
      loop: true,
    },
    [autoplay.current],
  );
  
  const { scrollPrev, scrollNext, prevDisabled, nextDisabled } =
    useRecommendedCarousel(emblaApi);

  return (
    <section ref={sectionRef} className="rounded-[32px] bg-white p-8 ">
      <RecommendedHeader
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
      />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 p-3">
          {recommendedBlogs.map(blog => (
            <div
              key={blog.id}
              recommended-card
              className=" gap-[20px]
              min-w-0
              flex-[0_0_100%]
              sm:flex-[0_0_calc(50%-20px)]
              lg:flex-[0_0_calc(33.333%-16px)]
              xl:flex-[0_0_calc(25%-18px)]
            "
            >
              <RecommendedCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
