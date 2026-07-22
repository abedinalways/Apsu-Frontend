const ProfileStatusCards = () => {
  return (
    <div className="flex  h-full items-center gap-2 md:gap-4 lg:gap-2 lg:pr-8  w-full ">
      {/* Left Card: User Info */}
      <div className="w-full  flex flex-col bg-white shadow-[0_4px_12px_0_rgba(2,31,24,0.06)] rounded-2xl p-3 md:p-4 justify-center ">
        {/* Name */}
        <h3 className="text-primaryColor pb-3 border-b border-dashed text-base xl:text-2xl md:text-2xl lg:text-xl   font-semibold tracking-tight">
          Olivia Gomes
        </h3>

        {/* Stats */}
        <div className="flex items-baseline gap-2 xl:gap-8 mt-4">
          {/* Stat 1 */}
          <div className="flex items-baseline gap-2">
            <span className="text-blackColor text-base md:text-2xl xl:text-3xl font-medium ">
              78
            </span>
            <span className="text-greenColor text-xs  md:text-base xl:text-lg font-medium">
              Normal
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex items-baseline gap-2">
            <span className="text-blackColor text-base md:text-2xl xl:text-3xl font-medium">
              89.5%
            </span>
            <span className="text-greenColor text-xs  md:text-base xl:text-lg font-medium">
              Progress
            </span>
          </div>
        </div>
      </div>

      {/* Right Card: Profile Progress */}
      <div className="w-full  flex flex-col bg-white shadow-[0_4px_12px_0_rgba(2,31,24,0.06)] rounded-2xl p-2 md:p-4 gap-5 justify-between h-full ">
        {/* Title */}
        <h3 className="text-primaryColor text-nowrap text-base xl:text-2xl md:text-xl font-semibold lg:pr-4 tracking-tight">
          Your profile
        </h3>

        <div className=" space-y-2">
          {/* Gradient Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-[#3B82F6] via-[#1A8A79] via-[#F59E0B] to-[#EF4444]"
              style={{ width: "99%" }}
            />
          </div>

          {/* Progress Percentage */}
          <div className="text-greenColor text-sm md:text-base font-medium">
            82%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatusCards;
