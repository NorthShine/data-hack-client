import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { MenuItem, Select } from '@mui/material';
import styles from './Fields.module.css';
import { StateContext } from '../../../providers/StateProvider';

const Fields = () => {
  const context = useContext(StateContext);

  const handleClick = () => {
    context.setState({
      type: 'increment'
    });
  };

  return (
    <div className={styles.fields}>

      <div className={styles.gridWrapper}>
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
          className={styles.name2}
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 2 }}
        >
          Название поля
        </Typography>
      </div>
      <div className={styles.gridWrapper}>
        <TextField
          className={styles.textField}
          id="outlined-basic"
          label="Outlined"
          size="small"
          variant="outlined"
          multiline
          fullWidth
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          size="small"
          onChange={() => { }}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
    </div >
  );
};

export default Fields;
