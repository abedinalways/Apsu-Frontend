import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { TwScreenSize } from "@/lib/TwScreenSize";
import "react-datepicker/dist/react-datepicker.css";
export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf9f4]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <TwScreenSize/>
      <Footer />
    </div>
  );
}
