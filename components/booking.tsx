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
        <a
          href="https://wa.me/081234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-red-600 text-lg text-white py-3 px-12 rounded-full uppercase font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-red-500">
            Pesan Sekarang
          </button>
        </a>
      </div>
    </div>
  );
};

export default PesanSekarang;
