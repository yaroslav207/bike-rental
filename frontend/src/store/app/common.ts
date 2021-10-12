import { Bike, Rental } from 'common/types/types';

enum ActionType {
  CREATE_BIKE = 'app/create-bike',
  LOAD_AVAILABLE_BIKE = 'app/loadAvailableBike',
  LOAD_RENTAL_BIKE = 'app/loadRentalBike',
  CREATE_RENT = 'app/createRent',
}

type LoadAllBikeType = {
  rentalBike: Rental[],
  availableBike: Bike[],
};

export { ActionType };
export type { LoadAllBikeType };
