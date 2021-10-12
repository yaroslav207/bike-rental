import {
  Bike as TBike,
  BikePayload,
} from '~/common/types/types';
import { bike as bikeRep } from '~/data/repositories/repositories';

type Constructor = {
  bikeRepository: typeof bikeRep;
};

class Bike {
  #bikeRepository: typeof bikeRep;

  constructor({ bikeRepository }: Constructor) {
    this.#bikeRepository = bikeRepository;
  }

  public getAvailableBike(): Promise<TBike[]> {
    return this.#bikeRepository.getAvailableBike();
  }

  public create(payload: BikePayload): Promise<TBike> {
    return this.#bikeRepository.create(payload);
  }

  public delete(id: number): Promise<TBike> {
    return this.#bikeRepository.delete(id);
  }
}

export { Bike };
