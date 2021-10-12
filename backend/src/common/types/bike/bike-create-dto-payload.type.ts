import { BikePayloadKey, BikeType } from '~/common/enums/enums';

type BikeCreateDTOPayload = {
  [BikePayloadKey.NAME]: string;
  [BikePayloadKey.TYPE]: BikeType;
  [BikePayloadKey.PRICE]: number;
};

export type { BikeCreateDTOPayload };
