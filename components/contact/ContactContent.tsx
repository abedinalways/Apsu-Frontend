import ContactForm from './ContactForm';
import ContactImageCard from './ContactImageCard';

export default function ContactContent() {
  return (
    <section
      className="px-4  md:px-8  container
        grid
        gap-6 sm:gap-8
        grid-cols-1
        md:grid-cols-[1fr_1fr]
        md:gap-10
        items-center

      "
    >
      <ContactImageCard />

      <ContactForm />
    </section>
  );
}
