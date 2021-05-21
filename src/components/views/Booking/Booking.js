import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Booking.module.scss';

import Button from '@material-ui/core/Button';

const links = [
  { name: 'Orders', to: '/orders' },
  { name: 'New Booking', to: 'booking/new' },
  { name: 'Your Booking', to: '/booking/:id' },
  { name: 'New Event', to: '/event/new' },
  { name: 'Your Event', to: '/event/:id' },
];

const Booking = id => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    <div className="nav">
      {links.map(link => (
        <Button
          component={Link}
          className={styles.link}
          key={link.name}
          to={link.to}
        >
          {link.name}
        </Button>
      ))}
    </div>
  </div>
);

export default Booking;
