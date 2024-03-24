import Products from "../data/products.json";

export const getCategoryProducts = (category) => {
  const CategoryProducts = Products.filter(
    (categoryProduct) => categoryProduct.category === category
  );
  return CategoryProducts;
};

export const getProducts = () => {
  return Products;
};

export const getProduct = (id) => {
  const product = Products.find((p) => p.id == id);
  return product;
};
