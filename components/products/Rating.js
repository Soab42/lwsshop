export default function Rating({ rating }) {
  return (
    <div className="mt-3 flex items-center justify-start gap-1">
      {Array(Number(rating?.toFixed(0)))
        .fill()
        .map((_, index) => (
          <img
            src="/assets/svg/star.svg"
            alt="star"
            className="w-5 h-5"
            key={index}
          />
        ))}
    </div>
  );
}
