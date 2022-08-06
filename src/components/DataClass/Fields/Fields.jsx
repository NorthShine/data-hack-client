import React, { useCallback } from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'proptypes';
import { Button } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import styles from './Fields.module.css';
import InputSet from './InputSet/InputSet';
import useDispatch from '../../../hooks/useDispatch';
import { addInputSet, removeInputSet } from '../../../store/units/config/actions';

const Fields = (props) => {
  const { items, dataClassId } = props;
  const dispatch = useDispatch();

  const handleAddInputSetClick = useCallback(() => {
    dispatch(addInputSet({
      dataClassId
    }));
  }, [dataClassId]);

  const handleRemoveInputSetClick = useCallback(() => {
    dispatch(removeInputSet({
      dataClassId
    }));
  }, [dataClassId]);

  return (
    <div className={styles.fields}>
      <Typography
        className={styles.fieldsPlace}
        variant="h6"
        color="inherit"
        component="div"
        sx={{ flexGrow: 2 }}
      >
        Поля (Fields)
      </Typography>
      <div className={styles.setInput}>
        <Typography
          className={styles.name}
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 2 }}
        >
          Название поля
        </Typography>
        <Typography
          className={styles.name}
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 2 }}
        >
          Тип
        </Typography>
      </div>
      {items.map((item) => (
        <InputSet
          key={item.id}
          item={item}
          dataClassId={dataClassId}
        />
      ))}
      <div className={styles.actions}>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={handleAddInputSetClick}
          startIcon={<Add />}
        >
          добавить
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={handleRemoveInputSetClick}
          startIcon={<Delete />}
        >
          удалить
        </Button>
      </div>
    </div>
  );
};

Fields.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  dataClassId: PropTypes.string
};

export default Fields;
