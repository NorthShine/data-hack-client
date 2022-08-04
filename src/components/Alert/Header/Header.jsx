import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './Header.module.css';

const Header = () => {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       style={{ background: 'rgb(17 93 86 / 95%)' }}
      >
        <Toolbar variant="dense"
        color="secondary">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            NorthShine
          </Typography>
          <Button
            variant="outlined"
            color="success"
          >Кнопка
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header