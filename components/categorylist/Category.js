"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Products from "../../data/products.json";
import { useEffect, useState } from "react";
export default function Category() {
  const [categories, setCategories] = useState([]);
  const pathname = usePathname();
  const formatCategoryName = (name) => {
    return "category/" + name.toLowerCase();
  };

  const isActive = (name) => {
    return pathname === `/${formatCategoryName(name)}`;
  };

  useEffect(() => {
    const categorySet = new Set();
    Products.forEach((product) => {
      categorySet.add(product.category);
    });

    // Convert Set back to an array
    const categoryArray = Array.from(categorySet);

    setCategories(categoryArray);
  }, []);

  return (
    <div className="flex items-center justify-between lg:block lg:w-4/12 my-10 lg:my-0 lg:mt-4 sticky top-20">
      <p className="text-xl font-bold py-2">Categories</p>
      <hr />

      <Link
        className={`hover:border-b border-black block h-9 p-2 box-border mt-4 duration-500 py-2 ${
          pathname === "/category" ? "active" : ""
        }`}
        href={"/category"}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          className={`hover:border-b border-black block h-9 p-2 box-border mt-4 duration-500 ${
            isActive(category) ? "active" : ""
          }`}
          href={`/${formatCategoryName(category)}`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
