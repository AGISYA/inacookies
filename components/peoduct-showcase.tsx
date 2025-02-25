"use client";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Kue Kering Putri Salju Keju",
    price: 135000,
    image: "/images/4_sku_allvariant-38.webp",
    hoverImage: "/images/4_sku_allvariant-39.webp",
  },
  {
    id: 2,
    name: "Kukis Almond Cheese Chocolate",
    price: 135000,
    image: "/images/4_sku_allvariant-01.webp",
    hoverImage: "/images/4_sku_allvariant-02-1.webp",
  },
  {
    id: 3,
    name: "Kukis Cheese Kress",
    price: 135000,
    image: "/images/4_sku_allvariant-05.webp",
    hoverImage: "/images/4_sku_allvariant-06.webp",
  },
  {
    id: 4,
    name: "Kukis Milky Nastar",
    price: 135000,
    image: "/images/4_sku_allvariant-22.webp",
    hoverImage: "/images/4_sku_allvariant-23.webp",
  },
  {
    id: 5,
    name: "Kukis Nastar Keju",
    price: 135000,
    image: "/images/4_sku_allvariant-05.webp",
    hoverImage: "/images/4_sku_allvariant-06.webp",
  },
  {
    id: 6,
    name: "Kaastengels Mocaf",
    price: 135000,
    image: "/images/30_SKU_IC_lebaran-43.webp",
    hoverImage: "/images/30_SKU_IC_lebaran-44.webp",
  },
  {
    id: 7,
    name: "Kaastengels",
    price: 135000,
    image: "/images/4_sku_allvariant-11.webp",
    hoverImage: "/images/4_sku_allvariant-12.webp",
  },
  {
    id: 8,
    name: "Putri Cheese Nut",
    price: 135000,
    image: "/images/30_SKU_IC_lebaran-09.webp",
    hoverImage: "/images/30_SKU_IC_lebaran-10.webp",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-8 bg-white text-black">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <h2 className="text-3xl font-bold text-center mb-4">
          Rekomendasi Produk
        </h2>
        <div className="flex justify-center mb-4 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-3xl mx-1" />
          ))}
        </div>

        <div className="relative">
          <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-4 sm:p-5 text-lg sm:text-xl z-10 hover:bg-black/50 transition">
            <FaChevronLeft />
          </button>
          <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-4 sm:p-5 text-lg sm:text-xl z-10 hover:bg-black/50 transition">
            <FaChevronRight />
          </button>

          <Swiper
            spaceBetween={15}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              320: { slidesPerView: 2 }, // HP kecil (2 produk per slide)
              480: { slidesPerView: 2 }, // HP besar (2 produk per slide)
              768: { slidesPerView: 3 }, // Tablet (3 produk per slide)
              1024: { slidesPerView: 4 }, // Desktop (4 produk per slide)
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-md shadow-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? product.hoverImage : product.image}
        alt={product.name}
        className="w-full h-52 sm:h-60 md:h-72 lg:h-80 object-cover transition-all duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-3">
        <h3 className="text-sm sm:text-base font-semibold">{product.name}</h3>
        <p className="text-gray-300 text-xs sm:text-sm">
          Rp{product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
