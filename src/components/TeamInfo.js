import React from 'react';
import image1 from '../images/Ellipse-322.png';
import Banner from './challengesDetail/Banner';

const TeamDetail = () => {
  return (
    <>
      <Banner />
      <div class="challenges-pg px-md-5 px-3">
        <div class="my-4 d-flex flex-wrap flex-md-row flex-column flex-column-reverse justify-content-between team-project-section">
          <div>
            <p class="text-muted mb-2">Project Title</p>
            <h6 class="mb-3">
              Hydropower Operations Optimization (H2Os) Prize
            </h6>
            <p class="text-muted mb-2">Member count</p>
            <h6 class="mb-3">6 team members</h6>
            <p class="text-muted mb-2">Status</p>
            <h6>Actively looking for members</h6>
          </div>
          <div class="text-md-left text-center">
            <button class="btn">Request to join team</button>
          </div>
        </div>
        <h2 class="mt-md-5 text-center">Meet the team</h2>
        <div class="my-lg-5 my-3 d-flex flex-wrap justify-content-center meet-team-section">
          <div class="text-center">
            <div class="position-relative">
              <img src={image1} alt="Ellipse-1" class="ellipse-img" />
              <span class="position-absolute yello-circle"></span>
            </div>
            <p class="mt-lg-4 mt-2 mb-2">Jason</p>
            <h6 class="text-uppercase member-name">Peterson</h6>
            <p>Texas, USA</p>
          </div>
          <div class="text-center">
            <div class="position-relative">
              <img src={image1} alt="Ellipse-2" class="ellipse-img" />
              <span class="position-absolute yello-circle"></span>
            </div>
            <p class="mt-lg-4 mt-2 mb-2">Maria</p>
            <h6 class="text-uppercase member-name">Choi</h6>
            <p>Seoul, South Korea</p>
          </div>
          <div class="text-center">
            <div class="position-relative">
              <img src={image1} alt="Ellipse-3" class="ellipse-img" />
              <span class="position-absolute yello-circle"></span>
            </div>
            <p class="mt-lg-4 mt-2 mb-2">Donaldson</p>
            <h6 class="text-uppercase member-name">Reddington</h6>
            <p>Kiev, Russia</p>
          </div>
          <div class="text-center">
            <div class="position-relative">
              <img src={image1} alt="Ellipse-4" class="ellipse-img" />
              <span class="position-absolute yello-circle"></span>
            </div>
            <p class="mt-lg-4 mt-2 mb-2">Alfred</p>
            <h6 class="text-uppercase member-name">Nakatani</h6>
            <p>Tokyo, Japan</p>
          </div>
          <div class="text-center">
            <div class="position-relative">
              <img src={image1} alt="Ellipse-5" class="ellipse-img" />
              <span class="position-absolute yello-circle"></span>
            </div>
            <p class="mt-lg-4 mt-2 mb-2">Lupita</p>
            <h6 class="text-uppercase member-name">Nyongo</h6>
            <p>Accra, Ghana</p>
          </div>
          <div class="text-center">
            <div class="position-relative">
              <img src={image1} alt="Ellipse-6" class="ellipse-img" />
              <span class="position-absolute yello-circle"></span>
            </div>
            <p class="mt-lg-4 mt-2 mb-2">Jane</p>
            <h6 class="text-uppercase member-name">Houston</h6>
            <p>Madrid, Spain</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetail;
