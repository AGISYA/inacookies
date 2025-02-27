"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Sesuaikan agar tidak tertutup header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleHomeClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  const menuItems = [
    { name: "Home", href: "/", type: "home" },
    { name: "About", id: "about", type: "scroll" },
    { name: "Product", href: "/products", type: "link" },
    { name: "Advantages", id: "advantages", type: "scroll" },
    { name: "Contact", id: "contact", type: "scroll" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold"
            onClick={handleHomeClick}
          >
            inacookies
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-black">
              {menuItems.map((item) =>
                item.type === "link" ? (
                  <li key={item.name}>
                    <Link
                      href={item.href as string}
                      className="hover:text-yellow-400 transition-transform duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : item.type === "home" ? (
                  <li key={item.name}>
                    <button
                      onClick={handleHomeClick}
                      className="hover:text-yellow-400 transition-transform duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.id as string)}
                      className="hover:text-yellow-400 transition-transform duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            {/* Tombol WhatsApp Responsif */}
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-3 py-2 rounded-full hover:bg-green-600 transition md:px-4 md:py-2"
            >
              <FaWhatsapp className="text-2xl md:text-xl" />
              <span className="hidden sm:block">Pesan Sekarang</span>
            </Link>
            {/* Tombol Menu Mobile */}
            <button
              className="md:hidden hover:text-yellow-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="py-2">
            {menuItems.map((item) =>
              item.type === "link" ? (
                <li key={item.name}>
                  <Link
                    href={item.href as string}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400 w-full text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ) : item.type === "home" ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      handleHomeClick({
                        preventDefault: () => {},
                      } as React.MouseEvent);
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400 w-full text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ) : (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      scrollToSection(item.id as string);
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-yellow-400 w-full text-left"
                  >
                    {item.name}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
