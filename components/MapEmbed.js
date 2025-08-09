// components/MapEmbed.js
export default function MapEmbed() {
  return (
    <div className="w-full h-64 mt-8">
      <iframe
        title="Mualij Homeopathic Hospital Location"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
