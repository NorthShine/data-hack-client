import { ADD_DATA_CLASS, ADD_INPUT_SET, REMOVE_DATA_CLASS, REMOVE_INPUT_SET, SET_FIELD_NAME, SET_FIELD_TYPE } from './actionTypes';

export const addDataClass = (payload) => ({
  type: ADD_DATA_CLASS,
  payload
});

export const removeDataClass = () => ({
  type: REMOVE_DATA_CLASS
});

export const setFieldName = (payload) => ({
  type: SET_FIELD_NAME,
  payload
});

export const setFieldType = (payload) => ({
  type: SET_FIELD_TYPE,
  payload
});

export const addInputSet = (payload) => ({
  type: ADD_INPUT_SET,
  payload
});

export const removeInputSet = (payload) => ({
  type: REMOVE_INPUT_SET,
  payload
});
