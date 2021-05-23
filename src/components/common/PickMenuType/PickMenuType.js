import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// import styles from './PickMenuType.module.scss';

const PickMenuType = () => {
  const [value, setValue] = React.useState('alaCarte');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form>
      <FormControl component="fieldset">
        <FormLabel component="legend">Menu</FormLabel>
        <RadioGroup
          row
          aria-label="userType"
          name="reservationType"
          value={value}
          onChange={handleChange}
          defaultValue="top"
        >
          <FormControlLabel
            value="alaCarte"
            control={<Radio color="primary" />}
            label="a'la Carte"
          />
          <FormControlLabel
            value="establishedMenu"
            control={<Radio color="primary" />}
            label="Set your menu"
          />
        </RadioGroup>
      </FormControl>
    </form>
  );
};

export default PickMenuType;
