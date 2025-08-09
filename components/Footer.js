export default function Footer({ doctor }) {
  return (
    <footer className="border-t py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div>
          <strong className="block">{doctor.name}</strong>
          <span className="text-sm text-gray-600">
            {doctor.title} — {doctor.hospital}
          </span>
        </div>
        <div className="text-sm text-gray-600 text-right">
          <div>Email: {doctor.email}</div>
          <div>Phone: {doctor.phone}</div>
        </div>
      </div>
    </footer>
  );
}
