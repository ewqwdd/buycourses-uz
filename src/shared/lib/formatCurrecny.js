export function formatCurrency(amount) {
  const lastDigit = amount % 10;
  const lastTwoDigits = amount % 100;

  let word;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    word = 'рублей';
  } else if (lastDigit === 1) {
    word = 'рубль';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    word = 'рубля';
  } else {
    word = 'рублей';
  }

  return word;
}