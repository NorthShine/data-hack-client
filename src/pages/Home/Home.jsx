import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Styles from './Home.modules.css';

function Home() {
  return (
    <div className="Main__wrapper">
      <Typography
        className="Main_title"
        variant="h6"
        color="inherit"
        component="div"
        sx={{ flexGrow: 2 }}
      >
        Библиотека
      </Typography>
      <Typography
        className="input__name"
        variant="h6"
        color="inherit"
        component="div"
        sx={{ flexGrow: 2 }}
      >
        Название поля
      </Typography>
      <div className="input__field">
        <div className="input-text">
          <TextField id="outlined-basic" label="Outlined" size="small" variant="outlined" multiline />
        </div>
      </div>
    </div>
  );
}

export default Home;
