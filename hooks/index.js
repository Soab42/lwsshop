import { useParams } from "next/navigation";
import Products from "../data/products.json";
export const useProducts = () => {
  return Products;
};

export const useProduct = () => {
  const params = useParams();
  const product = Products.find((p) => p.id == params.id);
  return product;
};

export const useCategoryProducts = () => {
  const params = useParams();
  const CategoryProducts = Products.filter(
    (category) => category.category === params.category
  );
  return CategoryProducts;
};
