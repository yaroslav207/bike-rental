import React from 'react';
import {
  FieldErrors,
  UseFormRegister,
  FieldValues,
} from 'react-hook-form';
import { InputType } from 'common/enums/enums';
import { ErrorMessage } from '@hookform/error-message';
import { getAllowedClasses } from 'helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  label: string,
  name: string,
  type?: InputType,
  errors: FieldErrors,
  register: UseFormRegister<FieldValues>,
  className?: string,
  min?: number,
  max?: number,
};

const Input: React.FC<Props> = ({
  label,
  name,
  errors,
  register,
  type = InputType.TEXT,
  className,
  min,
  max,
}) => {

  const labelWrapperAllowedClasses = getAllowedClasses([
    className,
    styles.labelWrapper,
  ]);

  return (
    <label className={labelWrapperAllowedClasses}>
      <span className={styles.label}>{label}</span>
      <input
        {...register(name)}
        className={styles.input}
        name={name}
        type={type}
        step="any"
        min={min}
        max={max}
      />
      <span className={styles.errorWrapper}>
        <ErrorMessage errors={errors} name={name}/>
      </span>
    </label>
  );
};

export default Input;
