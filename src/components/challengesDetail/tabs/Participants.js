import React from 'react';
import {useNavigate} from 'react-router-dom';
import image1 from '../../../images/Ellipse-322.png';

export const Participants = () => {
  const navigate = useNavigate();
  return (
    <div
      className="py-md-4 py-3"
      id="participant"
      role="tabpanel"
      aria-labelledby="participantTab">
      <div className="mb-md-5 mb-3">
        <div className="mb-2 d-flex flex-wrap justify-content-between align-items-center">
          <h3 className="mb-0">Teams</h3>
          {/* <a href="#" className="view-more" role="button">
            View more
          </a> */}
        </div>
        <p className="team-txt">
          COMING SOON: Find teams with capacity for additional teammates here
        </p>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-md-4 mb-3">
            <div className="card p-4 align-items-center">
              <img src={image1} alt="Ellipse-175" className="prof-img" />
              <h6 className="mt-3 mb-2">Your Team Name Here</h6>
              <p>{/* 1 team member- 2 <a href="#">open slots</a> */}</p>
              <a
                role="button"
                className="text-muted"
                // onClick={() => navigate('/challenges/detail/view-team')}
              >
                View<span className="fa fa-eye ml-2"></span>
              </a>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-4 col-sm-6 mb-md-4 mb-3">
            <div className="card p-4 align-items-center">
              <img src={image1} alt="Ellipse-175" className="prof-img" />
              <h6 className="mt-3 mb-2">Robert Kirkwood's team</h6>
              <p>
                1 team member- 2 <a href="#">open slots</a>
              </p>
              <a
                className="text-muted"
                role="button"
                onClick={() => navigate('/challenges/detail/view-team')}>
                View<span className="fa fa-eye ml-2"></span>
              </a>
            </div>
          </div> */}
        </div>
        <div className="mb-2 d-flex flex-wrap justify-content-between align-items-center">
          <h3 className="mb-0">Individuals</h3>
          {/* <a href="#" className="view-more">
            View more
          </a> */}
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6 mb-md-4 mb-3">
            <div className="card p-4 align-items-center">
              <img src={image1} alt="Ellipse-175" className="prof-img" />
              <h6 className="mt-3 mb-2">Your Team Name Here</h6>
              <p>{/* Nevada, USA */}</p>
              <a
                className="text-muted"
                role="button"
                // onClick={() => navigate('/challenges/detail/view-team')}
              >
                View<span className="fa fa-eye ml-2"></span>
              </a>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-4 col-sm-6 mb-md-4 mb-3">
            <div className="card p-4 align-items-center">
              <img src={image1} alt="Ellipse-175" className="prof-img" />
              <h6 className="mt-3 mb-2">Faridah Mohammed</h6>
              <p>Abu Dhabi, UAE</p>
              <a
                className="text-muted"
                role="button"
                onClick={() => navigate('/challenges/detail/view-team')}>
                View<span className="fa fa-eye ml-2"></span>
              </a>
            </div> 
          </div>*/}
        </div>
      </div>
    </div>
  );
};
