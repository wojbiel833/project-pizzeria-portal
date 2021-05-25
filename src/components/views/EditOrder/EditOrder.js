import React from 'react';

import BookingButtons from '../../common/BookingButtons/BookingButtons';
import SubpageTitle from '../../common/SubpageTitle/SubpageTitle';
import NewOrder from '../../common/NewOrder/NewOrder';

import styles from '../../views/EditOrder/EditOrder.module.scss';

const EditOrder = () => {
  return (
    <div className={styles.component}>
      <BookingButtons />
      <SubpageTitle title="Edit order" subtitle="" />
      <NewOrder />
    </div>
  );
};

export default EditOrder;
