import React from 'react';

import styles from './Homepage.module.scss';

import ReservationsToday from './../../common/ReservationsToday/ReservationsToday';

const Homepage = () => (
  <div>
    <div className={styles.component}>
      <div className={styles.header}>
        <h2 className={styles.text}>Dzisiejesze rezerwacje</h2>
        <h2 className={styles.text}>Data: 23.05.2021</h2>
      </div>
    </div>
    <div className={styles.component}>
      <ReservationsToday />
    </div>
    <div className={styles.relative}>
      <div className={styles.statistics}>
        <h2 className={styles.text}>
          We gave out <span>xxx</span> meals
        </h2>
        <h2 className={styles.text}>
          and delivered <span>xxx</span>!
        </h2>
      </div>
    </div>
  </div>
);

export default Homepage;
