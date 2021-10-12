import React, { useEffect } from 'react';
import AvailableList from 'components/available-list/available-list';
import CreateBikeForm from 'components/create-bike-form/create-bike-form';
import RentedList from 'components/rented-list/rented-list';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { app as appSelector } from 'store/actions';
import { BikePayload, RootState } from 'common/types/types';

const App: React.FC = () => {

  const dispatch = useDispatch();

  const { availableBike, rentalBike } = useSelector(({ app }: RootState) => ({
    availableBike: app.availableBike,
    rentalBike: app.rentalBike,
  }));

  const handleCreateBike = (createBikePayload: BikePayload): void => {
    dispatch(appSelector.createBike(createBikePayload));
  };

  const handleCreateRent = (bikeId: number): void => {
    dispatch(appSelector.createRent(bikeId));
  };

  const handleCancelRent = (id: number): void => {
    dispatch(appSelector.cancelRent(id));
  };

  const handleDeleteBike = (id: number): void => {
    dispatch(appSelector.deleteBike(id));
  };

  useEffect(() => {
    dispatch(appSelector.loadAvailableBike());
    dispatch(appSelector.loadRentalBike());
  }, []);

  return <div className={styles.app}>
    <h1 className="wrapper">Awesome bike rental</h1>
    <CreateBikeForm onCreateBike={handleCreateBike} />
    <RentedList
      list={rentalBike}
      onCancelRent={handleCancelRent}
    />
    <AvailableList
      list={availableBike}
      onCreateRent={handleCreateRent}
      onDeleteBike={handleDeleteBike}
    />
  </div>;
};

export default App;
