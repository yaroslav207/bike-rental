import { Rental } from '~/common/types/types';
import { getDifferenceInHours } from '~/helpers/helpers';
import { CoeficientDiscount, HoursForDiscount } from '~/common/enums/enums';

const calculateDiscount = (rentalList: Rental[]): Rental[] => {
  const currentDate = new Date();

  return rentalList.map( rent => {
    const createRentDate = new Date(rent.createdAt);
    const differenceInHours = getDifferenceInHours(currentDate, createRentDate);
    const coefDiscount = (differenceInHours >= HoursForDiscount.TWENTY)
      ? CoeficientDiscount.DISCOUNT_AFTER_TWENTY_HOURS
      : CoeficientDiscount.DEFAULT_DISCOUNT;

    return {...rent, coefDiscount}
  })
};

export { calculateDiscount };
