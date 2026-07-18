import LoginForm from "./LoginForm";
import LoginHero from "./LoginHero";


export default function LoginContent() {
  return (
    <section className="w-full rounded-2xl md:flex items-center">
      <LoginHero />
      <LoginForm />
    </section>
  );
}
