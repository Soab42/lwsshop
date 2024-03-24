import Image from "next/image";
import React from "react";

export default function ProductBigThumbnail({
  thumbLink,
  onMouseEnter,
  onMouseLeave,
  imageRef,
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-full overflow-hidden "
    >
      <Image
        src={thumbLink}
        className={`w-[800px] h-[500px] mx-auto object-contain transform hover:scale-125 transition-transform transition-all duration-700 slide-left'
        }`}
        alt="Product thumbnail"
        ref={imageRef}
        width={1800}
        height={1000}
      />
    </div>
  );
}
