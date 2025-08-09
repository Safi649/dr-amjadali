import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <MapEmbed />
        </div>
      </main>
      <Footer />
    </>
  );
}
