export default function Navbar({ doctor }) {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
          {doctor.name.split(" ").map(w => w[0]).join("")}
        </div>
        <div>
          <h1 className="text-lg font-semibold">{doctor.name}</h1>
          <p className="text-sm text-gray-500">{doctor.title}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">{doctor.hospital}</p>
      </div>
    </header>
  );
}
