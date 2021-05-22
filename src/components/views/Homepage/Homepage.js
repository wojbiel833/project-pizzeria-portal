import React from 'react';

import styles from './Homepage.module.scss';

import Container from '@material-ui/core/Container';

import Hero from './../../common/Hero/Hero';
import ReservationsToday from './../../common/ReservationsToday/ReservationsToday';
import Footer from '../../common/Footer/Footer';

const Homepage = () => (
  <div>
    <Hero
      titleText="Welcome in our restaurant!"
      imageSrc="https://i.ibb.co/54K5XtY/2194675.jpg"
    />
    <div className={styles.component}>
      <div className={styles.header}>
        <h2 className={styles.text}>Dzisiejesze rezerwacje</h2>
        <h2 className={styles.text}>Data:</h2>
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
    <div className={styles.component}>
      <Footer />
    </div>
  </div>
);

export default Homepage;
