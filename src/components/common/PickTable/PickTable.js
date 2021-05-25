import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import styles from './PickTable.module.scss';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PickTable = () => {
  const classes = useStyles();
  const [guests, setGuestsAmount] = React.useState('');

  const handleChange = event => {
    setGuestsAmount(event.target.value);
  };

  // this.wrapper = React.createRef();

  return (
    // <div ref={this.wrapper}>
    <form>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="tableNumber">
          Table number
        </InputLabel>
        <Select
          labelId="tableNumber"
          id="tableNumber"
          value={guests}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>0</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
    </form>
    // </div>
  );
};

export default PickTable;
