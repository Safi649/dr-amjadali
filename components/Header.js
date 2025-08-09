// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mualij Homeopathic Hospital</h1>
        <nav className="space-x-6 hidden md:block">
          <Link href="#hero" className="hover:text-yellow-300">Home</Link>
          <Link href="#about" className="hover:text-yellow-300">About</Link>
          <Link href="#services" className="hover:text-yellow-300">Services</Link>
          <Link href="#contact" className="hover:text-yellow-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
