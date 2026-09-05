

export default function LoginHero() {
  return (
    <div className="w-full flex items-center justify-center  font-[Work_Sans] min-h-screen bg-[url('/images/login.png')] bg-cover bg-center bg-no-repeat">
      {/* Content */}
      <div className="relative z-10 max-w-lg text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-center">
          Care that follows you, in the language you live in.
        </h1>
        <p className="text-base sm:text-lg text-gray-200 mb-8">
          Personalized treatments for weight loss, birth control, and sleep —
          delivered to your door.
        </p>
      </div>
    </div>
  );
}
