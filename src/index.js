module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero';
  }
  const ones = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const parts = [];
  const hundreds = Math.floor(number / 100);
  const remainder = number % 100;
  if (hundreds > 0) {
    parts.push(ones[hundreds - 1]);
    parts.push('hundred');
  }
  if (remainder >= 20) {
    parts.push(tens[Math.floor(remainder / 10) - 2]);
    if (remainder % 10 > 0) {
      parts.push(ones[(remainder % 10) - 1]);
    }
  } else if (remainder >= 10) {
    parts.push(teens[remainder - 10]);
  } else if (remainder > 0) {
    parts.push(ones[remainder - 1]);
  }
  return parts.join(' ');
};
