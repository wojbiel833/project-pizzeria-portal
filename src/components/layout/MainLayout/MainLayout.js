import React from 'react';
import PropTypes from 'prop-types';

import Header from './../../common/Header/Header';
import PageNav from './../PageNav/PageNav';
import Footer from '../../common/Footer/Footer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const MainLayout = ({ children }) => (
  <div className="MainLayout">
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PageNav />
        </Toolbar>
      </Container>
    </AppBar>
    <Header
      titleText="Welcome in our restaurant!"
      imageSrc="https://i.ibb.co/54K5XtY/2194675.jpg"
    />
    <Container maxWidth="lg">
      {/* <Toolbar /> */}
      {children}
    </Container>

    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
