import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Tables.module.scss';

const Tables = id => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to="/orders" className="link">
      Orders
    </Link>
    <Link to="/booking/new" className="link">
      New Booking
    </Link>
    <Link to={`/booking/${id}`} className="link">
      Your Booking
    </Link>
    <Link to="/event/new" className="link">
      New Event
    </Link>
    <Link to={`/event/${id}`} className="link">
      Your Event
    </Link>
  </div>
);

export default Tables;
