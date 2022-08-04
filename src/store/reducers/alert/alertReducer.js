import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  message: '',
  severity: 'info'
};

export const openAlertAction = createAction('alert/openAlert');
export const closeAlertAction = createAction('alert/closeAlert');

// function setApiAlert(
//   state,
//   action
// ) {
//   const { message } = action.payload;
//   state.message = this.message || message || '';
//   state.open = true;
//   state.severity = this.severity;
// }

export const alertReducer = createReducer(initialState, (builder) => {
  builder.addCase(openAlertAction, (state, action) => {
    const { severity, message } = action.payload;
    state.open = true;
    state.severity = severity;
    state.message = message;
  });
  builder.addCase(closeAlertAction, (state) => {
    state.open = false;
  });
});
