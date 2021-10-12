import React from 'react';
import { Rental } from 'common/types/types';
import styles from './styles.module.scss';
import { Button } from 'components/common/common';
import { ButtonColor } from 'common/enums/enums';

type Props = {
  rent: Rental;
  onCancelRent: (id: number) => void
};

const ListItem: React.FC<Props> = ({ rent, onCancelRent }) => {

  const { bike, id } = rent;

  const handleCancelRent = (): void => {
    onCancelRent(id);
  };

  return <li className={styles.itemWrapper}>
    <div className={styles.info}>
      <span>{bike.name}</span>
      <span>{bike.type}</span>
      <span>{`$ ${bike.price}`}</span>
    </div>
    <div className={styles.configuration}>
      <Button label={'Cancel rent'} buttonColor={ButtonColor.RED} onClick={handleCancelRent}/>
    </div>
  </li>;
};

export default ListItem;
