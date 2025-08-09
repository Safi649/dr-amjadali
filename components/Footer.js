// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} Mualij Homeopathic Hospital</p>
        <p>Email: <a href="mailto:rjamjadali@gmail.com" className="underline">rjamjadali@gmail.com</a></p>
        <p>Phone: <a href="tel:+923149660574" className="underline">0314 966 0574</a></p>
      </div>
    </footer>
  );
}
