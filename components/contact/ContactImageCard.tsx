import Image from 'next/image';
import ContactQuoteCard from './ContactQuoteCard';


export default function ContactImageCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <Image
        src="/images/contact/banner.png"
        alt="Healthcare professional"
        width={700}
        height={900}
        className="h-full w-full object-cover rounded-2xl"
      />

      <div className="absolute bottom-6 left-6 right-6">
        <ContactQuoteCard />
      </div>
    </div>
  );
}
