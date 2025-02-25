import type React from "react";
import Image from "next/image";

const advantages = [
  {
    icon: "/images/2.png",
    title: "Kualitas Terjamin",
    description: "Bahan berkualitas tinggi dan proses produksi yang higienis",
  },
  {
    icon: "/images/3.png",
    title: "Resep Autentik",
    description:
      "Resep tradisional yang telah disempurnakan selama bertahun-tahun",
  },
  {
    icon: "/images/Desain tanpa judul (7).png",
    title: "Kepuasan Pelanggan",
    description: "Ribuan pelanggan puas dengan kelezatan produk kami",
  },
];

const AdvantagesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Keunggulan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  width={80} // Ukuran ikon diperbesar
                  height={80} // Ukuran ikon diperbesar
                  className="w-28 h-28" // Alternatif menggunakan Tailwind
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
