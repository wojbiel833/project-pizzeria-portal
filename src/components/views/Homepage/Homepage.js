import React from 'react';

import styles from './Homepage.module.scss';

import Container from '@material-ui/core/Container';

import Hero from './../../common/Hero/Hero';
import ReservationsToday from './../../common/ReservationsToday/ReservationsToday';

const Homepage = () => (
  <div>
    <Container fixed>
      <Hero
        titleText="Welcome in our restaurant!"
        imageSrc="https://i.ibb.co/54K5XtY/2194675.jpg"
      />
    </Container>
    <div className={styles.component}>
      <header className={styles.header}>
        <h2 className={styles.head}>Dzisiejesze rezerwacje</h2>
        <h2 className={styles.head}>Data:</h2>
      </header>
    </div>
    <ReservationsToday />
    <div></div>
  </div>
);

export default Homepage;
