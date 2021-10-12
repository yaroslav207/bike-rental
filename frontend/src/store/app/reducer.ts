import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from 'common/enums/enums';
import { loadAvailableBike, loadRentalBike } from './actions';
import { Bike, Rental } from 'common/types/types';

type State = {
  dataStatus: DataStatus;
  availableBike: Bike[];
  rentalBike: Rental[];
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  availableBike: [],
  rentalBike: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadAvailableBike.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(loadAvailableBike.fulfilled, (state, action) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.availableBike = action.payload;
  });
  builder.addCase(loadAvailableBike.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });

  builder.addCase(loadRentalBike.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(loadRentalBike.fulfilled, (state, action) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.rentalBike = action.payload;
  });
  builder.addCase(loadRentalBike.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });
});

export { reducer };
