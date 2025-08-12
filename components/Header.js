// components/Header.js
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ doctor }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    // exact match or root handling
    return router.pathname === href;
  };

  return (
    <header className="sticky top-0 z-[60] bg-black/40 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-500 flex items-center justify-center font-semibold text-white">
            MA
          </div>
          <div>
            <Link href="/" className="text-sm font-semibold hover:opacity-90">
              {doctor?.name ?? "Mualij Hospital"}
            </Link>
            <div className="text-xs text-gray-300">
              {doctor?.title ?? "Homeopathic Specialist"}
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                "px-3 py-1 rounded-md text-sm transition " +
                (isActive(l.href)
                  ? "bg-purple-700/40 text-purple-200"
                  : "text-gray-300 hover:bg-gray-800/60")
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          {/* contact quick actions */}
          {doctor?.email && (
            <a
              href={`mailto:${doctor.email}`}
              className="ml-2 text-sm text-gray-300 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Email
            </a>
          )}
          {doctor?.phone && (
            <a
              href={`tel:${doctor.phone}`}
              className="ml-2 text-sm text-gray-300 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Call
            </a>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md text-gray-200 hover:bg-gray-800/50"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu (animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t border-gray-800 bg-black/30 backdrop-blur-sm"
          >
            <nav className="px-4 py-3 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    "px-3 py-2 rounded-md text-sm transition " +
                    (isActive(l.href)
                      ? "bg-purple-700/40 text-purple-200"
                      : "text-gray-300 hover:bg-gray-800/60")
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-800 mt-2 flex gap-3">
                {doctor?.email && (
                  <a href={`mailto:${doctor.email}`} className="text-sm text-gray-300">
                    Email
                  </a>
                )}
                {doctor?.phone && (
                  <a href={`tel:${doctor.phone}`} className="text-sm text-gray-300">
                    Call
                  </a>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
