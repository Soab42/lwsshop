import Image from "next/image";

export default function ProductSmallThumbnail({
  image,
  onClick,
  imageIndex,
  id,
}) {
  return (
    <Image
      src={image}
      className={`mx-auto border object-cover ${
        imageIndex === id
          ? "ring-1 duration-500 rounded-md shadow-sm shadow-black"
          : "duration-500"
      }`}
      alt={image}
      width={100}
      height={100}
      key={image}
      onClick={onClick}
    />
  );
}
