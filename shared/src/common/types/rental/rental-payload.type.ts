import { RentalPayloadKey } from '~/common/enums/enums';

type RentalPayload = {
  [RentalPayloadKey.BIKE_ID]: number;
};

export type { RentalPayload };
