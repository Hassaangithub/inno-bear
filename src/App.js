import React, {useEffect} from 'react';
import './style.css';
import SignIn from './components/SignIn';
import SignupStepOne from './components/SignupStepOne';
import SignupStepTwo from './components/SignupStepTwo';
import SignupStepThree from './components/SignupStepThree';
import Signup from './Pages/signup';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from './Pages/home';

const App = () => {
  const navigate = useNavigate();

  console.log('app');
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
      {/* <SignIn /> */}
      {/* <SignupStepOne /> */}
      {/* <SignupStepTwo /> */}
      {/* <SignupStepThree /> */}
      {/* <Signup /> */}
    </>
  );
};

export default App;
