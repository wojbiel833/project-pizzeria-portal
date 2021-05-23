import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import styles from './PickDateAndTime.module.scss';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const PickDateAndTime = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="Dare and time (from)"
            type="datetime-local"
            defaultValue="2021-05-23T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            label="Time(to)"
            type="time"
            defaultValue="11:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default PickDateAndTime;
