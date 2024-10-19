export const formatCurrency = (
  amount: number,
  currency: string = "NGN", 
  locale: string = "en-NG"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};
