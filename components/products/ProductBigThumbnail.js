import Image from "next/image";
import React from "react";

export default function ProductBigThumbnail({
  thumbLink,
  onMouseEnter,
  onMouseLeave,
  imageRef,
}) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Image
        src={thumbLink}
        className="w-[800px] h-[500px] mx-auto object-contain fade-in "
        alt=""
        ref={imageRef}
        width={1800}
        height={1000}
      />
    </div>
  );
}
