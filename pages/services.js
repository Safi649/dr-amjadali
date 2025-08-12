import Footer from "../components/Footer";
import { motion } from "framer-motion";

const doctor = {
  name: "Dr. Amjad Ali",
  title: "Homeopathic Specialist & Owner",
  hospital: "Mualij Homeopathic Hospital",
  email: "rjamjadali@gmail.com",
  phone: "0314 9660574",
};

export default function ServicesPage() {
  const services = [
    {
      title: "General Checkups",
      description:
        "Routine health checkups for early detection and prevention of diseases.",
    },
    {
      title: "Specialist Consultations",
      description:
        "Consultations with specialists in cardiology, orthopedics, and more.",
    },
    {
      title: "Diagnostic Services",
      description:
        "Modern lab testing, X-rays, and ultrasound for accurate diagnosis.",
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency services for urgent medical needs.",
    },
  ];

  return (
    <>
      <main className="bg-gray-900 text-white min-h-screen py-16 px-4">
        {/* Page Title */}
        <motion.h1
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        {/* Service Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg border border-purple-500 hover:shadow-purple-500/50 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-semibold mb-2 text-purple-400">
                {service.title}
              </h2>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer doctor={doctor} />
    </>
  );
}
