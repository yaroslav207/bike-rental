import { BikeType } from '~/common/enums/enums';

type Bike = {
  id: number;
  name: string;
  price: number;
  type: BikeType;
  createdAt: string;
  updatedAt: string;
};

export type { Bike };
