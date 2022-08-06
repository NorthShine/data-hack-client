import React, { useCallback, useId } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem, Select } from '@mui/material';
import PropTypes from 'proptypes';
import styles from './InputSet.module.css';
import { DATA_TYPES } from '../../../../constants';
import useDispatch from '../../../../hooks/useDispatch';
import { setFieldName, setFieldType } from '../../../../store/units/config/actions';

const InputSet = (props) => {
  const { item, dataClassId } = props;
  const dispatch = useDispatch();
  const id = useId();

  const handleInputChange = useCallback((event) => {
    const { value } = event.target;
    dispatch(setFieldName({
      dataClassId,
      fieldId: item.id,
      value
    }));
  }, [dataClassId, item.id]);

  const handleSelectChange = useCallback((event) => {
    const { value } = event.target;
    dispatch(setFieldType({
      dataClassId,
      fieldId: item.id,
      value
    }));
  }, [dataClassId, item.id]);

  return (
    <div className={styles.gridWrapper}>{/* eslint-disable-line */}
      <TextField
        className={styles.textField}
        value={item.name}
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
        value={item.type}
        size="small"
        onChange={handleSelectChange}
        fullWidth
      >
        {DATA_TYPES.map((type) => (
          <MenuItem
            key={type}
            value={type}
          >
            {type}
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
