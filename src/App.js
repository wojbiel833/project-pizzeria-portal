import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Booking from './components/views/Booking/Booking';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1A237E',
    },
    // secondary: {
    //   main: '#4834d4',
    // },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Homepage}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/login'}
                component={Login}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/tables'}
                component={Booking}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/waiter'}
                component={Waiter}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/kitchen'}
                component={Kitchen}
              />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
