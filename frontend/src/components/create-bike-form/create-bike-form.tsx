import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Button, Input, Select } from 'components/common/common';
import { ButtonColor, ButtonType, InputType, BikePayloadKey, BikeType } from 'common/enums/enums';
import { BikePayload, Option } from 'common/types/types';
import { bike as bikeValidationSchemas } from 'validation-schemas/validation-schemas';
import { getResolver, getOptions, getAllowedClasses } from 'helpers/helpers';
import { DEFAULT_CREATE_BIKE_PAYLOAD } from './common/constants';
import styles from './styles.module.scss';

type Props = {
  onCreateBike: (payload: BikePayload) => void;
};

const CreateBikeForm: React.FC<Props> = ({ onCreateBike }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: DEFAULT_CREATE_BIKE_PAYLOAD,
    resolver: getResolver(bikeValidationSchemas),
  });

  const selectTypeOptions: Option[] = getOptions(Object.values(BikeType));
  const allowedClassesFormWrapper = getAllowedClasses([
    'wrapper',
    styles.formWrapper,
  ]);

  const handleSubmitForm = (bikePayload: BikePayload): void => {
    onCreateBike(bikePayload);
    reset();
  };

  return <div className={allowedClassesFormWrapper}>
    <h2 className={styles.title}>Create new rent</h2>
    <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <Input
        name={BikePayloadKey.NAME}
        label="Name"
        errors={errors}
        register={register}
        type={InputType.TEXT}
        className={styles.name}
      />
      <Select
        options={selectTypeOptions}
        label="Bike type"
        name={BikePayloadKey.TYPE}
        control={control}
        errors={errors}
        className={styles.type}
      />
      <Input
        name={BikePayloadKey.PRICE}
        label="Price"
        errors={errors}
        register={register}
        type={InputType.NUMBER}
        className={styles.price}
        min={0}
      />
      <Button
        label="Add bike"
        type={ButtonType.SUBMIT}
        className={styles.btnSubmit}
        buttonColor={ButtonColor.GREEN}
      />
    </form>
  </div>;
};

export default CreateBikeForm;
