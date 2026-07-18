import LoginPageClient from "@/components/login/LoginPageClient";


export const metadata = {
  title: 'Login | Apsu',
  description: 'Access your treatments and care center.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] flex items-center justify-center p-0 md:p-6">
      <LoginPageClient />
    </main>
  );
}
