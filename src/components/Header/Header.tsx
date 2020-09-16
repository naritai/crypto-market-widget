import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './header.css';

export const Header = () => {
  return (
    <div className="main-header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Market widget
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
};