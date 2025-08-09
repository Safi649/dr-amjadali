// components/Services.js
export default function Services() {
  const services = [
    "Chronic Illness Treatment",
    "Skin & Allergy Care",
    "Digestive System Disorders",
    "Children’s Health",
    "Women's Health",
    "General Wellness"
  ];

  return (
    <section id="services" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Our Services</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <li key={index} className="bg-green-100 p-4 rounded shadow hover:bg-green-200">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
