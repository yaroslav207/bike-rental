import { BikePayloadKey, BikeType } from '~/common/enums/enums';

type BikePayload = {
  [BikePayloadKey.NAME]: string;
  [BikePayloadKey.TYPE]: BikeType;
  [BikePayloadKey.PRICE]: number;
};

export type { BikePayload };
