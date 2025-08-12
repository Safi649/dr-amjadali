// 📁 pages/index.js
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const doctor = {
  name: "Dr. Amjad Ali",
  title: "Homeopathic Specialist & Owner",
  hospital: "Mualij Homeopathic Hospital",
  email: "rjamjadali@gmail.com",
  phone: "0314 9660574",
  tagline: "Dedicated to holistic healing and patient care — 20+ years of experience",
  intro: `Dr. Amjad Ali is a trusted Homeopathic Specialist and the owner of Mualij Homeopathic Hospital. With over 20 years of homeopathic experience, he combines expertise with a patient-centered approach to natural healing.`,
  services: [
    { title: "General Homeopathy", desc: "Personalized homeopathic treatment for chronic and acute conditions." },
    { title: "Child Health", desc: "Gentle and effective care tailored for infants and children." },
    { title: "Women's Health", desc: "Support for hormonal balance, menstrual issues, and more." },
    { title: "Allergy & Immunity", desc: "Homeopathic strategies to strengthen immunity and reduce allergic reactions." }
  ],
  testimonials: [
    { name: "Sadia Khan", text: "Excellent care and very attentive. Highly recommended." },
    { name: "Omar Rizwan", text: "Treated my chronic issue where others couldn't help. Very grateful." },
    { name: "Ayaz Khan", text: "I had a serious kidney injury. Dr. Amjad's treatment helped me recover fully." }
  ]
};

const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } }
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center mt-6">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm text-purple-400 font-medium">Welcome</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              {doctor.name}
            </h2>
            <p className="text-xl text-gray-300">
              {doctor.title} — <span className="font-medium text-indigo-300">{doctor.hospital}</span>
            </p>
            <p className="text-gray-400 max-w-xl">{doctor.tagline}</p>

            <div className="text-sm space-y-1">
              <p className="text-gray-300"><strong>Email:</strong> {doctor.email}</p>
              <p className="text-gray-300"><strong>Phone:</strong> {doctor.phone}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-purple-500"
            >
              <Image
                src="/doctor.jpg"
                alt="Dr. Amjad Ali"
                width={288}
                height={384}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About */}
        <motion.section
          className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700"
          initial="hidden" animate="show" variants={container}
        >
          <motion.h3 variants={item} className="text-2xl font-semibold text-pink-400">
            About Dr. Amjad Ali
          </motion.h3>
          <motion.p variants={item} className="mt-4 text-gray-300 max-w-3xl">
            {doctor.intro}
          </motion.p>
        </motion.section>

        {/* Services */}
        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <motion.div className="space-y-4" initial="hidden" animate="show" variants={container}>
            <motion.h4 variants={item} className="text-xl font-semibold text-indigo-400">
              Our Treatments
            </motion.h4>
            <motion.p variants={item} className="text-gray-400">
              Providing a range of homeopathic treatments tailored to each patient’s needs.
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {doctor.services.map((s) => (
                <motion.div
                  key={s.title}
                  variants={item}
                  className="bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 hover:shadow-lg hover:bg-gray-700 transition-all"
                >
                  <h5 className="font-medium text-purple-300">{s.title}</h5>
                  <p className="text-sm text-gray-400 mt-2">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700"
          >
            <motion.h4 variants={item} className="text-xl font-semibold text-pink-400">
              Patient Reviews
            </motion.h4>
            <motion.div variants={item} className="mt-4 space-y-4">
              {doctor.testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-700 p-4 rounded-lg"
                >
                  <p className="text-sm text-gray-300">“{t.text}”</p>
                  <div className="mt-2 text-xs text-indigo-300">— {t.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer doctor={doctor} />
    </div>
  );
}
