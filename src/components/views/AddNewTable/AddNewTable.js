import React from 'react';
import AddBooking from '../../features/AddBooking/AddBookingContainer';
import BookingButtons from '../../common/BookingButtons/BookingButtons';
import SubpageTitle from '../../common/SubpageTitle/SubpageTitle';
import styles from './AddNewTable.module.scss';

const AddNewTable = () => {
  return (
    <div className={styles.component}>
      <BookingButtons />
      <SubpageTitle title="Choose free table to set your event" subtitle="" />
      <AddBooking />
    </div>
  );
};

export default AddNewTable;
