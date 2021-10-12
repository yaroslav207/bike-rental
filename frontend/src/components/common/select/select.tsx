import SelectReact from 'react-select';
import { Option } from 'common/types/types';
import { ErrorMessage } from '@hookform/error-message';
import {
  Control,
  FieldErrors,
  Path,
  FieldValues,
  useController,
} from 'react-hook-form';
import { getCurrentValue } from './helpers/helpers';
import { getAllowedClasses } from 'helpers/helpers';
import { styles as selectStyles } from './styles';
import styles from './styles.module.scss';

type Props = {
  options: Option[];
  placeholder?: string;
  label: string;
  name: Path<FieldValues>;
  control: Control;
  errors: FieldErrors;
  isDisabled?: boolean;
  className?: string;
};

const Select: React.FC<Props> = ({ options, label, name, control, errors, isDisabled, className }) => {
  const { field } = useController({ name, control });

  const handleSelectChange = (option: Option | null): void => {
    field.onChange(option?.value);
  };

  const labelWrapperAllowedClasses = getAllowedClasses([
    className,
    styles.selectWrapper,
  ]);

  const currentValue = getCurrentValue(options, field.value);

  return (
    <label className={labelWrapperAllowedClasses}>
      <span className={styles.label}>{label}</span>
      <SelectReact
        styles={selectStyles}
        {...field}
        options={options}
        value={currentValue}
        onChange={handleSelectChange}
        isDisabled={isDisabled}
        className={styles.input}
      />
      <span className={styles.errorWrapper}>
        <ErrorMessage errors={errors} name={name} />
      </span>
    </label>
  );
};

export default Select;
