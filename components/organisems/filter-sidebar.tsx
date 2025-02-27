"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accrodion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export type Filters = {
  Categories?: string[];
  Flavor?: string[];
  Price?: string[];
  Brands?: string[];
  priceMin?: number;
  priceMax?: number;
};

interface FilterSidebarProps {
  onFilterChange: (filters: Filters) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [flavorFilters, setFlavorFilters] = useState<string[]>([]);
  const [priceFilters, setPriceFilters] = useState<string[]>([]);

  const prevFilters = useRef<Filters>({});

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange({ ...priceRange, [name]: value });
  };

  const handleCategoryChange = (category: string) => {
    setCategoryFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleFlavorChange = (flavor: string) => {
    setFlavorFilters((prev) =>
      prev.includes(flavor)
        ? prev.filter((f) => f !== flavor)
        : [...prev, flavor]
    );
  };

  const handlePriceFilterChange = (price: string) => {
    setPriceFilters((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  useEffect(() => {
    const filters: Filters = {
      Categories: categoryFilters.length > 0 ? categoryFilters : undefined,
      Flavor: flavorFilters.length > 0 ? flavorFilters : undefined,
      Price: priceFilters.length > 0 ? priceFilters : undefined,
      priceMin: priceRange.min ? Number.parseFloat(priceRange.min) : undefined,
      priceMax: priceRange.max ? Number.parseFloat(priceRange.max) : undefined,
    };

    if (JSON.stringify(filters) !== JSON.stringify(prevFilters.current)) {
      onFilterChange(filters);
      prevFilters.current = filters;
    }
  }, [
    categoryFilters,
    flavorFilters,
    priceFilters,
    priceRange,
    onFilterChange,
  ]);

  const categories = ["Ina Cookies", "Kukids", "Mini Cookies", "Naslem"];
  const flavors = [
    "Chocolate",
    "Cheese",
    "Blueberry",
    "Green Tea",
    "Assorted",
    "Red Velvet",
    "Mango",
    "Cinnamon",
    "Date",
    "Peanut Butter",
    "Original",
    "Pistachio",
    "Tiramisu",
    "Chocolate Pineapple",
    "Ice Cream",
    "Cashew",
  ];
  const prices = ["Under Rp50.000", "Rp50.000 - Rp100.000", "Over Rp100.000"];

  return (
    <div className="w-64 p-6 border rounded space-y-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-3">
                <Checkbox
                  id={`category-${category}`}
                  checked={categoryFilters.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <label
                  htmlFor={`category-${category}`}
                  className="text-sm font-medium"
                >
                  {category}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="flavors">
          <AccordionTrigger>Flavors</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {flavors.map((flavor) => (
              <div key={flavor} className="flex items-center space-x-3">
                <Checkbox
                  id={`flavor-${flavor}`}
                  checked={flavorFilters.includes(flavor)}
                  onCheckedChange={() => handleFlavorChange(flavor)}
                />
                <label
                  htmlFor={`flavor-${flavor}`}
                  className="text-sm font-medium"
                >
                  {flavor}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent className="space-y-3">
            {prices.map((price) => (
              <div key={price} className="flex items-center space-x-3">
                <Checkbox
                  id={`price-${price}`}
                  checked={priceFilters.includes(price)}
                  onCheckedChange={() => handlePriceFilterChange(price)}
                />
                <label
                  htmlFor={`price-${price}`}
                  className="text-sm font-medium"
                >
                  {price}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price-range">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="flex space-x-4">
              <Input
                type="number"
                name="min"
                placeholder="Min"
                value={priceRange.min}
                onChange={handlePriceChange}
                className="p-2"
              />
              <Input
                type="number"
                name="max"
                placeholder="Max"
                value={priceRange.max}
                onChange={handlePriceChange}
                className="p-2"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterSidebar;
