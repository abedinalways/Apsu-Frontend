interface DisclaimerProps {
  content?: string;
}

export default function Disclaimer({ content }: DisclaimerProps) {
  if (!content) return null;
  return (
    <div className="mt-10 pt-6 border-t border-lightGreenColor">
      <p className="text-[0.95rem] leading-relaxed text-grayColor1 italic">
        {content}
      </p>
    </div>
  );
}
