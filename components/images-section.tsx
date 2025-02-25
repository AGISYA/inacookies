import Image from "next/image";

const ImageSection = () => {
  const images = [
    "/images/11_putri_cheese_nut_essential-04-scaled.jpg",
    "/images/11_putri_cheese_nut_essential-01-scaled.jpg",
    "/images/10_choco_rocher_essential-06-scaled.jpg",
    "/images/10_choco_rocher_essential-03-scaled.jpg",
    "/images/11_skippy_mede_putih-03-scaled.jpg",
    "/images/11_skippy_mede_putih-04-scaled.jpg",
    "/images/12_palm_cheese-01-scaled.jpg",
    "/images/12_palm_cheese-02-scaled.jpg",
  ];

  return (
    <section className="py-10 bg-white text-black px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;
