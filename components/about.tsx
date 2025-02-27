import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Kue Kering Handmade
        </h2>
        <p className="text-lg text-gray-600 mb-6">Paling Populer Sejak 1992</p>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Ina Cookies dibuat dengan tangan terampil, menggunakan bahan-bahan
          terbaik dan berkualitas.
        </p>
        <img
          src="/images/id-11134210-7rasj-m2rk8abyfe1h7b (1).webp"
          alt="Ina Cookies"
          className="mx-auto rounded-lg shadow-lg mb-8 w-full md:w-1/2"
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="/images/id-11134210-7rasi-m2rk8abyfdtv88.webp"
              alt="Sejarah Ina Cookies"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Sejak 1992
            </h3>
            <p className="text-gray-600">
              Lebih dari 32 tahun menghadirkan kue kering berkualitas dengan
              jaringan distribusi terbesar di Indonesia.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="/images/id-11134210-7rash-m4qv5j83onju24.webp"
              alt="Inovasi Berkelanjutan"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Inovasi Berkelanjutan
            </h3>
            <p className="text-gray-600">
              Kami menetapkan tren kue kering modern dengan standar Halal dan
              izin edar resmi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
