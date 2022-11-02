import React from 'react';
import Layout from '../components/Layout';
import Image1 from '../images/bank-transfer-1.png';
import Image2 from '../images/bank-transfer-2.png';
import Image3 from '../images/bank-transfer-3.png';
import Image4 from '../images/bank-transfer-4.png';

const FundingSource = () => {
  return (
    <Layout>
      <div className="page-main-content mt-3 px-md-5 px-3">
        <div className="col-xl-6 mx-auto">
          <h2 className="text-center">
            Connect a <span className="orange h2">Funding</span> Source
          </h2>
          <p className="text-center mb-0">
            Choose the funding method you will use to provide your prize awards.
            You don't have to complete this step now, but it should be completed
            within 5 days of your challenge live date, to get your badge showing
            brilliant minds that your challenge is ready, funded, and open for
            ideas
          </p>
        </div>
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mb-md-5 mb-3 mx-auto p-0 steps-model funding-method">
          <h5 className="mb-0 text-center p-4 main-heading">
            Choose a Funding Method
          </h5>
          <div className="d-flex justify-content-between p-4">
            <div className="d-flex flex-column align-items-center">
              <span className="img-holder">
                <img src={Image1} alt="bank-transfer-1" />
              </span>
              <small className="grey-text">Wire Transfer</small>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span className="img-holder active">
                <img src={Image2} alt="bank-transfer-2" />
              </span>
              <small className="grey-text active">Wire Transfer</small>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span className="img-holder">
                <img src={Image3} alt="bank-transfer-3" />
              </span>
              <small className="grey-text">Wire Transfer</small>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span className="img-holder">
                <img src={Image4} alt="bank-transfer-4" />
              </span>
              <small className="grey-text">Wire Transfer</small>
            </div>
          </div>
          <form className="px-4 pb-5">
            <div className="w-100 form-group mb-sm-4 mb-3">
              <h6>Cardholder’s Name</h6>
              <input type="text" className="form-control" />
            </div>
            <div className="w-100 form-group mb-sm-4 mb-3">
              <h6>Card Number</h6>
              <input type="text" className="form-control" />
            </div>
            <div className="form-row">
              <div className="form-group col-6">
                <h6>CVV</h6>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-6">
                <h6>Date</h6>
                <input type="datetime-local" className="form-control" />
              </div>
            </div>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="chalOne"
              />
              <label
                className="my-1 custom-control-label pass-below-text"
                htmlFor="chalOne">
                Save my funding details for future challenges
              </label>
            </div>
            <div className="mt-xl-5 mt-sm-4 mt-3 text-center">
              <button type="submit" className="w-100 mb-3 btn text-white">
                Add Funding Method
              </button>
              <a href="#">
                <h6 className="d-inline">Do this later</h6>
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default FundingSource;
