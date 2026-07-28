import BannerMedicineCards from "../home/BannerMedicineCards";

function AboutMedicinePart() {
  return (
    <div className=" pb-14 lg:pb-30 container">
      <div className=" lg:pr-8">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center   w-full">
          <div>
            <h4 className="text-base text-greenColor mb-3">WHAT WE TREAT</h4>

            <h2 className="text-3xl md:text-4xl max-w-[500px] lg:text-[40px] font-medium text-primaryColor">
              Focused programs.{" "}
              <span className="text-greenColor font-semibold">
                Expert care.
              </span>{" "}
            </h2>
          </div>
          <p className="text-lg md:text-xl max-w-[543px] ml-auto  text-descriptionColor mt-3">
            Each one handled end-to-end by a licensed physician — discreet, and
            entirely cash-pay. More programs are on the way.
          </p>
        </div>
      </div>
      <div>
        <BannerMedicineCards />
      </div>
    </div>
  );
}

export default AboutMedicinePart;
