import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export const MainAppBar: React.FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          React Tutorial
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
