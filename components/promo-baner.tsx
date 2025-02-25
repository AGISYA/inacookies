import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offer</h2>
        <p className="text-xl mb-8">Get 20% off on all products this week!</p>
        <Link
          href="/shop"
          className="bg-white text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
