import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import TopNav from '../components/TopNav';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('TOKEN');
    navigate('/');
  };
  return (
    <Layout>
      <div className="page-main-content px-sm-4 px-3">
        <h1>Welcome</h1>
        <button onClick={handleClick}>Logout</button>
      </div>
    </Layout>
  );
};

export default Home;
