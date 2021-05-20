import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Waiter.module.scss';

const Waiter = id => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to="/orders" className="link">
      Orders
    </Link>
    <Link to="/orders/new" className="link">
      New Booking
    </Link>
    <Link to={`/orders/${id}`} className="link">
      Edit Booking
    </Link>
  </div>
);

export default Waiter;
