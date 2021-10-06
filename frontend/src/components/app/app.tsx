import React from 'react';
import AvailableList from 'components/available-list/available-list';
import CreateBikeForm from 'components/create-bike-form/create-bike-form';
import RentedList from 'components/rented-list/rented-list';
import style from './styles.module.scss';

const App: React.FC = () => {
  return <div className={style.app}>
    <CreateBikeForm />
    <RentedList />
    <AvailableList />
  </div>;
};

export default App;
