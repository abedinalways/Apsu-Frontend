import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/navigation";
export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FAF9F4]">
      <Navbar />
      <main className="flex-1">{children}</main>
      {/* <TwScreenSize/> */}
      <Footer />
    </div>
  );
}
