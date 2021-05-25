import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import styles from './Buttons.module.scss';

const Buttons = ({ name, to }) => (
  <div className={styles.component}>
    <div className="nav">
      <Button
        component={Link}
        className={styles.link}
        // key={link.name}
        to={`${process.env.PUBLIC_URL}${to}`}
      >
        {name}
      </Button>
    </div>
  </div>
);

Buttons.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
};

export default Buttons;
