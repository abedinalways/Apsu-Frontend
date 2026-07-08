function CommonHeader({
  sectionName,
  title,
  description,
}: {
  sectionName: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl  mx-auto w-full">
      <h1 className="text-base text-greenColor mb-3">{sectionName}</h1>
      <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium text-primaryColor">
        {title}
      </h2>
      <p className="text-lg md:text-xl md:px-50 text-descriptionColor mt-3">
        {description}
      </p>
    </div>
  );
}

export default CommonHeader;
