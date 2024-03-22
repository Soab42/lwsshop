import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ProductBigThumbnail from "./ProductBigThumbnail";
import Image from "next/image";

const PreviewComponents = ({ product, imageIndex }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef();
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  //   const handleHover = (e) => {
  //     setHoverPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  //     setIsHovered(true);
  //   };
  const handleHover = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const rect = imageRef.current.getBoundingClientRect();
    setHoverPosition({ x: offsetX - rect.left, y: offsetY - rect.top });
    setIsHovered(true);
  };

  console.log(hoverPosition);
  useEffect(() => {
    window.addEventListener("mouseover", handleHover);
    return () => {
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="">
      <ProductBigThumbnail
        thumbLink={product?.images[imageIndex]}
        onMouseEnter={(e) => handleHover(e)}
        onMouseLeave={() => setIsHovered(false)}
        imageRef={imageRef}
      />
      {isHovered && (
        <div
          className="absolute w-[78rem] ring-1 z-50 left-[40rem] top-30 overflow-hidden"
          style={{
            background: "black",
            padding: "1rem",
          }}
        >
          <div
            className="w-[100rem]"
            style={{
              transform: `translateX(${hoverPosition.x}) translateY(${hoverPosition.y})`,
            }}
          >
            <Image
              src={product?.images[imageIndex]}
              className=""
              alt=""
              width={1800}
              height={1000}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewComponents;
