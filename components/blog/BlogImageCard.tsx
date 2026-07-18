import Image from 'next/image';
import BlogQuoteCard from './BlogQuoteCard';



export default function BlogImageCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-[4/5] lg:aspect-[7/9] overflow-x-hidden">
      <Image
        src="/images/blog/banner.png"
        alt="Healthcare professional"
        fill
        className="h-full w-full object-cover rounded-2xl"
      />

      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 ">
        <BlogQuoteCard />
      </div>
    </div>
  );
}
