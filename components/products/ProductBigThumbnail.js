import Image from "next/image";

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
      <div className="relative w-[45rem] h-[35rem] mx-auto overflow-hidden">
        <div className="absolute inset-0 transition-transform transform duration-700 hover:scale-125">
          <Image
            src={thumbLink}
            className="w-full h-full object-contain p-4 slide-left"
            alt="Product thumbnail"
            ref={imageRef}
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
