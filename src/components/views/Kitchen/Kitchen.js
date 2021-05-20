import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Kitchen.module.scss';

const Kitchen = () => (
  <div className={styles.component}>
    <h2>Kitchen view</h2>
    <Link to="/orders" className="link">
      Orders
    </Link>
  </div>
);

export default Kitchen;
