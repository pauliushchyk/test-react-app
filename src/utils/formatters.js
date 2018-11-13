export const USDFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export const BYNFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'BYN',
  minimumFractionDigits: 2,
});
