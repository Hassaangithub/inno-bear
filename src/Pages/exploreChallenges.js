import React from 'react';
import Layout from '../components/Layout';
import image1 from '../images/rectangle-35.png';
import image2 from '../images/challege.png';

const ExploreChallenges = () => {
  return (
    <Layout>
      <div className="page-main-content mt-3 px-md-5 px-3">
        <h2 className="text-center">Explore all Challenges</h2>
        <p className="text-center mb-0">
          Discover current challenges seeking solutions
        </p>
        <div className="row mt-lg-5 mt-4 mb-3">
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img src={image1} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src={image2} alt="challege" />
                <div className="ml-3">
                  <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                  <p className="mb-0 font-14">14 January, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img src={image1} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src={image2} alt="challege" />
                <div className="ml-3">
                  <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                  <p className="mb-0 font-14">14 January, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExploreChallenges;
