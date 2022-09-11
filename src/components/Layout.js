import React from 'react';
import Footer from './Footer';
import TopNav from './TopNav';

const Layout = ({children}) => {
  return (
    <>
      <TopNav />
      <div style={{paddingBottom: '22rem'}}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
