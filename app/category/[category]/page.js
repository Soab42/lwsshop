"use client";
import ProductsCard from "@/components/products/ProductsCard";
import { useCategoryProducts } from "@/hooks";

export default function CategoryProducts() {
  const CategoryProducts = useCategoryProducts();
  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {CategoryProducts.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}
