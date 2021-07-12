import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import Button from "@material-ui/core/Button"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { BrowserRouter as Router, Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  btn:{
      color:"white",
      border:"1px solid #ffffff"
  },

}));

export default function MenuAppBar({handleClose,toggleModalHandler,auth,handleMenu,anchorEl,open,user}) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
     
      <AppBar position="static">
        <Toolbar>
          <Router>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <Link to="/"><Home /></Link> 
          </IconButton>
          </Router>
          <Typography variant="h6" className={classes.title} >
           {user?.username || "Vote-App"}
          </Typography>
          {auth ? (
             <Button onClick={handleClose} className={classes.btn} variant="outlined" size="small" color="default">Logout</Button>
          ): <Button onClick={toggleModalHandler} className={classes.btn} variant="outlined" size="small" color="default">Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
