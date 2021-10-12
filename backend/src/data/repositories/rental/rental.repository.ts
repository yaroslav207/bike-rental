import { RentalModel as RentalM } from '~/data/models/models';
import {
  Rental as TRental,
  RentalCreateDTOPayload,
} from '~/common/types/types';

type Constructor = {
  RentalModel: typeof RentalM;
};

class Rental {
  #RentalModel: typeof RentalM;

  constructor({ RentalModel }: Constructor) {
    this.#RentalModel = RentalModel;
  }

  public getAll(): Promise<TRental[]> {
    return this.#RentalModel.query()
      .withGraphJoined('[bike]')
  }

  public create(payload: RentalCreateDTOPayload): Promise<TRental> {
    return this.#RentalModel
      .query()
      .insert(payload)
  }

  public delete(id: number): Promise<TRental> {
    return this.#RentalModel
      .query()
      .deleteById(id)
      .returning('*')
      .first();
  }
}

export { Rental };
