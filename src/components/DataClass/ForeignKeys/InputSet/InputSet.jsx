import React, { useCallback, useId, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem, Select } from '@mui/material';
import PropTypes from 'proptypes';
import styles from './InputSet.module.css';
import useDispatch from '../../../../hooks/useDispatch';
import { setForeignKeyName, setForeignKeyField } from '../../../../store/units/config/actions';
import useSelector from '../../../../hooks/useSelector';

const InputSet = (props) => {
  const { item, dataClassId } = props;
  const models = useSelector((state) => state.config.models);
  const dispatch = useDispatch();
  const id = useId();

  const foreignKeys = useMemo(() => models
    .filter((model) => model.id !== dataClassId)
    .map((model) => model.sqlModel.fields
      .map((field) => `${model.name}.${field.name}`)).flat(2), [models]);

  const handleInputChange = useCallback((event) => {
    const { value } = event.target;
    dispatch(setForeignKeyName({
      dataClassId,
      fieldId: item.id,
      value
    }));
  }, [dataClassId, item.id]);

  const handleSelectChange = useCallback((event) => {
    const { value } = event.target;
    dispatch(setForeignKeyField({
      dataClassId,
      fieldId: item.id,
      value
    }));
  }, [dataClassId, item.id]);

  return (
    <div className={styles.gridWrapper}>{/* eslint-disable-line */}
      <TextField
        className={styles.textField}
        value={item.field}
        id={id + item.id}
        size="small"
        variant="outlined"
        onChange={handleInputChange}
        multiline
        fullWidth
      />
      <Select
        labelId={`${id + item.id}-label`}
        id={id + item.id}
        value={item.foreignField}
        size="small"
        onChange={handleSelectChange}
        fullWidth
      >
        {foreignKeys.map((key) => (
          <MenuItem
            key={key}
            value={key}
          >
            {key}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

InputSet.propTypes = {
  item: PropTypes.shape(),
  dataClassId: PropTypes.string
};

export default InputSet;
