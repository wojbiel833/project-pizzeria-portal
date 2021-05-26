import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import WaiterButtons from '../../common/WaiterButtons/WaiterButtons';

import styles from './Waiter.module.scss';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.string,
  };

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  render() {
    const {
      loading: { active, error },
      tables,
    } = this.props;

    const renderActions = status => {
      switch (status) {
        case 'free':
          return (
            <>
              <Button className={styles.link}>thinking</Button>
              <Button className={styles.link}>new order</Button>
            </>
          );
        case 'thinking':
          return <Button className={styles.link}>new order</Button>;
        case 'ordered':
          return <Button className={styles.link}>prepared</Button>;
        case 'prepared':
          return <Button className={styles.link}>delivered</Button>;
        case 'delivered':
          return <Button className={styles.link}>paid</Button>;
        case 'paid':
          return <Button className={styles.link}>free</Button>;
        default:
          return null;
      }
    };

    if (active || !tables.length) {
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
      <div className={styles.component}>
        <WaiterButtons />
        <div className={styles.table}>
          <Paper className={styles.component}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Order</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tables.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      {row.order && (
                        <Button
                          to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}
                          className={styles.link}
                        >
                          {row.order}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>{renderActions(row.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>;
    }
  }
}

export default Waiter;
