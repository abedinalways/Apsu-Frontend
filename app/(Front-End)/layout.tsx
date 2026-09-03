import Footer from '@/components/Footer';
import Navbar from '@/containers/Navbar';
import SmoothScroll from '@/lib/animation/SmoothScroll';

import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import 'swiper/css/navigation';
export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll>
        <div className="flex flex-col w-full min-h-screen bg-bgColor">
          <Navbar />
          <main className="flex-1">{children}</main>
          {/* <TwScreenSize/> */}
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
