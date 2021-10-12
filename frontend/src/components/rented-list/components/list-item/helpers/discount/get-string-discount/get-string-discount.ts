const getStringDiscount = (coefDiscount: number): string => {
  const discountInPercent = 100 - (coefDiscount * 100);
  return `-${discountInPercent}%`;
};

export { getStringDiscount };
