import { createForeignKey, createDataClass, createField } from '../../../utils';
import {
  ADD_DATA_CLASS,
  ADD_FOREIGN_KEY,
  ADD_INPUT_SET,
  REMOVE_DATA_CLASS,
  REMOVE_FOREIGN_KEY,
  REMOVE_INPUT_SET,
  SET_DATA_CLASS_NAME,
  SET_FIELD_NAME,
  SET_FIELD_TYPE,
  SET_FOREIGN_KEY_NAME,
  SET_FOREIGN_KEY_FIELD,
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
            ...state.models,
            createDataClass()
          ]
        };
      case REMOVE_DATA_CLASS: {
        const { models } = state;
        models.pop();

        return {
          ...state,
          models
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

      case SET_FOREIGN_KEY_NAME: {
        const { dataClassId, fieldId, value } = action.payload;

        return {
          ...state,
          models: state.models.map((dataClass) => {
            if (dataClass.id === dataClassId) {
              const foreignKeys = dataClass.sqlModel.foreignKeys.map((field) => {
                if (field.id === fieldId) {
                  return {
                    ...field,
                    field: value
                  };
                }
                return field;
              });
              return {
                ...dataClass,
                sqlModel: {
                  ...dataClass.sqlModel,
                  foreignKeys
                }
              };
            }
            return dataClass;
          })
        };
      }

      case SET_FOREIGN_KEY_FIELD: {
        const { dataClassId, fieldId, value } = action.payload;

        return {
          ...state,
          models: state.models.map((dataClass) => {
            if (dataClass.id === dataClassId) {
              const foreignKeys = dataClass.sqlModel.foreignKeys.map((field) => {
                if (field.id === fieldId) {
                  return {
                    ...field,
                    foreignField: value
                  };
                }
                return field;
              });
              return {
                ...dataClass,
                sqlModel: {
                  ...dataClass.sqlModel,
                  foreignKeys
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

      case ADD_FOREIGN_KEY: {
        const { dataClassId } = action.payload;

        return {
          ...state,
          models: state.models.map((dataClass, _, models) => {
            if (dataClass.id === dataClassId) {
              const [foreignModel] = models.filter((model) => model.id !== dataClassId);
              const [foreignField] = foreignModel.sqlModel.fields;
              const foreignKeys = [
                ...dataClass.sqlModel.foreignKeys,
                createForeignKey(`${foreignModel.name}.${foreignField.name}`)
              ];
              return {
                ...dataClass,
                sqlModel: {
                  ...dataClass.sqlModel,
                  foreignKeys
                }
              };
            }
            return dataClass;
          })
        };
      }

      case REMOVE_FOREIGN_KEY: {
        const { dataClassId } = action.payload;

        return {
          ...state,
          models: state.models.map((dataClass) => {
            if (dataClass.id === dataClassId) {
              const foreignKeys = [...dataClass.sqlModel.foreignKeys];
              foreignKeys.pop();
              return {
                ...dataClass,
                sqlModel: {
                  ...dataClass.sqlModel,
                  foreignKeys
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
