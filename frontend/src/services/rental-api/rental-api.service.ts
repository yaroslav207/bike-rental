import {
  ApiPath,
  ContentType,
  HttpMethod,
} from 'common/enums/enums';
import { Http } from 'services/http/http.service';
import { Rental, RentalPayload } from 'common/types/types';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class RentalApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public getAll(): Promise<Rental[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.RENTAL}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public create(payload: RentalPayload): Promise<Rental> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.RENTAL}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      },
    );
  }

  public delete(id: number): Promise<Rental> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.RENTAL}/${id}`,
      {
        method: HttpMethod.DELETE,
      },
    );
  }

}

export { RentalApi };
