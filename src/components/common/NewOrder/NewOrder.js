import React from 'react';

import PickReservationType from '../PickReservationType/PickReservationType';

import styles from './NewOrder.module.scss';
import PickMenuType from '../PickMenuType/PickMenuType';
import PickDateAndTime from '../PickDateAndTime/PickDateAndTime';

// DATEPICKER STYLES ------------------------------------------------------------

const EditOrder = () => {
  // RADIO

  // const [value2, setValue2] = React.useState('alaCarte');

  // const handleChange = event => {
  //   setValue1(event.target.value);
  //   setValue2(event.target.value);
  // };

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

      <div className={styles.input}></div>
    </div>
  );
};

export default EditOrder;
