"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import FilterSidebar, { Filters } from "@/components/organisems/filter-sidebar";
import Newsletter from "@/components/organisems/newsletter";
import ProductGrid from "@/components/organisems/product-grid";
import ProductShowcase from "@/components/product-showcase";
import { useState } from "react";

export default function ShopPage() {
  const [filters, setFilters] = useState<Filters>({});
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex bg-white text-black flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar onFilterChange={handleFilterChange} />
          <div className="flex-1 ">
            <ProductGrid
              filters={filters}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />{" "}
            <ProductShowcase />
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}
