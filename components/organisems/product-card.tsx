"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    // Here you would typically dispatch an action to add the item to the cart
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${
        isWishlisted ? "removed from" : "added to"
      } your wishlist.`,
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={350}
          height={350}
          className="w-full h-auto"
        />
        <div className="absolute bottom-2 right-2 flex gap-2">
          <Button size="icon" variant="secondary" onClick={handleAddToCart}>
            <ShoppingCart size={20} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={handleToggleWishlist}
          >
            <Heart size={20} className={isWishlisted ? "fill-primary" : ""} />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="secondary">
                <Eye size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white text-black">
              <DialogHeader>
                <DialogTitle>{product.name}</DialogTitle>
                <DialogDescription>
                  <div className="flex bg-white text-black flex-col md:flex-row gap-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={350}
                      height={350}
                      className="w-full md:w-1/2 h-auto"
                    />
                    <div className="md:mt-10">
                      <p className="text-lg font-bold mb-2">
                        Rp {product.price.toLocaleString()}
                      </p>
                      <p className="mb-2">Category: {product.category}</p>
                      <p className="mb-2">Flavor: {product.flavor}</p>
                      <Button onClick={handleAddToCart}>Add to Cart</Button>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
        <p className="text-primary font-bold">
          Rp {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
