import React, { useState } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import SubpageTitle from '../../common/SubpageTitle/SubpageTitle';

import styles from './Kitchen.module.scss';

// STYLES-------------------------------------------------------------------
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#1A237E',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#E8EAF6',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#C5CAE9',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  cell1: {
    width: '10%',
  },
  cell2: {
    width: '20%',
  },
  cell3: {
    width: '60%',
  },
});

// COMPONENT---------------------------------------------------------------
const Kitchen = () => {
  const classes = useStyles();

  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);
  const [checked6, setChecked6] = useState(true);

  const handleChange = event => {
    setChecked1(event.target.checked1);
    setChecked2(event.target.checked2);
    setChecked3(event.target.checked3);
    setChecked4(event.target.checked4);
    setChecked5(event.target.checked5);
    setChecked5(event.target.checked5);
    setChecked6(event.target.checked6);
  };

  // DATA-------------------------------------------------------------------
  function createData(tableNr, orderNr, order, done) {
    return { tableNr, orderNr, order, done };
  }

  const rows = [
    createData(
      '1',
      '123',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked1}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    ),
    createData(
      '4',
      '234',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked2}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    ),
    createData(
      'delivery',
      'ABC245',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked3}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    ),
    createData(
      '3',
      '567',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked4}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    ),
    createData(
      'delivery',
      'ABC874',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked5}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    ),
    createData(
      'delivery',
      'ABC234',
      'MEAL DESCRIPTION',
      <Checkbox
        checked={checked6}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    ),
  ];

  return (
    <div className={styles.component}>
      <SubpageTitle title="Orders" subtitle="" />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customizedTable">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.cell1}>Table</StyledTableCell>
              <StyledTableCell className={classes.cell2} align="left">
                Order number
              </StyledTableCell>
              <StyledTableCell className={classes.cell3} align="left">
                Order details
              </StyledTableCell>
              <StyledTableCell className={classes.cell1} align="center">
                DONE
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.orderNr}>
                <StyledTableCell
                  className={styles.tableNr}
                  component="th"
                  scope="row"
                  align="left"
                >
                  {row.tableNr}
                </StyledTableCell>
                <StyledTableCell align="left">{row.orderNr}</StyledTableCell>
                <StyledTableCell align="left">{row.order}</StyledTableCell>
                <StyledTableCell align="center">{row.done}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Kitchen;
