import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Welcome to Dr. Amjad’s Clinic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 max-w-2xl text-lg text-gray-300"
          >
            Providing world-class healthcare services with compassion, care, and advanced technology.
          </motion.p>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-pink-500/50 transition-all"
          >
            Explore Services
          </motion.a>
        </section>

        {/* Services Section */}
        <section id="services" className="px-6 py-20 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gradient"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "General Checkups", desc: "Routine health checkups to keep you healthy." },
              { title: "Specialist Consultations", desc: "Meet top specialists for expert advice." },
              { title: "Diagnostics", desc: "Advanced lab, X-ray, and ultrasound services." },
              { title: "Emergency Care", desc: "24/7 emergency medical assistance." }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-pink-500 transition-all"
              >
                <h3 className="text-2xl font-semibold text-pink-400 mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-8"
          >
            About Dr. Amjad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-gray-300 text-lg"
          >
            With over 15 years of experience in healthcare, Dr. Amjad combines medical expertise
            with compassion to provide top-quality treatment in a modern, comfortable environment.
          </motion.p>
        </section>

        {/* Gallery Section */}
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Clinic Gallery
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={`/gallery/clinic${(i % 4) + 1}.jpg`}
                  alt={`Clinic photo ${i}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
