import React from 'react';
import SignIn from './components/SignIn';
import Signup from './Pages/signup';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/home';
import Challenges from './Pages/TeamDetail';
import ContactUs from './Pages/contactUs';
import Pricing from './Pages/pricing';
import HostChallenge from './Pages/hostChallenge';
import StarterKit from './Pages/starterKit';
import Faqs from './Pages/faqs';
import Help from './Pages/help';
import AboutUs from './Pages/aboutUs';
import PrivacyAndPolicy from './Pages/privacyAndPolicy';
import ExploreChallenges from './Pages/exploreChallenges';
import TeamDetail from './Pages/TeamDetail';
import ChallengeDetail from './Pages/challengeDetail';
import ViewTeams from './Pages/viewTeams';
import CreateSolution from './Pages/CreateSolution';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/challenges" element={<ExploreChallenges />} />
      <Route path="/challenges/detail:id" element={<ChallengeDetail />} />
      <Route path="/team-detail" element={<TeamDetail />} />
      <Route path="/challenges/detail/view-team" element={<ViewTeams />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/host-Challenge" element={<HostChallenge />} />
      <Route path="/starter-kit" element={<StarterKit />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/help" element={<Help />} />
      <Route path="/privacy-&-policy" element={<PrivacyAndPolicy />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/challenges/create-solution" element={<CreateSolution />} />
    </Routes>
  );
};

export default Router;
