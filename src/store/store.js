import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../services/slices/eventSlice';
import modalReducer from '../services/slices/modalSlice';

const store = configureStore({
  reducer: {
    event: eventReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
