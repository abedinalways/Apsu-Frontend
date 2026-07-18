import ContactForm from './ContactForm';
import ContactImageCard from './ContactImageCard';

export default function ContactContent() {
  return (
    <section
      className="px-4  lg:px-8  container
        grid
        gap-6 sm:gap-8
        grid-cols-1
        lg:grid-cols-[1fr_1fr]
        lg:gap-10
        items-center

      "
    >
      <ContactImageCard />

      <ContactForm />
    </section>
  );
}
