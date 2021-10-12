import React from 'react';
import { Bike } from 'common/types/types';
import { ListItem } from './components/components';
import styles from './styles.module.scss';

type Props = {
  list: Bike[];
  onCreateRent: (bikeId: number) => void;
  onDeleteBike: (id: number) => void;
};

const AvailableList: React.FC<Props> = ({ list, onCreateRent, onDeleteBike }) => {
  const countAvailableBike = list.length;

  return <div className="wrapper">
    <h2 className={styles.title}>{`Available bicycles (${countAvailableBike})`}</h2>
    <ul className={styles.availableList}>
      {list.map((item) => <ListItem
        key={item.id}
        bike={item}
        onCreateRent={onCreateRent}
        onDeleteBike={onDeleteBike}
      />)}
    </ul>
  </div>;
};

export default AvailableList;
