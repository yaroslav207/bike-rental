import { BikeModel, RentalModel } from '~/data/models/models';
import { Bike } from './bike/bike.repository';
import { Rental } from './rental/rental.repository';

const bike = new Bike({ BikeModel });
const rental = new Rental({ RentalModel });

export { bike, rental };
