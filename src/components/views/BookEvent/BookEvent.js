import React from 'react';
import AddBooking from '../../features/AddBooking/AddBooking';
import BookingButtons from './../../common/BookingButtons/BookingButtons';
import SubpageTitle from './../../common/SubpageTitle/SubpageTitle';
import styles from './BookEvent.module.scss';

const BookEvent = () => {
  return (
    <div className={styles.component}>
      <BookingButtons />
      <SubpageTitle title="Choose free table to set your event" subtitle="" />
      <AddBooking />
    </div>
  );
};

export default BookEvent;
