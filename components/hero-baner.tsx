"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
    <div className="w-full h-[700px] mx-auto">
      {" "}
      {/* Ubah tinggi sesuai kebutuhan */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
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
    </div>
  );
};

export default Carousel;
