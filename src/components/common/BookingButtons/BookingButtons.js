import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import styles from './BookingButtons.module.scss';

const links = [
  { name: 'Orders', to: '/tables' },
  { name: 'New Booking / Event', to: '/tables/booking/new' },
  { name: 'Your Booking / Event', to: '/tables/booking/:id' },
];

const BookingButtons = id => (
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

export default BookingButtons;
