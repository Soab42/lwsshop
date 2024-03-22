"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { usePathname } from "next/navigation";
import React from "react";

export default function Category() {
  const pathname = usePathname();

  // Function to convert category name to lowercase and replace spaces with dashes
  const formatCategoryName = (name) => {
    return "category/" + name.toLowerCase().replace(/\s+/g, "-");
  };

  // Function to determine if a link should be active
  const isActive = (name) => {
    // console.log(pathname);
    return pathname === `/${formatCategoryName(name)}`;
    // return true;
  };

  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <Link
        className={`hover:border-b border-black block h-6 box-border mt-4 ${
          isActive("All") ? "active" : ""
        }`}
        href={`/${formatCategoryName("All")}`}
      >
        All
      </Link>
      <Link
        className={`hover:border-b border-black block h-6 box-border mt-5 ${
          isActive("Smartphones") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Smartphones")}`}
      >
        Smartphones
      </Link>
      <Link
        className={`hover:border-b border-black block h-6 box-border mt-5 ${
          isActive("Laptops") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Laptops")}`}
      >
        Laptops
      </Link>
      <Link
        className={`hover:border-b border-black block h-6 box-border mt-5 ${
          isActive("Fragrances") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Fragrances")}`}
      >
        Fragrances
      </Link>
      <Link
        className={`hover:border-b border-black block h-6 box-border mt-5 ${
          isActive("Skincare") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Skincare")}`}
      >
        Skincare
      </Link>
      <Link
        className={`hover:border-b border-black block h-6 box-border mt-5 ${
          isActive("Groceries") ? "active" : ""
        }`}
        href={`/${formatCategoryName("Groceries")}`}
      >
        Groceries
      </Link>
    </div>
  );
}
