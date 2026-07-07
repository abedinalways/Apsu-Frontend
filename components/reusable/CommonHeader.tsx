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
      <h1 className="text-base text-greenColor">{sectionName}</h1>
      <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-primaryColor">
        {title}
      </h2>
      <p className="text-lg md:text-xl px-50 text-descriptionColor mt-2">
        {description}
      </p>
    </div>
  );
}

export default CommonHeader;
