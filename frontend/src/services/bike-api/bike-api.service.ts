import {
  ApiPath,
  ContentType,
  HttpMethod,
} from 'common/enums/enums';
import { Http } from 'services/http/http.service';
import { Bike, BikePayload } from 'common/types/types';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class BikeApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public getAll(): Promise<Bike[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.BIKE}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public create(payload: BikePayload): Promise<Bike> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.BIKE}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      },
    );
  }

  public delete(id: number): Promise<Bike> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.BIKE}/${id}`,
      {
        method: HttpMethod.DELETE,
      },
    );
  }

}

export { BikeApi };
