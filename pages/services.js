import Header from "../components/Header";
import Footer from "../components/Footer";

const doctor = {
  name: "Dr. Amjad Ali",
  title: "Homeopathic Specialist & Owner",
  hospital: "Mualij Homeopathic Hospital",
  email: "rjamjadali@gmail.com",
  phone: "0314 9660574",
};

export default function ServicesPage() {
  const services = [
    { title: "General Checkups", description: "Routine health checkups for early detection and prevention of diseases." },
    { title: "Specialist Consultations", description: "Consultations with specialists in cardiology, orthopedics, and more." },
    { title: "Diagnostic Services", description: "Modern lab testing, X-rays, and ultrasound for accurate diagnosis." },
    { title: "Emergency Care", description: "24/7 emergency services for urgent medical needs." },
  ];

  return (
    <>
      <Header doctor={doctor} />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer doctor={doctor} />
    </>
  );
}
