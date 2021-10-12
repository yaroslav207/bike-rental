import { Rental } from 'common/types/types';

const getTotalPrice = (listRent: Rental[]): number => {
  return listRent.reduce((acc, rent) => {
    return acc + (rent.bike.price * (rent.coefDiscount ?? 1));
  }, 0);
};

export { getTotalPrice };
