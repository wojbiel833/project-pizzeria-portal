import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import WaiterButtons from '../../common/WaiterButtons/WaiterButtons';

import styles from './Waiter.module.scss';

const demoContent = [
  { id: '1', status: 'free', order: null },
  { id: '2', status: 'thinking', order: null },
  { id: '3', status: 'ordered', order: 123 },
  { id: '4', status: 'prepared', order: 234 },
  { id: '5', status: 'delivered', order: 345 },
  { id: '6', status: 'paid', order: 456 },
];

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

const Waiter = id => (
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
            {demoContent.map(row => (
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
  </div>
);

export default Waiter;
