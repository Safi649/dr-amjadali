import Link from "next/link";

export default function Navbar({ doctor }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold text-primary hover:opacity-80">
          {doctor?.hospital || "Mualij Homeopathic Hospital"}
        </Link>

        {/* Links */}
        <div className="space-x-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
