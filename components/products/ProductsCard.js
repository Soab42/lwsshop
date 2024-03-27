import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Link from "next/link";

export default function ProductsCard({ product = {} }) {
  return (
    <div className="ring-1 p-2  rounded grid shadow-md ring-black/10 hover:scale-105 transition-transform duration-500 overflow-hidden fade-in  w-full group/disc">
      <Link href={`/products/${product?.id}`}>
        <div
          className="relative delay-150 lg:w-full rounded-md h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-300 ease-in-out transform overflow-hidden"
          style={{ backgroundImage: `url(${product?.thumbnail})` }}
        >
          <div className="w-full h-20 duration-500 bg-gradient-to-t from-rose-500 via-rose-700/60 to-transparent absolute -bottom-10 invisible group-hover/disc:visible group-hover/disc:bottom-0 flex items-end justify-center duration-500">
            <p className="text-2xl text-white font-bold">
              {product.discountPercentage}% discount
            </p>
          </div>
        </div>
      </Link>

      <h2 className="text-sm lg:text-base mt-2">
        <Link className="text-base font-bold" href={`/products/${product?.id}`}>
          {product?.title}
        </Link>
        <span className="text-[#919090]">
          <Link
            href={`/category/${product?.category}`}
            className="hover:text-yellow-600 border-b capitalize"
          >
            ({product?.category})
          </Link>
        </span>
      </h2>
      <Link href={`/products/${product?.id}`}>
        <p className="text-[#919090] text-sm ">{product?.description}</p>
      </Link>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">
          ${product?.price?.toFixed(2)}
        </span>
        ${getDiscountedPrice(product)}
      </p>
    </div>
  );
}
