import React from 'react';
import ProfileImage from '../../images/profile-img.png';

const ProjectAdmin = () => {
  return (
    <div className="col-xl-4 col-sm-5">
      <div className="p-4 box-shadow project-admins-block">
        <h5 className="mb-4">Project Admins</h5>
        <div className="d-flex flex-wrap align-items-center mb-4 project-admins">
          <img src={ProfileImage} alt="profile-img" />
          <div className="ml-3">
            <p className="mb-0 name">Jennifer Okoro</p>
            <p className="mb-0 email">jennifer@xyzmail.com</p>
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center mb-4 project-admins">
          <img src={ProfileImage} alt="profile-img" />
          <div className="ml-3">
            <p className="mb-0 name">Jennifer Okoro</p>
            <p className="mb-0 email">jennifer@xyzmail.com</p>
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center mb-4 project-admins">
          <img src={ProfileImage} alt="profile-img" />
          <div className="ml-3">
            <p className="mb-0 name">Jennifer Okoro</p>
            <p className="mb-0 email">jennifer@xyzmail.com</p>
          </div>
        </div>
        <button className="theme-link">
          <span className="mr-3 fa fa-plus"></span>Add admin
        </button>
      </div>
    </div>
  );
};

export default ProjectAdmin;
