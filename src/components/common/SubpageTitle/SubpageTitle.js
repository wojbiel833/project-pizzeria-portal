import React from 'react';
import PropTypes from 'prop-types';

import styles from './SubpageTitle.module.scss';

const SubpageTitle = ({ title, subtitle }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.text}>{title}</h2>
      <h2 className={styles.text}>{subtitle}</h2>
    </div>
  );
};

SubpageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SubpageTitle;
