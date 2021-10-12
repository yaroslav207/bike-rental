import React from 'react';
import styles from './styles.module.scss';
import { ListItem } from './components/components';
import { Rental } from 'common/types/types';
import { getTotalPrice } from './helpers/helpers';

type Props = {
  list: Rental[];
  onCancelRent: (id: number) => void
};

const RentedList: React.FC<Props> = ({ list, onCancelRent }) => {

  const totalCount = getTotalPrice(list);

  return <div className="wrapper">
    <h2 className={styles.title}>{`Your rent (Total $ ${totalCount})`}</h2>
    <ul className={styles.rentList}>
      {list.map((item) => <ListItem key={item.id} rent={item} onCancelRent={onCancelRent}/>)}
    </ul>
  </div>;
};

export default RentedList;
