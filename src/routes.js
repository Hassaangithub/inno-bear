import React from 'react';
import SignIn from './components/SignIn';
import Signup from './Pages/signup';
import {Route, Routes, Outlet, Navigate} from 'react-router-dom';
import Home from './Pages/home';
import UserDashboard from './Pages/userDashboard';
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
import FundingSource from './Pages/FundingSource';
import EditProfile from './Pages/editProfile';

export const ProtectedRoutes = () => {
  const isLogin = localStorage.getItem('token');

  return isLogin ? <Outlet /> : <Navigate to="/sign-in" />;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/challenges" element={<ExploreChallenges />} />
      <Route path="/challenges/detail:id" element={<ChallengeDetail />} />
      <Route path="/team-detail" element={<TeamDetail />} />
      <Route path="/challenges/detail/view-team" element={<ViewTeams />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route
        path="/host-Challenge/funding-source"
        element={<FundingSource />}
      />
      <Route element={<ProtectedRoutes />}>
        <Route path="/host-Challenge" element={<HostChallenge />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Route>
      <Route path="/starter-kit" element={<StarterKit />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/help" element={<Help />} />
      <Route path="/privacy-&-policy" element={<PrivacyAndPolicy />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/challenges/create-solution" element={<CreateSolution />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
  );
};

export default Router;
