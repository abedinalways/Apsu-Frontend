import Navbar from "@/components/Navbar";
import MedicalChatbot from "@/components/profile/MedicalChatbot";


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
    </main>
    <MedicalChatbot />
  </div>
)}
