import {
  bike as bikeRepository,
  rental as rentalRepository,
} from '~/data/repositories/repositories';

import { Bike } from './bike/bike.service';
import { Rental } from './rental/rental.service'

const bike = new Bike({
  bikeRepository,
});

const rental = new Rental({
  rentalRepository,
});

export { bike, rental };
