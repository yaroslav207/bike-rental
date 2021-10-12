import { Joi } from '~/helpers/helpers';
import { BikePayloadKey, BikeType, BikeValidationMessage } from '~/common/enums/enums';
import { BikePayload } from '~/common/types/types';

const bikesTypes = Object.values(BikeType);

const bike = Joi.object<BikePayload>({
  [BikePayloadKey.NAME]: Joi.string()
    .trim()
    .required()
    .messages({
      'string.empty': BikeValidationMessage.BIKE_NAME_REQUIRE,
    }),
  [BikePayloadKey.PRICE]: Joi.number()
    .required()
    .messages({
      'string.empty': BikeValidationMessage.BIKE_PRICE_REQUIRE,
    }),
  [BikePayloadKey.TYPE]: Joi.string()
    .valid(...bikesTypes)
    .required()
    .messages({
      'string.empty': BikeValidationMessage.BIKE_TYPE_REQUIRE,
    }),
});

export { bike };
