import Header from "../components/Header";
import Footer from "../components/Footer";
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">About Dr. Amjad</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          Dr. Amjad is a highly experienced medical professional dedicated to providing the best possible care to his patients.
          With over 15 years of experience, he combines expertise with compassion to ensure every patient feels heard and cared for.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Our hospital is equipped with modern facilities, advanced medical technology, and a team of skilled healthcare professionals
          to deliver high-quality treatment in a comfortable environment.
        </p>
      </main>
      <Footer />
    </>
  );
}
