import Image from "next/image";
import React from "react";

export default function Rating({ rating }) {
  return (
    <div className="mt-3 flex items-center justify-start gap-1">
      {Array(Number(rating?.toFixed(0)))
        .fill()
        .map((_, index) => (
          <Image
            src="/assets/svg/star.svg"
            width={20}
            height={10}
            alt=""
            key={index}
          />
        ))}
    </div>
  );
}
