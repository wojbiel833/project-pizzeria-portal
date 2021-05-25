import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// import styles from './PickGuestsAmount.module.scss';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function valuetext(value) {
  return value;
}

const PickGuestsAmount = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
