import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Link from "next/link";
import ProductPrice from "./ProductPrice";
import Rating from "./Rating";

export default function ProductDetails({ product }) {
  return (
    <div className="w-full lg:w-5/12">
      <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
        {product?.title}
      </h1>
      <span className="text-[#919090] my-3">
        <Link href={`/category/${product?.category}`}>{product?.category}</Link>
      </span>

      {/* rating section */}
      <Rating rating={product?.rating} />
      <hr className="my-5 bg-black" />

      {/* pricing section */}
      <ProductPrice product={product} />

      <div>
        <p className="leading-7">{product?.description}</p>

        <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
          Add To Cart - ${getDiscountedPrice(product)}
        </button>
      </div>
    </div>
  );
}
