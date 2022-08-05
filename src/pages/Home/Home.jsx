import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styles from './Home.module.css';

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
        <TextField id="outlined-basic"
          label="Outlined" size="small" variant="outlined" multiline />
      </div>
    </div >
  );
}

export default Home;
