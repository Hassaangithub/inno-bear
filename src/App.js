import React from 'react';
import './style.css';
import SignIn from './components/SignIn';
import Signup from './Pages/signup';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/home';

const App = () => {
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
