import React from 'react';

import BookingButtons from '../../common/BookingButtons/BookingButtons';
import SubpageTitle from '../../common/SubpageTitle/SubpageTitle';
import NewOrder from '../../common/NewOrder/NewOrder';

import styles from '../../common/SubpageTitle/SubpageTitle';

const EditTable = () => {
  return (
    <div className={styles.component}>
      <BookingButtons />
      <SubpageTitle title="Edit reservation" subtitle="" />
      <NewOrder />
    </div>
  );
};

export default EditTable;
