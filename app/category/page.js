import ProductsCard from "@/components/products/ProductsCard";
import { getProducts } from "@/utils";

export default function CategoryProducts() {
  const allProducts = getProducts();
  if (allProducts.length === 0)
    return (
      <div className="flex-center h-36 text-3xl text-rose-900">
        Products is Empty!
      </div>
    );
  return (
    <div className=" w-full lg:w-full grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {allProducts.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}
