"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Category() {
  const pathname = usePathname();

  const formatCategoryName = (name) => {
    return "category/" + name.toLowerCase();
  };

  const isActive = (name) => {
    return pathname === `/${formatCategoryName(name)}`;
  };

  return (
    <div className="flex items-center justify-between lg:block lg:w-4/12 my-10 lg:my-0 lg:mt-4 sticky top-20">
      <p className="text-xl font-bold py-2">Categories</p>
      <hr />
      <Link
        className={`hover:border-b border-black block h-9 p-2 box-border mt-4 py-2 ${
          isActive("All") ? "active" : ""
        }`}
        href={`/${formatCategoryName("All")}`}
      >
        All
      </Link>
      <Link
        className={`hover:border-b border-black block h-9 p-2 box-border mt-4 ${
          isActive("Smartphones") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Smartphones")}`}
      >
        Smartphones
      </Link>
      <Link
        className={`hover:border-b border-black block h-9 p-2 box-border mt-4 ${
          isActive("Laptops") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Laptops")}`}
      >
        Laptops
      </Link>
      <Link
        className={`hover:border-b border-black block h-9 p-2 box-border mt-4 ${
          isActive("Fragrances") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Fragrances")}`}
      >
        Fragrances
      </Link>
      <Link
        className={`hover:border-b border-black block h-9 p-2 box-border mt-4 ${
          isActive("Skincare") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Skincare")}`}
      >
        Skincare
      </Link>
      <Link
        className={`hover:border-b border-black block h-9 p-2 box-border mt-4 ${
          isActive("Groceries") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Groceries")}`}
      >
        Groceries
      </Link>
    </div>
  );
}
