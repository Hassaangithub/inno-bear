import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('TOKEN');
    navigate('/');
  };
  return <button onClick={handleClick}>Logout</button>;
};

export default Home;
