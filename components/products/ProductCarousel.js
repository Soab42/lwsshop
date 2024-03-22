import { useEffect, useRef, useState } from "react";
import ProductBigThumbnail from "./ProductBigThumbnail";
import ProductSmallThumbnail from "./ProductSmallThumbnail";

export default function ProductCarousel({ product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const selectRef = useRef();

  useEffect(() => {
    if (selectRef.current) {
      clearInterval(selectRef.current);
    }
    selectRef.current = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);

    return () => clearInterval(selectRef.current);
  }, [product?.images.length]);

  const handleMouseLeave = () => {
    if (selectRef.current) {
      clearInterval(selectRef.current);
    }
    selectRef.current = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);
  };

  const handleMouseEnter = () => {
    clearInterval(selectRef.current);
  };

  return (
    <div
      className="w-full lg:w-7/12 border border-slate-500/20 p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProductBigThumbnail
        thumbLink={product?.images[imageIndex]}
        key={imageIndex}
      />
      {/* <PreviewComponents imageIndex={imageIndex} product={product} /> */}

      <div className="flex gap-4 mt-4">
        {product?.images.map((image, i) => (
          <ProductSmallThumbnail
            image={image}
            key={image}
            id={i}
            imageIndex={imageIndex}
            onClick={() => {
              setImageIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
