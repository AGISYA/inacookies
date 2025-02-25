import Link from "next/link";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="mb-4">
              We are passionate about baking and delivering the finest quality
              products to our customers.
            </p>
            <div className="flex items-center mb-2">
              <FiMapPin className="mr-2" />
              <p>123 Bakery Street, Cityville</p>
            </div>
            <div className="flex items-center mb-2">
              <FiPhone className="mr-2" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <FiMail className="mr-2" />
              <p>info@buckerbakery.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/shop" className="hover:text-primary">
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul>
              <li className="mb-2">
                <Link href="/shop/bread" className="hover:text-primary">
                  Bread
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/shop/pastries" className="hover:text-primary">
                  Pastries
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/shop/cakes" className="hover:text-primary">
                  Cakes
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/shop/cookies" className="hover:text-primary">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/shop/seasonal" className="hover:text-primary">
                  Seasonal Specials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Bucker Bakery. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
