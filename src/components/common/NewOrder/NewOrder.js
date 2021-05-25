import React from 'react';

import PickMenuType from '../PickMenuType/PickMenuType';
import PickDateAndTime from '../PickDateAndTime/PickDateAndTime';
import PickTable from '../PickTable/PickTable';
import PickGuestsAmount from '../PickGuestsAmount/PickGuestsAmount';
import PickReservationType from '../PickReservationType/PickReservationType';

import styles from './NewOrder.module.scss';
import Buttons from '../Buttons/Buttons';

const EditOrder = () => {
  return (
    <div className={styles.component}>
      <div className={styles.input}>
        <PickReservationType />
      </div>
      <div className={styles.input}>
        <PickMenuType />
      </div>
      <div className={styles.input}>
        <PickDateAndTime />
      </div>
      <div className={styles.input}>
        <PickTable />
      </div>
      <div className={styles.input}>
        <PickGuestsAmount />
      </div>
      <div className={styles.input}>
        <p>
          Price: <span>xxx</span>
        </p>
      </div>
      <div className={styles.input}>
        <Buttons name="Edit" to="/tables/booking/:id" />
      </div>
      <div className={styles.input}>
        <Buttons name="Save changes" />
      </div>
    </div>
  );
};

export default EditOrder;
