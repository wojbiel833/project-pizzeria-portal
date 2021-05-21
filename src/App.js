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
      main: '#130f40',
    },
    secondary: {
      main: '#4834d4',
    },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
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

// Przyjmiemy, że zamówienie będzie mogło mieć jeden z następujących statusów:

// new – zamówienie w trakcie składania, jeszcze nie realizujemy,
// ordered – zamówienie złożone, należy zrealizować,
// ready – zamówienie przygotowane, należy dostarczyć,
// in delivery – [tylko z dostawą] zamówienie w trakcie dostawy,
// delivered – [tylko lokalne] zamówienie zostało dostarczone, ale jeszcze nie opłacone,
// done – zamówienie zostało dostarczone i opłacone,
// cancelled – zamówienie anulowane.
// W przypadku zamówień z dostawą status ordered oznacza zamówienie opłacone, a w przypadku zamówień lokalnych – tylko złożone, ponieważ klient płaci po zjedzeniu. Dlatego status delivered będziemy stosować tylko w lokalu, a zamówienia z dostawą będą przeskakiwać od razu z in delivery na done. Analogicznie, kelner w restauracji nie będzie używał statusu in delivery, tylko zmieni status z ready na delivered

export default App;
