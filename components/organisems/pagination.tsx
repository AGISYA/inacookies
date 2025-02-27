import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex bg-white justify-center items-center space-x-2 my-8 p-2">
      {/* Tombol Previous */}
      <Button
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md transition focus:ring-0 focus:outline-none ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed bg-gray-200"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        <ChevronLeft size={20} />
      </Button>

      {/* Tombol Angka */}
      <div className="hidden sm:flex space-x-1">
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`px-4 py-2 rounded-md transition font-medium ${
              currentPage === index + 1
                ? "bg-primary text-yellow-400 shadow-md"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      {/* Versi Mobile */}
      <div className="sm:hidden text-sm font-medium">
        Page {currentPage} of {totalPages}
      </div>

      {/* Tombol Next */}
      <Button
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md transition ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed bg-gray-200"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        <ChevronRight size={20} />
      </Button>
    </div>
  );
}
