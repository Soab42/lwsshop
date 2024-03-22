import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import React from "react";

export default function ProductPrice({ product }) {
  return (
    <div>
      <p className="my-3">
        <span className="text-rose-600 opacity-60 line-through">
          ${product?.price.toFixed(2)}
        </span>
        <span className="font-bold text-2xl">
          ${getDiscountedPrice(product)}
        </span>
      </p>
    </div>
  );
}
