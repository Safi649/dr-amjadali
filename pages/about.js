import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-800 to-indigo-800">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We are dedicated to providing exceptional healthcare services with
          compassion and professionalism.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            Our mission is to ensure that every patient receives personalized
            care in a comfortable and friendly environment. We combine
            cutting-edge technology with expert medical knowledge to bring you
            the best healthcare possible.
          </p>
        </motion.div>
        <motion.img
          src="/doctor.jpg"
          alt="Our Doctor"
          className="rounded-lg shadow-lg border-4 border-purple-500 max-w-sm w-full mx-auto object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-800 to-purple-800 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Compassion",
              desc: "We treat every patient with kindness and understanding.",
            },
            {
              title: "Excellence",
              desc: "We strive to deliver top-quality healthcare services.",
            },
            {
              title: "Innovation",
              desc: "We embrace modern technology to improve patient care.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
