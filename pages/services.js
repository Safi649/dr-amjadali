import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaStethoscope, FaUserMd, FaVials, FaAmbulance } from "react-icons/fa";

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
      icon: <FaStethoscope className="text-purple-400 text-4xl mb-4" />,
    },
    {
      title: "Specialist Consultations",
      description:
        "Consultations with specialists in cardiology, orthopedics, and more.",
      icon: <FaUserMd className="text-purple-400 text-4xl mb-4" />,
    },
    {
      title: "Diagnostic Services",
      description:
        "Modern lab testing, X-rays, and ultrasound for accurate diagnosis.",
      icon: <FaVials className="text-purple-400 text-4xl mb-4" />,
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency services for urgent medical needs.",
      icon: <FaAmbulance className="text-purple-400 text-4xl mb-4" />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <main className="relative bg-gray-900 text-white min-h-screen py-16 px-4 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-900 to-indigo-900/30 animate-gradient"></div>

        {/* Page Title */}
        <motion.h1
          className="relative text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        {/* Animated Intro */}
        <motion.p
          className="relative max-w-2xl mx-auto text-center text-gray-300 mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At <span className="text-purple-400 font-semibold">Mualij Homeopathic Hospital</span>, 
          we combine experience, compassion, and advanced diagnostic tools to give you the 
          best possible care.
        </motion.p>

        {/* Service Cards with Glow Animation */}
        <motion.div
          className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card p-6 bg-gray-800 rounded-lg shadow-lg border border-purple-500 transition"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h2 className="text-2xl font-semibold mb-2 text-purple-400">
                {service.title}
              </h2>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer doctor={doctor} />

      {/* Glow Animation Styles */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.5); }
          50% { box-shadow: 0 0 25px rgba(168, 85, 247, 0.9), 0 0 50px rgba(168, 85, 247, 0.7); }
          100% { box-shadow: 0 0 5px rgba(168, 85, 247, 0.5); }
        }

        .service-card:hover {
          animation: glow 1.5s ease-in-out infinite;
          border-color: #a855f7;
        }
      `}</style>
    </>
  );
}
