export function formatPrice(price) {
  if (typeof price !== 'number') {
    throw new Error('Input must be a number');
  }

  return new Intl.NumberFormat('ne-NP', {
    style: 'currency',
    currency: 'NPR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
