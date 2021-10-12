import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AsyncThunkConfig,
  Bike,
  BikePayload,
  Rental,
} from 'common/types/types';
import { ActionType } from './common';

const loadAvailableBike = createAsyncThunk<Bike[], undefined, AsyncThunkConfig>
(ActionType.LOAD_AVAILABLE_BIKE, async (_args, { extra }) => {
  const { bikeApi } = extra;

  return await bikeApi.getAll();
});

const loadRentalBike = createAsyncThunk<Rental[], undefined, AsyncThunkConfig>
(ActionType.LOAD_RENTAL_BIKE, async (_args, { extra }) => {
  const { rentalApi } = extra;

  return await rentalApi.getAll();
});

const createRent = createAsyncThunk<void, number, AsyncThunkConfig>
(ActionType.CREATE_RENT, async (bikeId, { extra, dispatch }) => {
  const { rentalApi } = extra;

  const rentalPayload = { bikeId };

  await rentalApi.create(rentalPayload);

  dispatch(loadAvailableBike());
  dispatch(loadRentalBike());
});

const createBike = createAsyncThunk<void, BikePayload, AsyncThunkConfig>
(ActionType.CREATE_BIKE, async (bikePayload, { extra, dispatch }) => {
  const { bikeApi } = extra;
  await bikeApi.create(bikePayload);

  dispatch(loadAvailableBike());
});

const cancelRent = createAsyncThunk<void, number, AsyncThunkConfig>
(ActionType.CREATE_RENT, async (id, { extra, dispatch }) => {
  const { rentalApi } = extra;

  await rentalApi.delete(id);

  dispatch(loadAvailableBike());
  dispatch(loadRentalBike());
});

const deleteBike = createAsyncThunk<void, number, AsyncThunkConfig>
(ActionType.CREATE_RENT, async (id, { extra, dispatch }) => {
  const { bikeApi } = extra;

  await bikeApi.delete(id);

  dispatch(loadAvailableBike());
});

export {
  createBike,
  loadAvailableBike,
  createRent,
  loadRentalBike,
  cancelRent,
  deleteBike,
};
