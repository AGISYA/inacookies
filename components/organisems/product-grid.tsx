"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import Pagination from "./pagination";
import ProductCard from "./product-card";
import { Filters } from "./filter-sidebar";

type ProductGridProps = {
  filters: Filters;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const ITEMS_PER_PAGE = 12;

export default function ProductGrid({
  filters,
  currentPage,
  onPageChange,
}: ProductGridProps) {
  const [sortBy, setSortBy] = useState("name");

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (filters.Categories && filters.Categories.length > 0) {
        if (!filters.Categories.includes(product.category)) {
          return false;
        }
      }
      if (filters.Flavor && filters.Flavor.length > 0) {
        if (!product.flavor || !filters.Flavor.includes(product.flavor)) {
          return false;
        }
      }
      if (filters.Price && filters.Price.length > 0) {
        const inPriceRange = filters.Price.some((range) => {
          const finalPrice = product.discountedPrice ?? product.price; // Gunakan harga diskon jika ada

          if (range === "Under Rp50.000" && finalPrice < 50000) return true;
          if (
            range === "Rp50.000 - Rp100.000" &&
            finalPrice >= 50000 &&
            finalPrice <= 100000
          )
            return true;
          if (range === "Over Rp100.000" && finalPrice > 100000) return true;

          return false;
        });

        if (!inPriceRange) return false;
      }

      return true;
    });

    return filtered.sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }, [filters, sortBy]);

  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / ITEMS_PER_PAGE
  );
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-black">Sort by:</span>
          <Button
            className={`px-3 py-1 rounded-md transition ${
              sortBy === "name"
                ? "bg-primary text-primary-foreground"
                : "bg-gray-200 dark:bg-black text-gray-900 dark:text-white"
            }`}
            size="sm"
            onClick={() => setSortBy("name")}
          >
            Name
          </Button>
          <Button
            className={`px-3 py-1 rounded-md transition ${
              sortBy === "price"
                ? "bg-primary text-primary-foreground"
                : "bg-gray-200 dark:bg-black text-gray-900 dark:text-white"
            }`}
            size="sm"
            onClick={() => setSortBy("price")}
          >
            Price
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
