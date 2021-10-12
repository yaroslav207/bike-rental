import {
  Rental as TRental,
  RentalCreateDTOPayload,
} from '~/common/types/types';
import { rental as rentalRep } from '~/data/repositories/repositories';
import { calculateDiscount } from '~/helpers/helpers';

type Constructor = {
  rentalRepository: typeof rentalRep;
};

class Rental {
  #rentalRepository: typeof rentalRep;

  constructor({ rentalRepository }: Constructor) {
    this.#rentalRepository = rentalRepository;
  }

  public async getAll(): Promise<TRental[]> {
    const rentalList = await this.#rentalRepository.getAll();

    return calculateDiscount(rentalList);
  }

  public create(payload: RentalCreateDTOPayload): Promise<TRental> {
    return this.#rentalRepository.create(payload);
  }

  public delete(id: number): Promise<TRental> {
    return this.#rentalRepository.delete(id);
  }
}

export { Rental };
