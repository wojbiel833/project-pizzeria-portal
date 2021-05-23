import React from 'react';
import AddBooking from '../../features/AddBooking/AddBooking';
import SubpageTitle from './../../common/SubpageTitle/SubpageTitle';
import BookingButtons from './../../common/BookingButtons/BookingButtons';

import styles from './BookTable.module.scss';

const BookTable = () => {
  return (
    <div className={styles.component}>
      <BookingButtons />
      <SubpageTitle title="Choose free table for booking" subtitle="" />
      <AddBooking />
    </div>
  );
};

export default BookTable;
