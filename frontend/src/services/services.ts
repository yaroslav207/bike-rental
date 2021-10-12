import { ENV } from 'common/enums/enums';
import { Http } from './http/http.service';
import { BikeApi } from './bike-api/bike-api.service';
import { RentalApi } from './rental-api/rental-api.service';

const http = new Http();

const bikeApi = new BikeApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const rentalApi = new RentalApi({
  http,
  apiPrefix: ENV.API_PATH,
});

export {
  bikeApi,
  rentalApi,
};
