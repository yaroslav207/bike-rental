import { Bike } from '~/common/types/types';

type Rental = {
  id: number;
  bikeId: number;
  bike: Bike;
  createdAt: string;
  updatedAt: string;
  coefDiscount?: number;
};

export type { Rental };
