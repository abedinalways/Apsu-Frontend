interface DisclaimerProps {
  content?: string;
}

export default function Disclaimer({ content }: DisclaimerProps) {
  if (!content) return null;
  return (
    <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
      <p className="text-[0.95rem] leading-relaxed text-[#6B7280] italic">
        {content}
      </p>
    </div>
  );
}
