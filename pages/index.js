// 📁 pages/index.js
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctor = {
  name: "Dr. Amjad Ali",
  title: "Homeopathic Specialist & Owner",
  hospital: "Mualij Homeopathic Hospital",
  email: "rjamjadali@gmail.com",
  phone: "0314 9660574",
  tagline: "Dedicated to holistic healing and patient care",
  intro: `Dr. Amjad Ali is a trusted Homeopathic Specialist and the owner of Mualij Homeopathic Hospital. He combines years of homeopathic experience with a patient-centered approach to natural healing.`,
  services: [
    { title: "General Homeopathy", desc: "Personalized treatment for chronic and acute conditions." },
    { title: "Child Health", desc: "Gentle and effective care for infants and children." },
    { title: "Women's Health", desc: "Support for hormonal balance, menstrual issues, and more." },
    { title: "Allergy & Immunity", desc: "Boost immunity and reduce allergic reactions naturally." }
  ],
  testimonials: [
    { name: "Sadia Khan", text: "Excellent care and very attentive. Highly recommended." },
    { name: "Omar Rizwan", text: "Treated my chronic issue where others couldn't help. Very grateful." }
  ]
};

// Animations
const container = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
};
const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
      {/* Navbar */}
      <Navbar doctor={doctor} />

      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center mt-8">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-sm text-sky-600 font-semibold">Welcome</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
              {doctor.name}
            </h1>
            <p className="text-lg text-slate-600">
              {doctor.title} —{" "}
              <span className="font-semibold text-sky-700">{doctor.hospital}</span>
            </p>
            <p className="text-slate-500 max-w-xl">{doctor.tagline}</p>

            <div className="text-sm bg-sky-50 border border-sky-100 rounded-lg p-4 inline-block">
              <p className="text-slate-700">
                <strong>Email:</strong> {doctor.email}
              </p>
              <p className="text-slate-700">
                <strong>Phone:</strong> {doctor.phone}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
              <Image
                src="/doctor.jpg"
                alt="Dr. Amjad Ali"
                width={288}
                height={384}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* About */}
        <motion.section
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.h3 variants={item} className="text-2xl font-bold text-slate-800">
            About Dr. Amjad Ali
          </motion.h3>
          <motion.p variants={item} className="mt-4 text-slate-600 leading-relaxed">
            {doctor.intro}
          </motion.p>
        </motion.section>

        {/* Services & Testimonials */}
        <section className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Services */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h4 variants={item} className="text-xl font-bold text-slate-800">
              Our Treatments
            </motion.h4>
            <motion.p variants={item} className="text-slate-600">
              Providing a range of homeopathic treatments tailored to each patient’s needs.
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {doctor.services.map((s) => (
                <motion.div
                  key={s.title}
                  variants={item}
                  className="bg-sky-50 border border-sky-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h5 className="font-semibold text-slate-800">{s.title}</h5>
                  <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
          >
            <motion.h4 variants={item} className="text-xl font-bold text-slate-800">
              Patient Reviews
            </motion.h4>
            <motion.div variants={item} className="mt-4 space-y-4">
              {doctor.testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-sky-50 border border-sky-100 p-4 rounded-lg"
                >
                  <p className="text-sm text-slate-700">“{t.text}”</p>
                  <div className="mt-2 text-xs text-slate-500">— {t.name}</div>
                </div>
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
