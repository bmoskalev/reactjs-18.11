import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="colorPrimary" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="textPrimary">
            Messenger
          </Typography>
          <Button color="inherit">Login</Button>
          <Button className="textPrimary"><Link to="/profile" className="textPrimary">Profile</Link></Button>
        </Toolbar>
      </AppBar>
    );
  }
}