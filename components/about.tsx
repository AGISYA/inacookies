const AboutUs = () => {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-about.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl mx-auto bg-black/40 p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-2 drop-shadow-lg">
            Kue Kering Handmade
          </h1>
          <h2 className="text-xl text-gray-300 mb-3 drop-shadow-lg">
            Paling Populer Sejak 1992
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-300 drop-shadow-md">
            Ina Cookies dibuat dengan tangan terampil, menggunakan bahan-bahan
            terbaik dan berkualitas.
          </p>
        </div>

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex justify-center">
            {/* Teks */}
            <div className="text-center max-w-2xl bg-black/40 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 drop-shadow-lg">
                Sejak 1992
              </h3>
              <p className="mb-6 leading-relaxed text-gray-300 drop-shadow-md">
                Lebih dari 32 tahun menghadirkan kue kering berkualitas dengan
                jaringan distribusi terbesar di Indonesia.
              </p>

              <h3 className="text-2xl font-semibold mb-4 drop-shadow-lg">
                Inovasi Berkelanjutan
              </h3>
              <p className="leading-relaxed text-gray-300 drop-shadow-md">
                Kami menetapkan tren kue kering modern dengan standar Halal dan
                izin edar resmi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
