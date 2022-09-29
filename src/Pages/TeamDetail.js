import React from 'react';
import Layout from '../components/Layout';
import rectangle55 from '../images/Rectangle-55.png';
import ellipse1 from '../images/Ellipse-1.png';
import ellipse2 from '../images/Ellipse-2.png';
import ellipse3 from '../images/Ellipse-3.png';
import ellipse4 from '../images/Ellipse-4.png';
import ellipse5 from '../images/Ellipse-5.png';
import ellipse6 from '../images/Ellipse-6.png';

const TeamDetail = () => {
  return (
    <Layout>
      <div className="position-relative">
        <img src={rectangle55} alt="banner-img" className="w-100" />
        <div className="position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center banner-block">
          <h1 className="text-white">Robert Kirkwood's team</h1>
        </div>
      </div>
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
              <img src={ellipse1} alt="Ellipse-1" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Jason</p>
            <h6 className="text-uppercase member-name">Peterson</h6>
            <p>Texas, USA</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={ellipse2} alt="Ellipse-2" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Maria</p>
            <h6 className="text-uppercase member-name">Choi</h6>
            <p>Seoul, South Korea</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={ellipse3} alt="Ellipse-3" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Donaldson</p>
            <h6 className="text-uppercase member-name">Reddington</h6>
            <p>Kiev, Russia</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={ellipse4} alt="Ellipse-4" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Alfred</p>
            <h6 className="text-uppercase member-name">Nakatani</h6>
            <p>Tokyo, Japan</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={ellipse5} alt="Ellipse-5" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Lupita</p>
            <h6 className="text-uppercase member-name">Nyongo</h6>
            <p>Accra, Ghana</p>
          </div>
          <div className="text-center">
            <div className="position-relative">
              <img src={ellipse6} alt="Ellipse-6" className="ellipse-img" />
              <span className="position-absolute yello-circle"></span>
            </div>
            <p className="mt-lg-4 mt-2 mb-2">Jane</p>
            <h6 className="text-uppercase member-name">Houston</h6>
            <p>Madrid, Spain</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamDetail;
