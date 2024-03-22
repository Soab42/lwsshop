import Image from "next/image";
import React from "react";

export default function ProductBigThumbnail({ thumbLink }) {
  return (
    <div>
      <Image
        src={thumbLink}
        className="w-[800px] h-[500px] mx-auto object-contain fade-in "
        alt=""
        width={1800}
        height={1000}
      />
    </div>
  );
}
