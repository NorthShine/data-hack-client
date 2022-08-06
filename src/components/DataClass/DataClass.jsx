import { Container } from '@mui/system';
import React, { useMemo } from 'react';
import PropTypes from 'proptypes';
import { TextField } from '@mui/material';
import Fields from './Fields/Fields';
import useSelector from '../../hooks/useSelector';

const DataClass = (props) => {
  const { id } = props;
  const data = useSelector((state) => state.config.data);

  const dataClass = useMemo(
    () => data.find((item) => item.id === id),
    [data, id]
  );

  return (
    <Container>
      <TextField
        size="small"
      />
      <Fields
        items={dataClass.sqlModel.fields}
        dataClassId={id}
      />
    </Container>
  );
};

DataClass.propTypes = {
  id: PropTypes.string
};

export default DataClass;
