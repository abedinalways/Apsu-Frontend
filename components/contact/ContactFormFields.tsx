import TextareaField from '@/components/reusable/form/TextareaField';
import InputField from '../reusable/InputFiled/InputField';

interface Props {
  control: any;
}

export default function ContactFormFields({ control }: Props) {
  return (
    <div className="space-y-3">
      <div className="">
        <p className="text-base sm:text-[17px] font-medium text-black block">
          Full Name
        </p>
        <div className="grid gap-4 sm:gap-4 grid-cols-2">
          <div>
            <InputField
              control={control}
              name="firstName"
              label="First Name"
              placeholder="First name"
            />
          </div>
          <div>
            <InputField
              control={control}
              name="lastName"
              label="Last Name"
              placeholder="Last name"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="relative">
          <InputField
            control={control}
            name="email"
            label="Email"
            placeholder="Enter email address"
          />
        </div>

        <div className="relative">
          <InputField
            control={control}
            name="phone"
            label="Phone"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      <div className="relative max-w-2xl">
        <InputField
          control={control}
          name="subject"
          label="Subject"
          placeholder="Ex: Weight loss"
        />
      </div>

      <TextareaField
        control={control}
        name="message"
        label="Message"
        placeholder="Write your message here......."
      />
    </div>
  );
}
