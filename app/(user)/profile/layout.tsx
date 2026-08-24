import Navbar from '@/containers/Navbar';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
