import React from 'react';
import { Bike } from 'common/types/types';
import styles from './styles.module.scss';
import { Button } from 'components/common/common';
import { ButtonColor } from 'common/enums/enums';

type Props = {
  bike: Bike;
  onCreateRent: (bikeId: number) => void;
  onDeleteBike: (id: number) => void;
};

const ListItem: React.FC<Props> = ({ bike, onCreateRent, onDeleteBike }) => {

  const handleAddBikeToRent = (): void => {
    onCreateRent(bike.id);
  };

  const handleDeleteBike = (): void => {
    onDeleteBike(bike.id);
  };

  return <li className={styles.itemWrapper}>
    <div className={styles.info}>
      <span>{bike.name}</span>
      <span>{bike.type}</span>
      <span>{`$ ${bike.price}`}</span>
    </div>
    <div className={styles.configuration}>
      <Button
        label={'Add rent'}
        buttonColor={ButtonColor.BLUE}
        onClick={handleAddBikeToRent}
      />
      <Button
        label={'Delete'}
        buttonColor={ButtonColor.RED}
        onClick={handleDeleteBike}
      />
    </div>
  </li>;
};

export default ListItem;
