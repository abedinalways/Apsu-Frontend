import ContactForm from './ContactForm';
import ContactImageCard from './ContactImageCard';

export default function ContactContent() {
  return (
    <section
      className="px-4 sm:px-6 md:px-8 lg:px-10
        grid
        gap-6 sm:gap-8
        grid-cols-1
        lg:grid-cols-[1fr_1fr]
        xl:grid-cols-[520px_1fr]
        xl:gap-10
      "
    >
      <ContactImageCard />

      <ContactForm />
    </section>
  );
}
