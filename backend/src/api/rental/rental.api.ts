import { Router } from 'express';

import { ApiPath, HttpCode, RentalApiPath } from '~/common/enums/enums';
import { handleAsyncApi } from '~/helpers/helpers';
import { rental as rentalService } from '~/services/services';

type Args = {
  apiRouter: Router;
  rentalService: typeof rentalService;
};

const initRentalApi = ({ apiRouter, rentalService }: Args): Router => {
  const rentalRouter = Router();

  apiRouter.use(ApiPath.RENTAL, rentalRouter);

  rentalRouter.get(
    RentalApiPath.ROOT,
    handleAsyncApi(async (req, res) => {
      return res.json(await rentalService.getAll()).status(HttpCode.OK);
    }),
  );

  rentalRouter.post(
    RentalApiPath.ROOT,
    handleAsyncApi(async (req, res) => {
      return res
        .json(await rentalService.create(req.body))
        .status(HttpCode.CREATED);
    }),
  );

  rentalRouter.delete(
    RentalApiPath.$ID,
    handleAsyncApi(async (req, res) => {
      return res
        .json(await rentalService.delete(Number(req.params.id)))
        .status(HttpCode.OK);
    }),
  );

  return rentalRouter;
};

export { initRentalApi };
