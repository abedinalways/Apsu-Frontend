import DemoIcon from "../icons/DemoIcon";

interface EmptyTabStateProps {
  message: string;
  subMessage: string;
}

export default function EmptyTabState({
  message,
  subMessage,
}: EmptyTabStateProps) {
  return (
    <div className="max-w-md mx-auto space-y-4 flex flex-col items-center">
      <div className="">
        <DemoIcon/>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-medium text-blackColor">{message}</h3>
        <p className="text-xs md:text-sm text-grayColor1 leading-relaxed font-light px-4">
          {subMessage}
        </p>
      </div>
    </div>
  );
}
