export const formatPrice = (price: number) => {
  const intl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return intl.format(price);
};
