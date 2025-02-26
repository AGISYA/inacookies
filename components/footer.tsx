"use client";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">INACOOKIES 24 JAM</h2>
        <p className="text-sm text-gray-300 mt-2 max-w-md mx-auto">
          Hubungi kami untuk informasi lebih lanjut!
        </p>

        {/* Navigasi Footer */}
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            {[
              { name: "Home", id: "hero" },
              { name: "Packages", id: "shop" },
              { name: "About Us", id: "about" },
              { name: "Contact Us", id: "contact" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-primary transition-transform duration-200"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ikuti Kami */}
        <div className="mt-6">
          <p className="text-gray-400 text-sm">Ikuti Kami</p>
          <div className="flex justify-center mt-3 space-x-4">
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="text-xl hover:text-primary transition duration-300" />
            </Link>
            <Link href="https://www.tiktok.com" target="_blank">
              <FaTiktok className="text-xl hover:text-primary transition duration-300" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebookF className="text-xl hover:text-primary transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
