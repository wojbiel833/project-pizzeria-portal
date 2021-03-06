import React from 'react';
import PropTypes from 'prop-types';

import {
  createMuiTheme,
  withStyles,
  // makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { green, red } from '@material-ui/core/colors';

import styles from './AddBooking.module.scss';

// STYLES ----------------------------------------------------------------
// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   table: {
//     minWidth: 700,
//   },
// }));

// BUTTONS STYLES --------------------------------------------------------

const theme1 = createMuiTheme({
  palette: {
    primary: green,
  },
});
const theme2 = createMuiTheme({
  palette: {
    primary: red,
  },
});

// TABLE STYLES ----------------------------------------------------------
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

// COMPONENT -------------------------------------------------------------

class AddBooking extends React.Component {
  static propTypes = {
    fetchReservations: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    reservations: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    // id: PropTypes.string,
  };

  componentDidMount() {
    const { fetchReservations } = this.props;
    fetchReservations();
  }

  render() {
    // const classes = useStyles();
    const {
      loading: { active, error },
      reservations,
    } = this.props;

    const free = (
      <ThemeProvider theme={theme1}>
        <Button
          variant="contained"
          color="primary"
          // className={classes.margin}
        >
          Free
        </Button>
      </ThemeProvider>
    );

    const reserved = (
      <ThemeProvider theme={theme2}>
        <Button
          variant="contained"
          color="primary"
          // className={classes.margin}
          disabled
        >
          Reserved
        </Button>
      </ThemeProvider>
    );

    function createData(name, reserved, free) {
      return { name, reserved, free };
    }

    const rows = [
      createData('1', reserved, free),
      createData('2', reserved, free),
      createData('3', reserved, free),
      createData('4', reserved, free),
      createData('5', reserved, free),
      createData('6', reserved, free),
    ];

    if (active || !reservations.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <div className={styles.component}>
          <TableContainer component={Paper}>
            <Table
              // className={classes.table}
              aria-label="customized table"
            >
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
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.free}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.free}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.free}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.free}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.free}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.reserved}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
    }
  }
}

export default AddBooking;
