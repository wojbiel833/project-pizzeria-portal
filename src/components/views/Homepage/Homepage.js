import React from 'react';

import styles from './Homepage.module.scss';

import ReservationsToday from './../../common/ReservationsToday/ReservationsToday';
import SubpageTitle from '../../common/SubpageTitle/SubpageTitle';

const Homepage = () => (
  <div>
    <SubpageTitle title="Reservations for today" subtitle="23.05.2021" />
    <ReservationsToday />
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
