import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "react-datepicker/dist/react-datepicker.css";
export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Navbar />
      <main className="flex-1">
      {children}
      </main>
      <Footer />
    </div>
  );
}
