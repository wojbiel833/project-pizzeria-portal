import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  // cell10: {
  //   width: '10%',
  // },
  // cell20: {
  //   width: '20%',
  // },
  // cell60: {
  //   width: '60%',
  // },
});

// DATA-------------------------------------------------------------------
function createData(tableNr, orderNr, order, done) {
  return { tableNr, orderNr, order, done };
}

const rows = [
  createData('1', '123', 'MEAL DESCRIPTION', 'checkbox'),
  createData('4', '234', 'MEAL DESCRIPTION', 'checkbox'),
  createData('5', 'ABC234', 'MEAL DESCRIPTION', 'checkbox'),
];

// COMPONENT---------------------------------------------------------------
const Kitchen = () => {
  const classes = useStyles();

  return (
    <div className={styles.component}>
      <SubpageTitle title="Orders" subtitle="" />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customizedTable">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={1}>Table</StyledTableCell>
              <StyledTableCell colSpan={1} align="left">
                Order number
              </StyledTableCell>
              <StyledTableCell colSpan={4} align="left">
                Order details
              </StyledTableCell>
              <StyledTableCell colSpan={1} align="left">
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
                <StyledTableCell align="left">{row.done}</StyledTableCell>
                {/* <StyledTableCell align="left">{row.reserved}</StyledTableCell>
                <StyledTableCell align="left">{row.reserved}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Kitchen;
