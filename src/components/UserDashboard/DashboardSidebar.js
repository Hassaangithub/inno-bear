import React from 'react';
import AccountAuthLogo from '../../images/account-auth-logo.png';
import {Link, useNavigate} from 'react-router-dom';
import Logout from '../../images/logout.png';
import {handleLogout} from '../../utility';

const DashboardSidebar = ({list}) => {
  const navigate = useNavigate();

  return (
    <>
      <div id="sideNavOverlay" className="d-none" />
      <div id="dashboardSidebar">
        <img
          src={AccountAuthLogo}
          onClick={() => navigate('/home')}
          role="button"
        />
        <aside className="side-nav">
          <ul className="mb-0 side-nav-links">
            {list?.map((item, index) => (
              <li key={index} className="position-relative">
                <Link to={item.path} className="d-block sidebar-links">
                  <img src={item.img} alt="fluent-people" className="mr-2" />
                  {item.title}
                </Link>
              </li>
            ))}

            <li className="position-relative">
              <a
                href="#"
                className="d-block sidebar-links"
                onClick={handleLogout}>
                <img src={Logout} alt="logout" className="mr-2" />
                Log out
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default DashboardSidebar;
