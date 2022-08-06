import { ADD_DATA_CLASS, REMOVE_DATA_CLASS, SET_FIELD_NAME, SET_FIELD_TYPE } from './actionTypes';

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
