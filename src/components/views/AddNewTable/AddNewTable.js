import React from 'react';
import AddBooking from '../../features/AddBooking/AddBookingContainer';
import WaiterButtons from '../../common/WaiterButtons/WaiterButtons';
import SubpageTitle from '../../common/SubpageTitle/SubpageTitle';
import styles from './AddNewTable.module.scss';

const AddNewTable = () => {
  return (
    <div className={styles.component}>
      <WaiterButtons />
      <SubpageTitle title="Choose free table to set your event" subtitle="" />
      <AddBooking />
    </div>
  );
};

export default AddNewTable;
