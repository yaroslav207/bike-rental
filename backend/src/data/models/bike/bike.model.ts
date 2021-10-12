import { TableName, BikeDTOKey, BikeType } from '~/common/enums/enums';
import { Abstract } from '../abstract/abstract.model';

class Bike extends Abstract {
  [BikeDTOKey.NAME]: string;

  [BikeDTOKey.TYPE]: BikeType;

  [BikeDTOKey.PRICE]: number;

  static get tableName(): string {
    return TableName.BIKE;
  }

}

export { Bike };
