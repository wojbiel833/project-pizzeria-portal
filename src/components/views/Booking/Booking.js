import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Booking.module.scss';

import Button from '@material-ui/core/Button';

const links = [
  { name: 'Orders', to: '/tables' },
  { name: 'New Booking', to: '/tables/booking/new' },
  { name: 'Your Booking', to: '/tables/booking/:id' },
  { name: 'New Event', to: '/tables/event/new' },
  { name: 'Your Event', to: '/tables/event/:id' },
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
          to={`${process.env.PUBLIC_URL}${link.to}`}
        >
          {link.name}
        </Button>
      ))}
    </div>
  </div>
);

export default Booking;
