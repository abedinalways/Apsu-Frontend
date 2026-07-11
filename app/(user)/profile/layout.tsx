import Navbar from "@/components/Navbar";
import { TwScreenSize } from "@/lib/TwScreenSize";
import { Toaster } from "sonner";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
  <div className="flex flex-col w-full min-h-screen bg-[#faf9f4]">
    <Navbar />
      <main className="flex-1">
        {children}
        <Toaster/>
    </main>
  </div>
)}
