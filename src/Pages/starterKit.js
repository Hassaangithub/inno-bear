import React from 'react';
import Layout from '../components/Layout';
import scienceHromatic from '../images/science-hromatic.png';
import img1 from '../images/img-1.png';
import img2 from '../images/img-2.png';
import img3 from '../images/img-3.png';
import img4 from '../images/img-4.png';
import img5 from '../images/img-5.png';
import rafiki1 from '../images/rafiki1.png';
import rafiki from '../images/rafiki.png';
import pana from '../images/pana.png';
import rectangle60 from '../images/Rectangle-60.png';
import rectangle61 from '../images/Rectangle-61.png';
import rectangle62 from '../images/Rectangle-62.png';
import rectangle63 from '../images/Rectangle-63.png';
import rectangle64 from '../images/Rectangle-64.png';
import {useNavigate} from 'react-router-dom';

const StarterKit = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="started-kit-pg px-md-5 px-3">
        <div className="row my-sm-5 my-3 content-w-side-img">
          <div className="col-sm-7 side-img-content">
            <h4 className="col-xl-10 px-0 mb-sm-4 mb-0 blue-orange-heading">
              Get started with our{' '}
              <span className="h4 orange">Starter Kit</span> today
            </h4>
            <p className="col-xl-10 px-0 mb-0 paragraph">
              Let’s face it, putting together a challenge has a few components
              to it that will need special attention. Things like rules, judging
              criteria, and submission package. You know what you need solutions
              for and we can help you quickly fill the gap with our Challenge
              Starter Kit’s.
            </p>
            <button
              className="btn text-white"
              onClick={() => {
                if (localStorage.getItem('token')) {
                  navigate('/host-challenge');
                } else {
                  navigate('/sign-in');
                }
              }}>
              Get Started
            </button>
          </div>
          <div className="col-sm-5">
            <img
              src={scienceHromatic}
              alt="science-hromatic"
              className="w-100"
            />
          </div>
        </div>
        <h2 className="mt-md-5 mt-3">Setting up your challenge</h2>
        <p className="mb-md-4">
          While setting up your challenge you’ll be able to choose a custom
          Starter Kit based on your challenge type
        </p>
        <div className="row">
          <div className="col-lg-4 col-sm-6 text-md-left text-center mb-lg-5 mb-4">
            <img src={img1} alt="img-1" className="challenge-img" />
            <h5 className="mt-3 mb-2">Ideation</h5>
            <p className="mb-0">
              To come up or generate new ideas, addressing a specific question
              or problem.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 px-lg-5 text-md-left text-center mb-lg-5 mb-4">
            <img src={img2} alt="img-1" className="challenge-img" />
            <h5 className="mt-3 mb-2">Build</h5>
            <p className="mb-0">
              This type of challenges looks for participants to build
              prototypes, services or products that address a specific problem.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 text-md-left text-center mb-lg-5 mb-4">
            <img src={img3} alt="img-1" className="challenge-img" />
            <h5 className="mt-3 mb-2">Engagement</h5>
            <p className="mb-0">
              This challenge asks participants to raise awareness, build
              communities, educate or mobilize people around a topic.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 text-md-left text-center mb-lg-5 mb-4">
            <img src={img4} alt="img-1" className="challenge-img" />
            <h5 className="mt-3 mb-2">Analysis/open data</h5>
            <p className="mb-0">
              This type of challenge seeks answer through data and/or data
              analytics.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 px-lg-5 text-md-left text-center mb-0">
            <img src={img5} alt="img-1" className="challenge-img" />
            <h5 className="mt-3 mb-2">Acceleration</h5>
            <p className="mb-0">
              This innovation challenge types takes things like prototypes or
              pilots and asks participants to help move them to the next phase.
            </p>
          </div>
        </div>
        <h2 className="mt-md-5 mt-3">Starter kit features</h2>
        <p className="mb-md-4">
          Each Starter Kit, does your heavy lifting with the following
          pre-designed and customizable items:
        </p>
        <div className="row">
          <div className="col-sm-4">
            <h5 className="mb-md-4 text-sm-left text-center">
              Challenge Rules
            </h5>
            <img src={rafiki1} alt="rafiki" className="w-100 kit-feature-img" />
          </div>
          <div className="col-sm-4 my-sm-0 my-4">
            <h5 className="mb-md-4 text-sm-left text-center">
              Winning Criteria
            </h5>
            <img src={pana} alt="pana" className="w-100 kit-feature-img" />
          </div>
          <div className="col-sm-4">
            <h5 className="mb-md-4 text-sm-left text-center">
              Submission Package Design
            </h5>
            <img src={rafiki} alt="rafiki" className="w-100 kit-feature-img" />
          </div>
        </div>
        <p className="my-md-5 my-3">
          Additionally, you’ll have step by step on-screen design support,
          access to navigate the Innovation Template Library, and on-demand
          access to a Challenge Genius.
        </p>
        <div className="row align-items-center mb-sm-5 mb-4">
          <div className="col-lg-6">
            <h2 className="mb-md-4 mb-3">
              The <span className="h2 orange">InnoBearTM</span> Difference
            </h2>
            <p>
              Shh…our secret sauce is in our proprietary Brilliance Participant
              Pool method and engagement. Said simply the depth, and quality,
              and inventiveness of your solution is based on the brilliant minds
              that accept your challenge and send through a submission.
            </p>
            <p>
              Our Brilliance Participant Pool method ensures a diverse
              population of brilliant minds, and through a series of
              omni-channel technologies increases the likelihood that a
              participant that registers for the challenge, actually completes
              it.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="mt-lg-0 mt-sm-4 d-flex justify-content-lg-end justify-content-center inno-images-gap">
              <div className="d-flex flex-column inno-images-gap">
                <img
                  src={rectangle60}
                  alt="Rectangle-60"
                  className="w-100 h-100"
                />
                <img
                  src={rectangle64}
                  alt="Rectangle-64"
                  className="w-100 h-100"
                />
              </div>
              <div>
                <img
                  src={rectangle62}
                  alt="Rectangle-62"
                  className="w-100 h-100"
                />
              </div>
              <div className="d-flex flex-column inno-images-gap">
                <img
                  src={rectangle63}
                  alt="Rectangle-63"
                  className="w-100 h-100"
                />
                <img
                  src={rectangle61}
                  alt="Rectangle-61"
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StarterKit;
