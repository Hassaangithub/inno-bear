// import {useNavigate} from 'react-router-dom';

export const handleLogout = () => {
  // const navigate = useNavigate();
  localStorage.removeItem('token');
  // navigate('/sign-in');
};
