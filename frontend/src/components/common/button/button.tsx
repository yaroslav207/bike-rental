import { ButtonColor, ButtonStyle, ButtonType } from 'common/enums/enums';
import { getAllowedClasses } from 'helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  label: string;
  type?: ButtonType;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  buttonStyle?: ButtonStyle;
  buttonColor?: ButtonColor;
  className?: string;
};

const Button: React.FC<Props> = ({
  type = ButtonType.BUTTON,
  buttonColor = ButtonColor.BLUE,
  onClick,
  label,
  className,
}) => {

  const allowedClasses = getAllowedClasses(
    className,
    styles.button,
    styles[`color${buttonColor}`],
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={allowedClasses}
    >
      {label}
    </button>
  );
};

export default Button;
