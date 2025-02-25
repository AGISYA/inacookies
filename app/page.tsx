import AboutUs from "@/components/about";
import Booking from "@/components/booking";
import AdvantagesSection from "@/components/featured";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroBanner from "@/components/hero-baner";
import ImageSection from "@/components/images-section";
import ProductShowcase from "@/components/peoduct-showcase";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <section id="hero">
        <HeroBanner />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="shop">
        <ProductShowcase />
      </section>
      <section id="advantages">
        <AdvantagesSection />
      </section>
      <section id="booking">
        <Booking />
      </section>
      <section id="images">
        <ImageSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
