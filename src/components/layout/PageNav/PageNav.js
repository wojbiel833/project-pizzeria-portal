import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './PageNav.module.scss';

import Button from '@material-ui/core/Button';

const routs = [
  { name: 'Home', to: '/' },
  { name: 'Login', to: '/login' },
  { name: 'Booking', to: '/tables' },
  { name: 'Waiter', to: '/waiter' },
  { name: 'Kitchen', to: '/kitchen' },
];

const PageNav = () => (
  <nav className={styles.component}>
    {routs.map(route => (
      <Button
        component={NavLink}
        className={styles.link}
        key={route.name}
        exact
        to={`${process.env.PUBLIC_URL}${route.to}`}
        activeClassName="active"
      >
        {route.name}
      </Button>
    ))}
  </nav>
);

export default PageNav;
