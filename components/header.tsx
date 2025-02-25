"use client";
import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const menuItems = [
    { name: "Home", id: "hero", type: "scroll" },
    { name: "About", id: "about", type: "scroll" },
    { name: "Product", href: "/Product", type: "link" },
    { name: "Advantages", id: "advantages", type: "scroll" },
    { name: "Contact", id: "contact", type: "scroll" },
  ];

  return (
    <header className="bg-white text-black fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            inacookies
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {menuItems.map((item) =>
                item.type === "link" ? (
                  <li key={item.name}>
                    <Link
                      href={item.href as string}
                      className="hover:text-primary transition-transform duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.id as string)}
                      className="hover:text-primary transition-transform duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button>
              <FiSearch />
            </button>
            <Link href="/wishlist">
              <FiHeart />
            </Link>
            <Link href="/cart" className="relative">
              <FiShoppingBag />
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                2
              </span>
            </Link>
            <button
              className="md:hidden"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="py-2">
            {menuItems.map((item) =>
              item.type === "link" ? (
                <li key={item.name}>
                  <Link
                    href={item.href as string}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ) : (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      scrollToSection(item.id as string);
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
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
