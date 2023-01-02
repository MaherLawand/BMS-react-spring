import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

export default function ButtonAppBar() {
  return (
    <div className='AppbarWrapper'>
      <AppBar position="static" className="box">
        <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick=<DropDown />
          > */}
          <DropDown />
          {/* </IconButton> */}
          <Link to="/" style={{textDecoration:"none",color:"white",fontSize:"18px",fontWeight:"bold"}}>
            BeeKeeper Management System
          </Link>
          {/* Typography variant="h6" component="div" sx={{ flexGrow: 1 }} */}
          
                <Link to="/Login">Login</Link>
                
              
        </Toolbar>
      </AppBar>
    </div>
  );
}
