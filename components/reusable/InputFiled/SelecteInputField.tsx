import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = { value: string; label: string };

interface SelecteInputFieldProps {
  value?: string;
  onValueChange?: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
}

export default function SelecteInputField({
  value,
  onValueChange,
  options,
  placeholder = "Select",
  className = "",
  id,
  label,
  disabled = false,
}: SelecteInputFieldProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="text-base sm:text-[17px] font-medium text-black block">
          {label}
        </label>
      )}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          id={id}
          className={`${className} h-12 md:h-13 bg-bgColor w-full`}
          disabled={disabled}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
