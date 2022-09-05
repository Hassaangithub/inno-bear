import React from 'react';
import './style.css';
import SignIn from './components/SignIn';
import Signup from './Pages/signup';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/home';
import Challenges from './Pages/challenges';
import ContactUs from './Pages/contactUs';
import Pricing from './Pages/pricing';
import HostChallenge from './Pages/hostChallenge';
import StarterKit from './Pages/starterKit';
import Faqs from './Pages/faqs';
import Help from './Pages/help';
import AboutUs from './Pages/aboutUs';
import PrivacyAndPolicy from './Pages/privacyAndPolicy';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/host-Challenge" element={<HostChallenge />} />
        <Route path="/starter-kit" element={<StarterKit />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy-&-policy" element={<PrivacyAndPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
