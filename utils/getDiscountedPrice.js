export function getDiscountedPrice(product) {
  const mainPrice = Number(product?.price);
  const discountPercentage = Number(product?.discountPercentage) / 100; // Convert percentage to decimal
  const discountAmount = mainPrice * discountPercentage; // Calculate the discount amount
  const discountedPrice = mainPrice - discountAmount; // Subtract the discount amount from the original price
  return discountedPrice.toFixed(2);
}
