import React from 'react';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';

const Header = ({ titleText, imageSrc }) => (
  <div className={styles.component}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} src={imageSrc} alt="welcome" />
  </div>
);

Header.propTypes = {
  titleText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Header;
