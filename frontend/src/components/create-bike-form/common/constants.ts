import { BikePayloadKey, BikeType } from 'common/enums/enums';
import { BikePayload } from 'common/types/types';

const DEFAULT_CREATE_BIKE_PAYLOAD: BikePayload = {
  [BikePayloadKey.NAME]: '',
  [BikePayloadKey.TYPE]: BikeType.CLASSIC,
  [BikePayloadKey.PRICE]: 0,
};

export { DEFAULT_CREATE_BIKE_PAYLOAD };
