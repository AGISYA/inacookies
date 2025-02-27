import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const PesanSekarang = () => {
  return (
    <div
      id="pesan-sekarang"
      className="relative py-20 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/Snapinst.app_280819163_1653013051722749_5956784710392159734_n_1080.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-white mb-6">
          Satu Ina Cookies <br /> Untuk Seribu Kebersamaan <br /> Bersama Orang
          Tercinta
        </h1>
        <Link
          href="https://wa.me/6281234567890"
          target="_blank"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="text-lg font-medium">Pesan Sekarang</span>
        </Link>
      </div>
    </div>
  );
};

export default PesanSekarang;
