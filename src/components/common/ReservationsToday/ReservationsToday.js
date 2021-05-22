import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './ReservationsToday.module.scss';

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

function createData(name, reserved, free) {
  return { name, reserved, free };
}

const rows = [
  createData('1', 'X', ''),
  createData('2', 'X', ''),
  createData('3', 'X', ''),
  createData('4', 'X', ''),
  createData('5', 'X', ''),
  createData('6', 'X', ''),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ReservationsToday = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Table</StyledTableCell>
            <StyledTableCell align="center">9:00</StyledTableCell>
            <StyledTableCell align="center">9:30</StyledTableCell>
            <StyledTableCell align="center">10:00</StyledTableCell>
            <StyledTableCell align="center">10:30</StyledTableCell>
            <StyledTableCell align="center">11:00</StyledTableCell>
            <StyledTableCell align="center">11:30</StyledTableCell>
            <StyledTableCell align="center">12:00</StyledTableCell>
            <StyledTableCell align="center">12:30</StyledTableCell>
            <StyledTableCell align="center">13:00</StyledTableCell>
            <StyledTableCell align="center">13:30</StyledTableCell>
            <StyledTableCell align="center">14:00</StyledTableCell>
            <StyledTableCell align="center">14:30</StyledTableCell>
            <StyledTableCell align="center">15:00</StyledTableCell>
            <StyledTableCell align="center">15:30</StyledTableCell>
            <StyledTableCell align="center">16:00</StyledTableCell>
            <StyledTableCell align="center">16:30</StyledTableCell>
            <StyledTableCell align="center">17:00</StyledTableCell>
            <StyledTableCell align="center">17:30</StyledTableCell>
            <StyledTableCell align="center">18:00</StyledTableCell>
            <StyledTableCell align="center">18:30</StyledTableCell>
            <StyledTableCell align="center">19:00</StyledTableCell>
            <StyledTableCell align="center">19:30</StyledTableCell>
            <StyledTableCell align="center">20:00</StyledTableCell>
            <StyledTableCell align="center">20:30</StyledTableCell>
            <StyledTableCell align="center">21:00</StyledTableCell>
            <StyledTableCell align="center">21:30</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                className={styles.tableNr}
                component="th"
                scope="row"
                align="center"
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.free}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.free}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.free}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.free}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.free}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
              <StyledTableCell align="center">{row.reserved}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReservationsToday;

// function createData(
//   name,
//   h9m00,
//   h9m30,
//   h10m00,
//   h10m30,
//   h11m00,
//   h11m30,
//   h12m00,
//   h12m30,
//   h13m00,
//   h13m30,
//   h14m00,
//   h14m30,
//   h15m00,
//   h15m30,
//   h16m00,
//   h16m30,
//   h17m00,
//   h17m30,
//   h18m00,
//   h18m30,
//   h19m00,
//   h19m30,
//   h20m00,
//   h20m30,
//   h21m00,
//   h21m30
// ) {
//   return {
//     name,
//     h9m00,
//     h9m30,
//     h10m00,
//     h10m30,
//     h11m00,
//     h11m30,
//     h12m00,
//     h12m30,
//     h13m00,
//     h13m30,
//     h14m00,
//     h14m30,
//     h15m00,
//     h15m30,
//     h16m00,
//     h16m30,
//     h17m00,
//     h17m30,
//     h18m00,
//     h18m30,
//     h19m00,
//     h19m30,
//     h20m00,
//     h20m30,
//     h21m00,
//     h21m30,
//   };
// }