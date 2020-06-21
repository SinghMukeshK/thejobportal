import React, { useState } from 'react';
import AppBar from './components/AppBar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Job from './views/Job/Job';
import Results from './views/Results';
import ViewMore from './views/ViewMore';

import RecentItems from './views/RecentItems';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import cyan from '@material-ui/core/colors/cyan';
import UpcomingJobs from './views/Job/UpcomingJobs';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

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
  margin: {
    marginTop: '6%'

  }
}));

function App(props) {
  const classes = useStyles();

  return (
    <Router>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <AppBar />
          <Grid container item sm={12}>
            <div className={classes.margin}></div>
          </Grid>
          <Grid container sm={12} >
            <Grid container item sm={2}>
              <RecentItems />
            </Grid>
            <Grid container item sm={8}>
              <Switch>
                <Route exact path="/"><Job /></Route>
                <Route path="/results"><Results /></Route>
                <Route path="/job/:jobId/:jobTitle"><ViewMore /></Route>
              </Switch>
            </Grid>
            <Grid container item sm={2}>
              <UpcomingJobs />
            </Grid>
          </Grid>
        </ThemeProvider >
      </React.StrictMode >
    </Router>
  );
}

export default App;
