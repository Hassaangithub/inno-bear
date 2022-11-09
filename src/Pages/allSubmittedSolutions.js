import React from 'react';
import {useNavigate} from 'react-router-dom';
import TopNav from '../components/TopNav';
import profileImg from '../images/profile-img.png';
import rectangle35 from '../images/rectangle-35.png';

const AllSubmittedSolutions = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopNav dashboard={true} />
      <div className="page-main-content mt-3 px-md-5 px-3">
        <div className="row mx-0">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h5>
              Submitted Challenges <small className="grey-txt">(8)</small>
            </h5>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main"
            role="button"
            onClick={() => navigate('/view-submitted-solution')}>
            <div className="p-3 current-challenge-block">
              <img src={rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <small className="mb-0">By</small>
              <div className="mt-2 d-flex ">
                <img
                  src={profileImg}
                  className="user-pic"
                  style={{height: '50px', width: '50px'}}
                />
                <img
                  src={profileImg}
                  className="user-pic"
                  style={{height: '50px', width: '50px'}}
                />
                <span className="user-pic d-flex justify-content-center text-white align-items-center ">
                  +3
                </span>
              </div>
              <small className="mb-0">Sept 24</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSubmittedSolutions;
