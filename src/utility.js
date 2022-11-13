// import {useNavigate} from 'react-router-dom';

export const handleLogout = () => {
  // const navigate = useNavigate();
  localStorage.removeItem('token');
  // navigate('/sign-in');
};

export const emailFirstLetter = () => {
  return localStorage.getItem('email');
};
