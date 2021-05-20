import React from 'react';
import PropTypes from 'prop-types';

import PageNav from './../PageNav/PageNav';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';

const MainLayout = ({ children }) => (
  <div className="MainLayout">
    <PageNav />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
