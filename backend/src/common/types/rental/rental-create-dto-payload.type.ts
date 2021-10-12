import { RentalPayloadKey } from '~/common/enums/enums';

type RentalCreateDTOPayload = {
  [RentalPayloadKey.BIKE_ID]: number;
};

export type { RentalCreateDTOPayload };
