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
      <div className={styles.flex}>
        <div>
          <PickGuestsAmount />
        </div>
        <div>
          <PickTable />
        </div>
      </div>
      <div className={styles.flex}>
        <div>
          <PickReservationType />
        </div>
        <div>
          <PickMenuType />
        </div>
      </div>
      <div>
        <PickDateAndTime />
      </div>
      <div className={styles.flex}>
        <div className={styles.price}>
          <p>
            Price: <span>205,99$</span>
          </p>
        </div>
        <div className={styles.flex}>
          <div className={styles.buttons}>
            <Buttons name="Edit" to="/tables/booking/:id" />
          </div>
          <div className={styles.buttons}>
            <Buttons name="Save changes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
