import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Nav() {
  const classes = useStyles();
//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     props.logout(false);
//   };
  
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#7395AE'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} style={{backgroundColor: '#7395AE'}} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Create a Resume!
          </Typography>
          <Button style={{backgroundColor: '#7395AE'}} component={Link} to={'/'}>Home</Button>
          <Button style={{backgroundColor: '#7395AE'}} component={Link} to={'/login'}>Login</Button>
          <Button style={{backgroundColor: '#7395AE'}} component={Link} to={'/profile'}>Profile</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
