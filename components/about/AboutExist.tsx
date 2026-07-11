import aboutExistImage from "@/public/images/about/exist.png";
import Image from "next/image";

function AboutExist() {
  const stats = [
    {
      value: "1 in 5",
      description:
        "People in the U.S. speak a language other than English at home.",
      source: "U.S. Census Bureau, American Community Survey",
    },
    {
      value: "25M+",
      description:
        'Have limited English proficiency — they speak English less than "very well."',
      source: "U.S. Census Bureau, American Community Survey",
    },
  ];
  return (
    <section className="xl:py-27 lg:py-15  pt-14 relative  ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" lg:pr-8">
            <div className="max-w-3xl  mx-auto w-full">
              <h4 className="text-base text-greenColor mb-3">WHY WE EXIST</h4>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-primaryColor">
                The hardest part of American healthcare isn't always the
                medicine.
              </h2>
              <p className="text-lg md:text-xl  text-descriptionColor mt-3">
                For millions of people, it's the language. When you can't fully
                explain your symptoms — or fully understand the answer — care
                gets slower, more frightening, and far too easy to put off.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={aboutExistImage}
              alt="About Exist"
              width={800}
              height={600}
            />
          </div>
        </div>
        <div className="  pt-16 md:pt-20  text-primaryColor">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mb-14 lg:mb-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white shadow-[0_4px_12px_0_rgba(2,_31,_24,_0.06)] rounded-2xl p-8 md:p-10 justify-between min-h-[220px] border border-[#CDDCD3]"
                >
                  <div>
                    {/* Big Bold Stat Value */}
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-primaryColor mb-5">
                      {stat.value}
                    </h3>
                    {/* Description */}
                    <p className="text-[#585E5A] text-sm md:text-base leading-relaxed max-w-md">
                      {stat.description}
                    </p>
                  </div>

                  {/* Source Text (Italicized) */}
                  <p className="text-[#A1A6A2] italic text-xs md:text-sm mt-6">
                    {stat.source}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Description Content */}
            <div className="text-center  max-w-[1010px] mx-auto px-4">
              <p className="text-base md:text-lg  text-descriptionColor mt-3">
                We started APSU because the people most likely to skip care are
                often the ones who simply couldn't navigate it in English. So we
                removed the barrier instead of asking people to climb it. Tell
                us what's going on in your own language; our AI carries it, both
                ways, to a physician who treats you like any other patient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutExist;
