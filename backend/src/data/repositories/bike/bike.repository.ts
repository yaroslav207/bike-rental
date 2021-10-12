import { BikeModel as BikeM } from '~/data/models/models';
import {
  Bike as TBike,
  BikeCreateDTOPayload,
} from '~/common/types/types';

type Constructor = {
  BikeModel: typeof BikeM;
};

class Bike {
  #BikeModel: typeof BikeM;

  constructor({ BikeModel }: Constructor) {
    this.#BikeModel = BikeModel;
  }

  public getAvailableBike(): Promise<TBike[]> {
    return this.#BikeModel.query()
      .select('bike.*')
      .leftOuterJoin('rental', 'bike.id', 'rental.bike_id')
      .where('rental.bike_id', null);
  }

  public create(payload: BikeCreateDTOPayload): Promise<TBike> {
    return this.#BikeModel
      .query()
      .insert(payload)
  }

  public delete(id: number): Promise<TBike> {
    return this.#BikeModel
      .query()
      .deleteById(id)
      .returning('*')
      .first();
  }
}

export { Bike };
