export function formatPrice(price) {
  if (typeof price !== 'number') {
    throw new Error('Input must be a number')
  }

  return new Intl.NumberFormat('si-LK', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 2, // В рупиях часто используют 2 знака после запятой
    maximumFractionDigits: 2,
  }).format(price)
}
