import { Model } from 'objection';
import { TableName, RentalDTOKey } from '~/common/enums/enums';
import { Abstract } from '../abstract/abstract.model';
import { BikeModel } from '~/data/models/models';
import { Bike } from '~/common/types/types'

class Rental extends Abstract {
  [RentalDTOKey.BIKE_ID]: number;

  [RentalDTOKey.BIKE]: Bike;

  static get tableName(): string {
    return TableName.RENTAL;
  }

  static relationMappings = {
    bike: {
      relation: Model.HasOneRelation,
      modelClass: BikeModel,
      join: {
        from: 'rental.bike_id',
        to: 'bike.id',
      },
    },
  };

}

export { Rental };
