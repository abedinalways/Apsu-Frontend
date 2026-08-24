'use client';

import { Input } from '@/components/ui/input';
import image from '@/public/images/work/bgImage.png';
import { FormData } from '@/zod/AssessmentSchema';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { ShortIcon } from '../icons/Icons';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CheckEligibilitySection() {
  const { register, watch, setValue, handleSubmit } = useForm<FormData>({
    defaultValues: {
      unitSystem: 'imperial',
      gender: 'female',
    },
  });
  const unitSystem = watch('unitSystem') || 'imperial';
  const selectedGender = watch('gender') as string;
  const bmiScore = 56;
  const maxBmi = 100;
  const circumference = 2 * Math.PI * 50;
  const progressOffset = circumference * (1 - bmiScore / maxBmi);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
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

      tl.from('.medicine-card', {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.12,
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      className="relative w-full p-3 md:py-6 lg:p-4  rounded-3xl! overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('${image.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <div
          ref={sectionRef}
          className="relative z-10 w-full xl:p-10   items-end  grid grid-cols-1 lg:grid-cols-2 gap-6 "
        >
          {/* Left Card: Check Your Eligibility */}
          <div className="medicine-card bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between">
            <div>
              {/* Top Subtitle & BMI label */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-semibold tracking-wider text-[#0B5233] uppercase">
                  CHECK YOUR ELIGIBILITY
                </span>
                <span className="text-sm md:text-base font-semibold text-grayColor1">
                  BMI
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-[22px] md:text-[26px] font-bold text-primaryColor tracking-tight leading-tight mb-2">
                Could a GLP-1 program be right for you?
              </h2>
              <p className="text-[13px] text-[#585E5A] mb-6">
                Enter your height and weight below
              </p>
              <div className="lg:hidden flex justify-center pb-4">
                <div className="flex w-52 h-52 justify-center items-center  rounded-full border-2 border-dashed">
                  <div className="relative w-48 h-48 flex flex-col items-center justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full -rotate-90"
                      viewBox="0 0 120 120"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        strokeDasharray="4 4"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#097545"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${circumference}`}
                        strokeDashoffset={`${progressOffset}`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <span className="text-4xl md:text-5xl font-bold text-primaryColor tracking-tight">
                      {bmiScore}
                    </span>
                    <span className="text-[12px] font-medium text-grayColor1 mt-1">
                      Your
                    </span>
                    <span className="text-[12px] font-medium text-grayColor1">
                      BMI Score
                    </span>
                  </div>
                </div>
              </div>
              {/* Unit Toggle Pill */}
              <div className="mb-5">
                <div className="inline-flex gap-1 p-1  border border-primaryColor rounded-full max-w-fit">
                  <button
                    type="button"
                    onClick={() => setValue('unitSystem', 'imperial')}
                    className={`px-5 py-1.5 text-[14px] font-medium rounded-full transition-all cursor-pointer ${
                      unitSystem === 'imperial'
                        ? 'bg-primaryColor text-white shadow-sm'
                        : 'text-grayColor1 hover:text-gray-900'
                    }`}
                  >
                    ft / lbs
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('unitSystem', 'metric')}
                    className={`px-5 py-1.5 text-[11px] font-semibold rounded-full transition-all cursor-pointer ${
                      unitSystem === 'metric'
                        ? 'bg-primaryColor text-white shadow-sm'
                        : 'text-grayColor1 hover:text-gray-900'
                    }`}
                  >
                    cm / kgs
                  </button>
                </div>
              </div>

              {/* Height & Weight Inputs Grid */}
              <div className="space-y-4 mb-5">
                {unitSystem === 'imperial' ? (
                  <div className="grid grid-cols-2  lg:grid-cols-3 gap-3">
                    <div>
                      <label className="text-sm md:text-base text-[#585E5A]">
                        Height
                      </label>
                      <div className="relative flex items-center mt-1">
                        <Input
                          type="number"
                          {...register('heightFt')}
                          className="bg-[#F6F8FA] h-12 text-[14px] text-blackColor rounded-full border-gray-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className="absolute right-3 pointer-events-none text-[11px] text-grayColor1 font-medium">
                          <div className="flex items-center gap-1">
                            <ShortIcon className="text-[#758C7D] w-4 h-4" />
                            <p>ft</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm md:text-base text-[#585E5A] select-none">
                        in
                      </label>
                      <div className="relative flex items-center mt-1">
                        <Input
                          type="number"
                          {...register('heightIn')}
                          className="bg-[#F6F8FA] h-12 text-[14px] text-blackColor rounded-full border-gray-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className="absolute right-3 pointer-events-none text-[11px] text-grayColor1 font-medium">
                          <div className="flex items-center gap-1">
                            <ShortIcon className="text-[#758C7D] w-4 h-4" />
                            <p>in</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <label className="text-sm md:text-base text-[#585E5A]">
                        Weight
                      </label>
                      <div className="relative flex items-center mt-1">
                        <Input
                          type="number"
                          {...register('weightLbs')}
                          className="bg-[#F6F8FA] h-12 text-[14px] text-blackColor rounded-full border-gray-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className="absolute right-3 pointer-events-none text-[11px] text-grayColor1 font-medium">
                          <div className="flex items-center gap-1">
                            <ShortIcon className="text-[#758C7D] w-4 h-4" />
                            <p>lbs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm md:text-base text-[#585E5A]">
                        Height (cm)
                      </label>
                      <div className="relative flex items-center mt-1">
                        <Input
                          type="number"
                          {...register('heightCm')}
                          className="bg-[#F6F8FA] h-12 text-[14px] text-blackColor rounded-full border-gray-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className="absolute right-3 pointer-events-none text-[11px] text-grayColor1 font-medium">
                          <div className="flex items-center gap-1">
                            <ShortIcon className="text-[#758C7D] w-4 h-4" />
                            <p>cm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm md:text-base text-[#585E5A]">
                        Weight (kgs)
                      </label>
                      <div className="relative flex items-center mt-1">
                        <Input
                          type="number"
                          {...register('weightKgs')}
                          className="bg-[#F6F8FA] h-12 text-[14px] text-blackColor rounded-full border-gray-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className="absolute right-3 pointer-events-none text-[11px] text-grayColor1 font-medium">
                          <div className="flex items-center gap-1">
                            <ShortIcon className="text-[#758C7D] w-4 h-4" />
                            <p>kgs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sex / Gender Selection - Radio Buttons */}
              <div className="mb-6">
                <label className="text-sm md:text-base text-[#585E5A] block mb-2">
                  Sex
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center py-2.5 px-4 border rounded-full gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="male"
                      checked={selectedGender === 'male'}
                      onChange={() => setValue('gender', 'male')}
                      className="accent-primaryColor w-4 h-4"
                    />
                    <span className="text-[13px] text-primaryColor font-medium">
                      Male
                    </span>
                  </label>
                  <label className="flex items-center p-2.5 border rounded-full gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="female"
                      checked={selectedGender === 'female'}
                      onChange={() => setValue('gender', 'female')}
                      className="accent-primaryColor w-4 h-4"
                    />
                    <span className="text-[13px] text-primaryColor font-medium">
                      Female
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Calculate BMI Button */}
            <button
              type="submit"
              className="w-full h-14 bg-primaryColor hover:bg-primaryColor text-white font-medium rounded-2xl transition-all cursor-pointer shadow-md text-base"
            >
              Calculate BMI
            </button>
          </div>

          {/* Right Card: BMI Score & Details */}
          <div className="medicine-card bg-white rounded-3xl hidden lg:block h-fit p-4 lg:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
            <div className="flex flex-col items-center gap-4 lg-6 justify-center ">
              {/* Circular Gauge / Score Simulation */}
              <div className="flex w-52 h-52 justify-center items-center  rounded-full border-2 border-dashed">
                <div className="relative w-48 h-48 flex flex-col items-center justify-center">
                  <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="6"
                      strokeDasharray="4 4"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#097545"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${circumference}`}
                      strokeDashoffset={`${progressOffset}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <span className="text-4xl md:text-5xl font-bold text-primaryColor tracking-tight">
                    {bmiScore}
                  </span>
                  <span className="text-[12px] font-medium text-grayColor1 mt-1">
                    Your
                  </span>
                  <span className="text-[12px] font-medium text-grayColor1">
                    BMI Score
                  </span>
                </div>
              </div>

              {/* Gradient BMI Range Bar */}
              <div className="w-full space-y-2">
                <div className="w-full h-2 rounded-full bg-linear-to-r from-[#3B82F6] via-[#10B981] via-[#F59E0B] to-[#EF4444]" />
                <div className="flex justify-between items-center text-[10px] md:text-[11px] text-grayColor1 text-center font-medium pt-1">
                  <span>Underweight &lt;18.5</span>
                  <span>Healthy Weight 18.5 - 24.9</span>
                  <span>Overweight 25.0 - 29.9</span>
                  <span>Obese &ge; 30</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-6  flex items-center gap-2  cursor-pointer group">
              <span className="text-[14px] md:text-[16px] font-semibold text-primaryColor  transition-colors">
                See your GLP-1 Options
              </span>
              <div className="w-7 h-7 rounded-full  border-2 border-primaryColor flex items-center justify-center   transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
