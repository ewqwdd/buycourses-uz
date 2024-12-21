export function formatPrice(price) {
  if (typeof price !== 'number') {
    throw new Error('Input must be a number');
  }

  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2,
  }).format(price);
}

