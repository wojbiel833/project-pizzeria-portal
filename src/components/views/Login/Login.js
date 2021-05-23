import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import styles from './Login.module.scss';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Login = () => {
  const [value, setValue] = React.useState('guest');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={styles.component}>
        <div className={styles.input}>
          <FormControl component="fieldset">
            <FormLabel component="legend">You are:</FormLabel>
            <RadioGroup
              aria-label="userType"
              name="userType"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="guest"
                control={<Radio color="primary" />}
                label="Guest"
              />
              <FormControlLabel
                value="waiter"
                control={<Radio color="primary" />}
                label="Waiter"
              />
              <FormControlLabel
                value="kitchenWorker"
                control={<Radio color="primary" />}
                label="Kitchen worker"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={styles.component}>
          <div className={styles.input}>
            <TextField
              // error
              id="standard-error"
              label="Your nick"
              defaultValue=""
            />
          </div>
          <div className={styles.input}>
            <TextField
              // error
              id="standard-error"
              label="Password"
              defaultValue=""
            />
          </div>
          <div className={styles.input}>
            <Button className={styles.link} variant="outlined">
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
