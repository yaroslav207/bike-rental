import { Router } from 'express';
import {
  bike as bikeCreateValidationSchema,
} from '~/validation-schemas/validation-schemas';
import { ApiPath, HttpCode, BikeApiPath } from '~/common/enums/enums';
import { handleAsyncApi } from '~/helpers/helpers';
import {
  validateSchema as validateSchemaMiddleware,
} from '~/middlewares/middlewares';
import { bike as bikeService } from '~/services/services';

type Args = {
  apiRouter: Router;
  bikeService: typeof bikeService;
};

const initBikeApi = ({ apiRouter, bikeService }: Args): Router => {
  const bikeRouter = Router();

  apiRouter.use(ApiPath.BIKE, bikeRouter);

  bikeRouter.get(
    BikeApiPath.ROOT,
    handleAsyncApi(async (req, res) => {
      return res.json(await bikeService.getAvailableBike()).status(HttpCode.OK);
    }),
  );

  bikeRouter.post(
    BikeApiPath.ROOT,
    validateSchemaMiddleware(bikeCreateValidationSchema),
    handleAsyncApi(async (req, res) => {
      return res
        .json(await bikeService.create(req.body))
        .status(HttpCode.CREATED);
    }),
  );

  bikeRouter.delete(
    BikeApiPath.$ID,
    handleAsyncApi(async (req, res) => {
      return res
        .json(await bikeService.delete(Number(req.params.id)))
        .status(HttpCode.OK);
    }),
  );

  return bikeRouter;
};

export { initBikeApi };
