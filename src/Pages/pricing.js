import React from 'react';
import Layout from '../components/Layout';

const Pricing = () => {
  return (
    <Layout>
      <div className="page-main-content mt-3 px-md-5 px-3">
        <h3 className="text-center">
          Let’s pick the perfect plan and get those ideas flowing your way
        </h3>
        <div className="col-sm-10 mx-auto">
          <p className="text-center mb-0">
            Pricing is based on the desired challenge purse size. The more you
            provide in awards to all the brilliant minds solving your challenge,
            the lower the fee, but with a package of custom sucess support
            regardless of your award amount.
          </p>
          <p className="text-center">
            Get going...risk free: Get started on your challenge design now for
            free and get billed only after you've made your challenge live
          </p>
          <p className="text-center">
            Interested in hosting multiple challenges?"{' '}
            <span className="orange contact-us-txt">Contact Us</span> for
            Special Pricing
          </p>
        </div>
        <div className="choose-plan-block my-lg-5 mt-4 mb-5">
          <div className="px-lg-4 py-lg-5 p-sm-4 p-3 choose-plan-inside">
            <h2 className="text-center heading">Grizzly</h2>
            <h1 className="mb-1 text-center">
              20 <span className="h4 percent-sign">%</span>
            </h1>
            <p className="mb-2 text-muted text-center">of prize purse</p>
            <h6 className="text-center mb-0 orange">Under $250K</h6>
            <a className="px-md-5 white-btn btn w-100 my-4">Begin Grizzly</a>
            <ul className="list-style-none">
              <li className="d-flex align-items-center mb-3">
                <span className="fa fa-check check-mark mr-4"></span>Challenge
                Hosting on InnoBear
              </li>
              <li className="d-flex align-items-center mb-3">
                <span className="fa fa-check check-mark mr-4"></span>On-Demand
                Access to a Challenge Genius
              </li>
              <li className="d-flex align-items-center mb-3">
                <span className="fa fa-check check-mark mr-4"></span>Custom
                Challenge Blueprint
              </li>
              <li className="d-flex align-items-center mb-3">
                <span className="fa fa-check check-mark mr-4"></span>Innovation
                Template Library Access
              </li>
              <li className="d-flex align-items-center mb-3">
                <span className="fa fa-check check-mark mr-4"></span>Insights &
                Analytics
              </li>
              <li className="d-flex align-items-center mb-3">
                <span className="fa fa-check check-mark mr-4"></span>Brillance
                Participant Pool Selections
              </li>
            </ul>
          </div>
          <div className="px-lg-4 py-lg-5 p-sm-4 p-3 my-sm-0 my-3 choose-plan-inside">
            <h2 className="text-center heading">Panda</h2>
            <h1 className="mb-1 text-center">
              15 <span className="h4 percent-sign">%</span>
            </h1>
            <p className="mb-2 text-muted text-center">of prize purse</p>
            <h6 className="text-center mb-0 orange">
              $250k - under $1 million
            </h6>
            <a className="px-md-5 white-btn btn w-100 my-4">Begin Panda</a>
            <h6 className="mb-3">Everything in first tier plus:</h6>
            <ul className="list-style-none">
              <li className="d-flex align-items-center mb-3">
                <span className="fa fa-check check-mark mr-4"></span>Dedicated
                Challenge Genius
              </li>
            </ul>
          </div>
          <div className="px-lg-4 py-lg-5 p-sm-4 p-3 choose-plan-inside">
            <h2 className="text-center heading">Polar</h2>
            <h1 className="mb-1 text-center">
              10 <span className="h4 percent-sign">%</span>
            </h1>
            <p className="mb-2 text-muted text-center">of prize purse</p>
            <h6 className="text-center mb-0 orange">$1million+</h6>
            <a className="px-md-5 white-btn btn w-100 my-4">Begin Polar</a>
            <h6 className="mb-3">Everything in second tier plus:</h6>
            <ul className="list-style-none">
              <li className="d-flex align-items-center mb-3">
                <span className="fa fa-check check-mark mr-4"></span>
                Post-challenge winners webinar production
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
