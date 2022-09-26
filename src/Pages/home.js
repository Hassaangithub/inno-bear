import React,{useEffect} from 'react';
// import {useNavigate} from 'react-router-dom';
import Layout from '../components/Layout';
import group1726 from '../images/Group-1726.png';
import rectangle35 from '../images/rectangle-35.png';
import challenge from '../images/challege.png';
import draw1 from '../images/draw-1.png';
import draw2 from '../images/draw-2.png';
import draw3 from '../images/draw-3.png';
import draw4 from '../images/draw-4.png';
import scienceHaromatic from '../images/science-hromatic.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate();
  // const handleClick = () => {
  //   localStorage.removeItem('TOKEN');
  //   navigate('/sign-in');
  // };




  return (
    <Layout>
      <div className="px-md-5 px-3">
        <div className="row mt-lg-5 mt-3 content-w-side-img">
          <div className="col-sm-7 side-img-content">
            <h4 className="col-xl-11 px-0 mb-sm-4 mb-0 blue-orange-heading">
              Bring <span className="orange">Ideas</span> Together To Solve
              Problems
            </h4>
            <p className="mb-0 col-xl-10 px-0 paragraph">
              Brilliant minds are EVERYWHERE. Getting a solution to your
              problem, or creating the next great breakthrough innovation, is
              only a few humans away. Tap into human minds across the globe with
              a challenge prize competition, and watch the solutions roll in.
            </p>
            <button className="btn">Get Started</button>
          </div>
          <div className="col-sm-5">
            <img src={group1726} alt="Group-1726" className="w-100" />
          </div>
        </div>
        <h2 className="text-center mt-md-5 mt-3">Current Challenges</h2>
        <p className="text-center mb-0">
          Discover current challenges seeking solutions
        </p>
        <div className="row mt-lg-5 mt-4">
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img
                rectangle35
                src={rectangle35}
                alt="rectangle-35"
                className="w-100"
              />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src="images/challege.png" alt="challege" />
                <div className="ml-3">
                  <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                  <p className="mb-0 font-14">14 January, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img src={rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src="images/challege.png" alt="challege" />
                <div className="ml-3">
                  <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                  <p className="mb-0 font-14">14 January, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img src={rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src="images/challege.png" alt="challege" />
                <div className="ml-3">
                  <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                  <p className="mb-0 font-14">14 January, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img src={rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src="images/challege.png" alt="challege" />
                <div className="ml-3">
                  <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                  <p className="mb-0 font-14">14 January, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img src={rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src="images/challege.png" alt="challege" />
                <div className="ml-3">
                  <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                  <p className="mb-0 font-14">14 January, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img src={rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src="images/challege.png" alt="challege" />
                <div className="ml-3">
                  <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                  <p className="mb-0 font-14">14 January, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img src={rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src="images/challege.png" alt="challege" />
                <div className="ml-3">
                  <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                  <p className="mb-0 font-14">14 January, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
            <div className="p-3 current-challenge-block">
              <img src={rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p>Theoretical</p>
              <div>
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
              </div>
              <div className="d-flex align-items-center mt-md-4 mt-3">
                <img src="images/challege.png" alt="challege" />
                <div className="ml-3" />
                <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                <p className="mb-0 font-14">14 January, 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3">
          <div className="p-3 current-challenge-block">
            <img src={rectangle35} alt="rectangle-35" className="w-100" />
            <h6 className="mt-3 mb-2">
              Healthy food and exercise routine for health
            </h6>
            <p>Theoretical</p>
            <div>
              <span className="orange-txt">Award</span>
              <span className="grey-txt">$20,000</span>
            </div>
            <div className="d-flex align-items-center mt-md-4 mt-3">
              <img src={challenge} alt="challege" />
              <div className="ml-3">
                <p className="mb-0 text-dark font-14">Cipay Agustrian</p>
                <p className="mb-0 font-14">14 January, 2020</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center my-md-5 mt-3">How it Works</h2>
        <div className="row how-it-works">
          <div className="col-lg-3 col-sm-6 mb-md-0 mb-3">
            <img src={draw1} alt="draw-1" className="w-100 draw-img" />
            <h4 className="mt-md-4 mb-3 d-inline-flex justify-content-center align-items-center draw-number">
              1
            </h4>
            <p>Sign up or log into your account</p>
          </div>
          <div className="col-lg-3 col-sm-6 mb-md-0 mb-3">
            <img src={draw2} alt="draw-2" className="w-100 draw-img" />
            <h4 className="mt-md-4 mb-3 d-inline-flex justify-content-center align-items-center draw-number">
              2
            </h4>
            <p>Create your challenge and pick a "brlliant minds" pool.</p>
          </div>
          <div className="col-lg-3 col-sm-6 mb-md-0 mb-3">
            <img src={draw3} alt="draw-3" className="w-100 draw-img" />
            <h4 className="mt-md-4 mb-3 d-inline-flex justify-content-center align-items-center draw-number">
              3
            </h4>
            <p>Add a funding source for your prize award and launch.</p>
          </div>
          <div className="col-lg-3 col-sm-6 mb-md-0 mb-3">
            <img src={draw4} alt="draw-4" className="w-100 draw-img" />
            <h4 className="mt-md-4 mb-3 d-inline-flex justify-content-center align-items-center draw-number">
              4
            </h4>
            <p>
              Watch the brilliant minds at work as registrations and solutions
              roll in.
            </p>
          </div>
        </div>
        <div className="row my-sm-5 my-3 content-w-side-img">
          <div className="col-sm-7 side-img-content">
            <h4 className="col-xl-10 px-0 mb-sm-4 mb-0 blue-orange-heading">
              Get started with our <span className="orange">Starter Kit</span>{' '}
              today
            </h4>
            <p className="col-xl-10 px-0 mb-0 paragraph">
              Let’s face it, putting together a challenge has a few components
              to it that will need special attention. Things like rules, judging
              criteria, and submission package. You know what you need solutions
              for and we can help you quickly fill the gap with our Challenge
              Starter Kit’s.
            </p>
            <button className="btn">Get Started</button>
          </div>
          <div className="col-sm-5">
            <img
              src={scienceHaromatic}
              alt="science-hromatic"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
