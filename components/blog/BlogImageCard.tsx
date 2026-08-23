import Image from 'next/image';
import BlogQuoteCard from './BlogQuoteCard';



export default function BlogImageCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[10/15]  lg:aspect-[5/9] overflow-x-hidden ">
      <div className='flex items-start'>
        <Image
          src="/images/blog/banner.png"
          alt="Healthcare professional"
          fill
          className="object-cover rounded-2xl w-full h-full"
        />
      </div>

      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 ">
        <BlogQuoteCard />
      </div>
    </div>
  );
}
