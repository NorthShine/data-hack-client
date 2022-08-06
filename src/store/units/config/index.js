import { DEFAULT_DATA_CLASS } from '../../../constants';
import { createDataClass } from '../../../utils';
import { ADD_DATA_CLASS, REMOVE_DATA_CLASS, SET_FIELD_NAME, SET_FIELD_TYPE } from './actionTypes';

const configUnit = {
  initialState: {
    data: [createDataClass()]
  },
  reducer: (state, action) => {
    switch (action.type) {
      case ADD_DATA_CLASS:
        return {
          ...state,
          data: [
            ...state.data,
            DEFAULT_DATA_CLASS
          ]
        };
      case REMOVE_DATA_CLASS: {
        const { id } = action.payload;
        const data = state.data.filter((item) => item.id !== id);

        return {
          ...state,
          data
        };
      }
      case SET_FIELD_NAME: {
        const { dataClassId, fieldId, value } = action.payload;

        return {
          ...state,
          data: state.data.map((dataClass) => {
            if (dataClass.id === dataClassId) {
              const fields = dataClass.sqlModel.fields.map((field) => {
                if (field.id === fieldId) {
                  return {
                    ...field,
                    name: value
                  };
                }
                return field;
              });
              return {
                ...dataClass,
                sqlModel: {
                  ...dataClass.sqlModel,
                  fields
                }
              };
            }
            return dataClass;
          })
        };
      }

      case SET_FIELD_TYPE: {
        const { dataClassId, fieldId, value } = action.payload;

        return {
          ...state,
          data: state.data.map((dataClass) => {
            if (dataClass.id === dataClassId) {
              const fields = dataClass.sqlModel.fields.map((field) => {
                if (field.id === fieldId) {
                  return {
                    ...field,
                    type: value
                  };
                }
                return field;
              });
              return {
                ...dataClass,
                sqlModel: {
                  ...dataClass.sqlModel,
                  fields
                }
              };
            }
            return dataClass;
          })
        };
      }
      default:
        return state;
    }
  }
};

export default configUnit;
