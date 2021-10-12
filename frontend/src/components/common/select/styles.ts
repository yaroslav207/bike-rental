import { StylesConfig } from 'react-select';
import { Option } from 'common/types/types';

const styles: StylesConfig<Option, false> = {
  control: () => ({
    fontFamily: 'inherit',
    fontSize: '14px',
    padding: 0,
    transition: 'all 1s ease',
    textDecoration: 'none',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #9d9da7',
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
  valueContainer: () => ({
    padding: '0 15px',
    display: 'flex',
    alignItems: 'center',
  }),
};

export { styles };
