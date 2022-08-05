import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './Home.module.css';
import TextField from '@mui/material/TextField';
import { MenuItem, Select } from '@mui/material';


const Home = () => {
  console.log(styles);

  return (
    <div className={styles.home}>
      <Typography
        className={styles.title}
        variant="h6"
        color="inherit"
        component="div"
        sx={{ flexGrow: 2 }}
      >
        Библиотека
      </Typography>


      <Typography
        className={styles.name}
        variant="h6"
        color="inherit"
        component="div"
        sx={{ flexGrow: 2 }}
      >
        Название поля
      </Typography>
      <div className={styles.field}>

        <TextField
          className={styles.textField}
          id="outlined-basic"
          label="Outlined"
          size="small"
          variant="outlined"
          multiline />

        <Typography
          className={styles.name2}
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 2 }}
        >
          Название поля
        </Typography>
        <Select

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          size="small"
          onChange={() => { }}
        >

          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
    </div >
  );
}

export default Home;
