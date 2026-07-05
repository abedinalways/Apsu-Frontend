import ContactForm from './ContactForm';
import ContactImageCard from './ContactImageCard';

export default function ContactContent() {
  return (
    <section
      className="px-10
        grid
        gap-8
        grid-cols-1
        lg:grid-cols-[520px_minmax(0,1fr)]
        xl:gap-10
      "
    >
      <ContactImageCard />

      <ContactForm />
    </section>
  );
}
