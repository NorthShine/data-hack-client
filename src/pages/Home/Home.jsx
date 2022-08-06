import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { MenuItem, Select } from '@mui/material';
import styles from './Home.module.css';
import { StateContext } from '../../providers/StateProvider';
import Fields from '../../components/Alert/Fields/Fields';

const Home = () => {
  const context = useContext(StateContext);

  const handleClick = () => {
    context.setState({
      type: 'increment'
    });
  };

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
      <Fields />

    </div>
  );
};

export default Home;
