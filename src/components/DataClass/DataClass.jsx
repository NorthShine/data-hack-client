import { Container, TextField, Typography } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import PropTypes from 'proptypes';
import Fields from './Fields/Fields';
import useSelector from '../../hooks/useSelector';
import useDispatch from '../../hooks/useDispatch';
import { setDataClassName, setLimit, setWhereClauses } from '../../store/units/config/actions';
import styles from './DataClass.module.css';
import ForeignKeys from './ForeignKeys/ForeignKeys';

const DataClass = (props) => {
  const { id } = props;
  const models = useSelector((state) => state.config.models);
  const dispatch = useDispatch();

  const dataClass = useMemo(
    () => models.find((item) => item.id === id),
    [models, id]
  );

  const handleDataClassNameChange = useCallback((event) => {
    const { value } = event.target;
    dispatch(setDataClassName({
      dataClassId: id,
      value
    }));
  }, [id]);

  const handleWhereClausesChange = useCallback((event) => {
    const { value } = event.target;
    dispatch(setWhereClauses({
      dataClassId: id,
      value
    }));
  }, [id]);

  const handleLimitChange = useCallback((event) => {
    const { value } = event.target;
    if (Number.isInteger(+value)) {
      dispatch(setLimit({
        dataClassId: id,
        value
      }));
    }
  }, [id]);

  return (
    <Container className={styles.dataClass}>
      <div className={styles.container}>
        <Typography
          className={styles.title}
          variant="h6"
        >
          Имя таблицы
        </Typography>
        <TextField
          size="small"
          value={dataClass.name}
          onChange={handleDataClassNameChange}
        />
      </div>
      <div className={styles.container}>
        <Typography
          className={styles.title}
          variant="h6"
        >
          Лимит
        </Typography>
        <TextField
          size="small"
          value={dataClass.limit}
          onChange={handleLimitChange}
        />
      </div>
      <Fields
        items={dataClass.sqlModel.fields}
        dataClassId={id}
      />
      {models.length > 1 && (
        <ForeignKeys
          items={dataClass.sqlModel.foreignKeys}
          dataClassId={id}
        />
      )}
      <div className={styles.container}>
        <Typography
          className={styles.title}
          variant="h6"
        >
          where_clauses
        </Typography>
        <TextField
          size="small"
          placeholder="my_field > 10 & another_field <= 80"
          value={dataClass.whereClauses}
          onChange={handleWhereClausesChange}
        />
      </div>
    </Container>
  );
};

DataClass.propTypes = {
  id: PropTypes.string
};

export default DataClass;
