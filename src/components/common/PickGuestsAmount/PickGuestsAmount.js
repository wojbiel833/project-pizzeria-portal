import React from 'react';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import styles from './PickGuestsAmount.module.scss';

function valuetext(value) {
  return value;
}

const PickGuestsAmount = () => {
  return (
    <div className={styles.slider}>
      <Typography id="guestsAmount" gutterBottom>
        Guests amount
      </Typography>
      <Slider
        defaultValue={10}
        getAriaValueText={valuetext}
        aria-labelledby="guestsAmount"
        step={1}
        marks
        min={1}
        max={50}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default PickGuestsAmount;
