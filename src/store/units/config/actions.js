import { ADD_DATA_CLASS, ADD_FOREIGN_KEY, ADD_INPUT_SET, REMOVE_DATA_CLASS, REMOVE_FOREIGN_KEY, REMOVE_INPUT_SET, SET_DATA_CLASS_NAME, SET_FIELD_NAME, SET_FIELD_TYPE, SET_FOREIGN_KEY_NAME, SET_FOREIGN_KEY_FIELD, SET_WHERE_CLAUSES, SET_LIMIT } from './actionTypes';

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

export const setForeignKeyName = (payload) => ({
  type: SET_FOREIGN_KEY_NAME,
  payload
});

export const setForeignKeyField = (payload) => ({
  type: SET_FOREIGN_KEY_FIELD,
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

export const addForeignKey = (payload) => ({
  type: ADD_FOREIGN_KEY,
  payload
});

export const removeForeignKey = (payload) => ({
  type: REMOVE_FOREIGN_KEY,
  payload
});

export const setDataClassName = (payload) => ({
  type: SET_DATA_CLASS_NAME,
  payload
});

export const setWhereClauses = (payload) => ({
  type: SET_WHERE_CLAUSES,
  payload
});

export const setLimit = (payload) => ({
  type: SET_LIMIT,
  payload
});
