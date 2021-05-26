import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

import styles from './PickDateAndTime.module.scss';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 20,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  FormControlLabel: {
    marginBottom: '10px',
  },
}));

const PickDateAndTime = () => {
  const classes = useStyles();
  const [time, setTime] = useState('11:30');

  const updateTime = event => {
    const newTime = event.target.value;
    const [, minutes] = newTime.split(':');

    if (minutes === '00' || minutes === '30') setTime(newTime);
  };

  return (
    <div className={styles.flex}>
      <form className={classes.container} noValidate>
        {/* <FormControlLabel className={classes.textField}> */}
        <TextField
          id="datetime-local"
          label="Date and time (from, each 30min)"
          type="datetime-local"
          defaultValue="2021-05-23T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* </FormControlLabel> */}
      </form>

      <form className={classes.container} noValidate>
        <TextField
          id="time"
          label="Time(to, each 30min)"
          type="time"
          value={time}
          onChange={updateTime}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1800,
          }}
        />
      </form>
    </div>
  );
};

export default PickDateAndTime;
