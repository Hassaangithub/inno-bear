import React from 'react';
import image1 from '../images/Ellipse-322.png';
import Banner from './challengesDetail/Banner';

const TeamDetail = () => {
  return (
    <>
      <Banner />
      <div className="challenges-pg px-md-5 px-3">
        <div className="my-4 d-flex flex-wrap flex-md-row flex-column flex-column-reverse justify-content-between team-project-section">
          <div>
            <p className="text-muted mb-2">Project Title</p>
            <h6 className="mb-3">
              Hydropower Operations Optimization (H2Os) Prize
            </h6>
            <p className="text-muted mb-2">Member count</p>
            <h6 className="mb-3">6 team members</h6>
            <p className="text-muted mb-2">Status</p>
            <h6>Actively looking for members</h6>
          </div>
          <div className="text-md-left text-center">
            <button className="btn">Request to join team</button>
          </div>
        </div>
        <h2 className="mt-md-5 text-center">Meet the team</h2>
        <div className="my-lg-5 my-3 d-flex flex-wrap justify-content-center meet-team-section">
          <div className="text-center">
            <div className="position-relative">
              <img src={image1} alt="Ellipse-1" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Jason</p>
            <h6 className="text-uppercase member-name">Peterson</h6>
            <p>Texas, USA</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={image1} alt="Ellipse-2" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Maria</p>
            <h6 className="text-uppercase member-name">Choi</h6>
            <p>Seoul, South Korea</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={image1} alt="Ellipse-3" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Donaldson</p>
            <h6 className="text-uppercase member-name">Reddington</h6>
            <p>Kiev, Russia</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={image1} alt="Ellipse-4" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Alfred</p>
            <h6 className="text-uppercase member-name">Nakatani</h6>
            <p>Tokyo, Japan</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={image1} alt="Ellipse-5" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Lupita</p>
            <h6 className="text-uppercase member-name">Nyongo</h6>
            <p>Accra, Ghana</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={image1} alt="Ellipse-6" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Jane</p>
            <h6 className="text-uppercase member-name">Houston</h6>
            <p>Madrid, Spain</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetail;
