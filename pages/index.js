import Image from "next/image";
import { motion } from "framer-motion";
import { app, analytics } from "../firebase/firebaseConfig";
const doctor = {
  name: "Dr. Amjad Ali",
  title: "Homeopathic Specialist & Owner",
  hospital: "Mualij Homeopathic Hospital",
  email: "rjamjadali@gmail.com",
  phone: "0314 9660574",
  tagline: "Dedicated to holistic healing and patient care",
  intro: `Dr. Amjad Ali is a trusted Homeopathic Specialist and the owner of Mualij Homeopathic Hospital. He combines years of homeopathic experience with a patient-centered approach to natural healing.`,
  services: [
    { title: "General Homeopathy", desc: "Personalized homeopathic treatment for chronic and acute conditions." },
    { title: "Child Health", desc: "Gentle and effective care tailored for infants and children." },
    { title: "Women's Health", desc: "Support for hormonal balance, menstrual issues, and more." },
    { title: "Allergy & Immunity", desc: "Homeopathic strategies to strengthen immunity and reduce allergic reactions." }
  ],
  testimonials: [
    { name: "Sadia Khan", text: "Excellent care and very attentive. Highly recommended." },
    { name: "Omar Rizwan", text: "Treated my chronic issue where others couldn't help. Very grateful." }
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
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">MA</div>
          <div>
            <h1 className="text-lg font-semibold">Dr. Amjad Ali</h1>
            <p className="text-sm text-gray-500">Homeopathic Specialist & Owner</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Mualij Homeopathic Hospital</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center mt-6">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm text-primary font-medium">Welcome</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {doctor.name}
            </h2>
            <p className="text-xl text-gray-700">{doctor.title} — <span className="font-medium">{doctor.hospital}</span></p>
            <p className="text-gray-600 max-w-xl">{doctor.tagline}</p>

            <div className="flex gap-4 items-center">
              <div className="text-sm">
                <p className="text-gray-700"><strong>Email:</strong> {doctor.email}</p>
                <p className="text-gray-700"><strong>Phone:</strong> {doctor.phone}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            {/* Placeholder image — replace with clinic/doctor image later */}
            <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-primary/20 to-sky-50 flex items-center justify-center card-shadow">
              <div className="text-center px-4">
                <div className="w-32 h-32 rounded-full bg-white/70 mx-auto mb-3 flex items-center justify-center text-2xl font-semibold text-primary">AA</div>
                <p className="text-sm text-gray-700">Owner & Specialist</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <motion.section className="mt-16 bg-white rounded-2xl p-8 card-shadow"
          initial="hidden" animate="show" variants={container}
        >
          <motion.h3 variants={item} className="text-2xl font-semibold">About Dr. Amjad Ali</motion.h3>
          <motion.p variants={item} className="mt-4 text-gray-700 max-w-3xl">{doctor.intro}</motion.p>
        </motion.section>

        {/* Services */}
        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <motion.div className="space-y-4" initial="hidden" animate="show" variants={container}>
            <motion.h4 variants={item} className="text-xl font-semibold">Our Treatments</motion.h4>
            <motion.p variants={item} className="text-gray-600">Providing a range of homeopathic treatments tailored to each patient’s needs.</motion.p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {doctor.services.map((s) => (
                <motion.div key={s.title} variants={item} className="bg-white p-4 rounded-xl card-shadow">
                  <h5 className="font-medium">{s.title}</h5>
                  <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div initial="hidden" animate="show" variants={container} className="bg-white rounded-2xl p-6 card-shadow">
            <motion.h4 variants={item} className="text-xl font-semibold">Patient Reviews</motion.h4>
            <motion.div variants={item} className="mt-4 space-y-4">
              {doctor.testimonials.map((t, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">“{t.text}”</p>
                  <div className="mt-2 text-xs text-gray-500">— {t.name}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Gallery / Optional */}
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">Clinic & Environment</h4>
            <p className="text-sm text-gray-500">Photos (optional)</p>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="h-28 rounded-lg bg-slate-100" />
            <div className="h-28 rounded-lg bg-slate-100" />
            <div className="h-28 rounded-lg bg-slate-100" />
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div>
            <strong className="block">{doctor.name}</strong>
            <span className="text-sm text-gray-600">{doctor.title} — {doctor.hospital}</span>
          </div>
          <div className="text-sm text-gray-600 text-right">
            <div>Email: {doctor.email}</div>
            <div>Phone: {doctor.phone}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

