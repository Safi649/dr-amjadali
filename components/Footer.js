export default function Footer({ doctor }) {
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <div>
          &copy; {new Date().getFullYear()} {doctor?.hospital}. All rights reserved.
        </div>
        <div className="mt-2 sm:mt-0">
          Contact: {doctor?.phone} | {doctor?.email}
        </div>
      </div>
    </footer>
  );
}

