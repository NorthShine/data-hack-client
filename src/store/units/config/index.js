import { createDataClass, createField } from '../../../utils';
import {
  ADD_DATA_CLASS,
  ADD_INPUT_SET,
  REMOVE_DATA_CLASS,
  REMOVE_INPUT_SET,
  SET_DATA_CLASS_NAME,
  SET_FIELD_NAME,
  SET_FIELD_TYPE,
  SET_WHERE_CLAUSES
} from './actionTypes';

const configUnit = {
  initialState: {
    models: [createDataClass()]
  },
  reducer: (state, action) => {
    switch (action.type) {
      case ADD_DATA_CLASS:
        return {
          ...state,
          models: [
            ...state.data,
            createDataClass()
          ]
        };
      case REMOVE_DATA_CLASS: {
        const { id } = action.payload;
        const data = state.models.filter((item) => item.id !== id);

        return {
          ...state,
          data
        };
      }
      case SET_FIELD_NAME: {
        const { dataClassId, fieldId, value } = action.payload;

        return {
          ...state,
          models: state.models.map((dataClass) => {
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
          models: state.models.map((dataClass) => {
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

      case ADD_INPUT_SET: {
        const { dataClassId } = action.payload;

        return {
          ...state,
          models: state.models.map((dataClass) => {
            if (dataClass.id === dataClassId) {
              const fields = [...dataClass.sqlModel.fields, createField()];
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

      case REMOVE_INPUT_SET: {
        const { dataClassId } = action.payload;

        return {
          ...state,
          models: state.models.map((dataClass) => {
            if (dataClass.id === dataClassId) {
              const fields = [...dataClass.sqlModel.fields];
              fields.pop();
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

      case SET_DATA_CLASS_NAME: {
        const { dataClassId, value } = action.payload;

        return {
          ...state,
          models: state.models.map((dataClass) => {
            if (dataClass.id === dataClassId) {
              return {
                ...dataClass,
                name: value
              };
            }
            return dataClass;
          })
        };
      }

      case SET_WHERE_CLAUSES: {
        const { dataClassId, value } = action.payload;

        return {
          ...state,
          models: state.models.map((dataClass) => {
            if (dataClass.id === dataClassId) {
              return {
                ...dataClass,
                whereClauses: value
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
