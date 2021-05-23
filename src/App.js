import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Booking from './components/views/Booking/Booking';
import BookTable from './components/views/BookTable/BookTable';
import EditTable from './components/views/EditTable/EditTable';
import BookEvent from './components/views/BookEvent/BookEvent';
import EditEvent from './components/views/EditEvent/EditEvent';
import Waiter from './components/views/Waiter/Waiter';
import NewOrders from './components/views/NewOrders/NewOrders';
import EditOrder from './components/views/EditOrder/EditOrder';
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

const App = () => {
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
                path={process.env.PUBLIC_URL + '/tables/booking/new'}
                component={BookTable}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/tables/booking/:id'}
                component={EditTable}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/tables/event/new'}
                component={BookEvent}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/tables/event/:id'}
                component={EditEvent}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/waiter'}
                component={Waiter}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/waiter/orders/new'}
                component={NewOrders}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/waiter/orders/:id'}
                component={EditOrder}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/kitchen'}
                component={Kitchen}
              />
              <Route path={'/'} render={() => <div>404</div>} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
