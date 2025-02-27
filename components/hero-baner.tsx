"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/12_palm_cheese-01-scaled.jpg",
  "/images/11_skippy_mede_putih-03-scaled.jpg",
  "/images/10_choco_rocher_essential-06-scaled.jpg",
  "/images/11_putri_cheese_nut_essential-01-scaled.jpg",
];

const Carousel = () => {
  return (
    <div className="relative w-full h-[700px] mx-auto md:mt-14 mt-16">
      {/* Tombol Navigasi */}
      <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-500 text-white rounded-full p-4 z-[100] hover:bg-yellow-600 transition">
        <FaChevronLeft />
      </button>
      <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-500 text-white rounded-full p-4 z-[100] hover:bg-yellow-600 transition">
        <FaChevronRight />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #d1d5db !important; /* Default abu-abu */
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background-color: #facc15 !important; /* Kuning */
        }
      `}</style>
    </div>
  );
};

export default Carousel;
