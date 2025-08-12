import Footer from "../components/Footer";

const doctor = {
  name: "Dr. Amjad Ali",
  title: "Homeopathic Specialist & Owner",
  hospital: "Mualij Homeopathic Hospital",
  email: "rjamjadali@gmail.com",
  phone: "0314 9660574",
};

export default function GalleryPage() {
  const images = [
    "/gallery/clinic1.jpg",
    "/gallery/clinic2.jpg",
    "/gallery/clinic3.jpg",
    "/gallery/clinic4.jpg",
  ];

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Clinic Gallery</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Clinic photo ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer doctor={doctor} />
    </>
  );
}
