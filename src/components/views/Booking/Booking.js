import React from 'react';
import ReservationsToday from '../../common/ReservationsToday/ReservationsToday';
import SubpageTitle from '../../common/SubpageTitle/SubpageTitle';

import BookingButtons from './../../common/BookingButtons/BookingButtons';

import styles from './Booking.module.scss';

const Booking = id => (
  <div className={styles.component}>
    <BookingButtons />
    <SubpageTitle title="Reservations for today" subtitle="" />
    <ReservationsToday />
  </div>
);

export default Booking;
