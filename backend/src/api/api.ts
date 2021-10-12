import { Router } from 'express';
import { ENV } from '~/common/enums/enums';
import {
  bike as bikeService,
  rental as rentalService,
} from '~/services/services';
import { initBikeApi } from './bike/bike.api';
import { initRentalApi } from './rental/rental.api';


const initApi = (app: Router): Router => {
  const apiRouter = Router();

  app.use(ENV.API.V1_PREFIX, apiRouter);

  initBikeApi({
    apiRouter,
    bikeService,
  });

  initRentalApi({
    apiRouter,
    rentalService,
  });

  return apiRouter;
};

export { initApi };
