"use client";
import { useProduct } from "@/hooks";

import ProductCarousel from "@/components/products/ProductCarousel";
import ProductDetails from "@/components/products/ProductDetails";

export default function ProductsDetails() {
  const product = useProduct();

  return (
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <ProductCarousel product={product} />
        <ProductDetails product={product} />
      </div>
    </section>
  );
}
