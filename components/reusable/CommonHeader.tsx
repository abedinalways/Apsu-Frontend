function CommonHeader({
  sectionName,
  title,
  description,
  isSmall = false,
}: {
  sectionName: string;
  title: string;
  description?: string;
  isSmall?: boolean;
}) {
  return (
    <div className="max-w-[800px]  mx-auto w-full">
      <h4 className="text-base text-greenColor mb-3">{sectionName}</h4>
      <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium text-primaryColor">
        {title}
      </h2>
      {description && isSmall ? (
        <p className="text-lg md:text-xl leading-[160%] text-descriptionColor mt-3">
          {description}
        </p>
      ) : (
        <p className="text-lg md:text-xl leading-[160%] md:px-50 text-descriptionColor mt-3">
          {description}
        </p>
      )}
    </div>
  );
}

export default CommonHeader;
