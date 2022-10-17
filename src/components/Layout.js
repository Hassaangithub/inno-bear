import React from 'react';
import Footer from './Footer';
import TopNav from './TopNav';
import { Offline, Online } from "react-detect-offline";


const Layout = ({children}) => {
  return (
    <>
      <TopNav />
      <Offline><div className="W-100   bg-warning bg-gradient d-flex justify-content-center align-item-center" style={{height:"58px"}}><p className="text-danger mt-3" >Internet Disconnected!</p></div></Offline>
      <div style={{paddingBottom: '22rem'}}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
