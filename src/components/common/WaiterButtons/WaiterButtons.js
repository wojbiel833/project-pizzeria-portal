import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import styles from './WaiterButtons.module.scss';

const links = [
  { name: 'Orders', to: '/waiter' },
  { name: 'New Booking', to: '/waiter/orders/new' },
  { name: 'Edit Booking', to: '/waiter/orders/:id' },
];

const WaiterButtons = id => (
  <div className={styles.component}>
    <div className="nav">
      {links.map(link => (
        <Button
          component={Link}
          className={styles.link}
          key={link.name}
          to={`${process.env.PUBLIC_URL}${link.to}`}
        >
          {link.name}
        </Button>
      ))}
    </div>
  </div>
);

export default WaiterButtons;
