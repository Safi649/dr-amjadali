import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg max-w-2xl text-gray-300"
        >
          Welcome to our clinic! We are committed to providing exceptional healthcare services with compassion and care. Our mission is to bring smiles, wellness, and comfort to our patients.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/doctor.jpg"
            alt="Our Doctor"
            className="rounded-lg shadow-lg border-4 border-purple-500"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to provide world-class medical care in a welcoming environment. We combine advanced technology with personalized treatment to ensure every patient feels valued and cared for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-pink-400"
          >
            Our Core Values
          </motion.h2>
          <motion.div
            className="mt-8 grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              { title: "Compassion", desc: "We treat our patients like family, with warmth and empathy." },
              { title: "Excellence", desc: "We strive for the highest standards in medical care." },
              { title: "Integrity", desc: "We uphold transparency and honesty in every service we provide." },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-purple-500 transition"
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              >
                <h3 className="text-xl font-bold text-purple-300 mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
