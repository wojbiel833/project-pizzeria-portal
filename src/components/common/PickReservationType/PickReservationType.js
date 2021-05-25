import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// import styles from './PickReservationType.module.scss';

const PickReservationType = () => {
  const [value, setValue] = React.useState('standardReservation');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form>
      <FormControl component="fieldset">
        <FormLabel component="legend">Art of reservation</FormLabel>
        <RadioGroup
          row
          aria-label="userType"
          name="reservationType"
          value={value}
          onChange={handleChange}
          defaultValue="top"
        >
          <FormControlLabel
            value="disposableEvent"
            control={<Radio color="primary" />}
            label="Disposable event"
          />
          <FormControlLabel
            value="cyclicalEvent"
            control={<Radio color="primary" />}
            label="Cyclical event"
          />
          <FormControlLabel
            value="standardReservation"
            control={<Radio color="primary" />}
            label="Standard reservation"
          />
        </RadioGroup>
      </FormControl>
    </form>
  );
};

export default PickReservationType;
