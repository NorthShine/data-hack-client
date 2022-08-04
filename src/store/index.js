import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { alertReducer } from './reducers/alert/alertReducer';

const rootReducer = combineReducers({
  alert: alertReducer
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export const store = setupStore();
