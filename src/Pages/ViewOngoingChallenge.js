import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import Banner from '../components/challengesDetail/Banner';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';
import ellipse3 from '../images/Ellipse-3.png';
import {fetchOngoingChallengesById} from '../Services/dashboard';

const ViewOngoingChallenge = () => {
  const [data, setData] = useState();
  const {id} = useParams();
  const solutionId = id.replace(':', '');

  useEffect(() => {
    const getData = async () => {
      const response = await fetchOngoingChallengesById(solutionId);
      if (response.successData) {
        setData(response.successData.solution);
      } else {
        toast.error(response.response.data.message);
      }
    };

    getData();
  }, []);
  return (
    <>
      <TopNav dashboard={true} />

      <Banner />
      <div className="page-main-content create-new-solution-pg px-md-5 px-3">
        <div className="row my-sm-5 my-3">
          <div className="col-lg-12">
            <p className="text-muted mb-2">Challenge Type</p>
            <h5 className="mb-0">Ideate, Accelerate</h5>
            <div className="mt-3 mb-lg-5 mb-3 d-block interests-block">
              <span className="interest">Analytics</span>
              <span className="interest">Visualizations</span>
              <span className="interest">
                Algorithms Technology Demonstration
              </span>
              <span className="interest">Hardware</span>
            </div>
            <div className="mt-5">
              <h3>Overview</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                perspiciatis distinctio veritatis laudantium, velit voluptates
                quaerat illo eius ipsam magni nulla illum tempore, officiis
                reiciendis, assumenda ipsum minima iure delectus?Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Quaerat expedita
                asperiores laudantium commodi ullam minus voluptatum magnam
                maxime! Eum ipsa, fugit unde eius quos est qui sed eaque odio
                pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Provident dolor inventore rerum voluptate omnis nihil
                debitis aliquid commodi voluptas, repellat quae! Dolores
                molestias porro consequatur, eos nobis est magnam architecto!
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h3>Timeline</h3>
            <button className=" btn-edit">
              Edit <i className="fas fa-pen"></i>
            </button>
          </div>
          <div className="col-lg-1 mb-2 d-flex align-items-center">
            <i className="fas fa-check check-done"> Done</i>
          </div>
          <div className="col-lg-11 ">
            <div className="card  p-3">
              <h5>Challenge Launch</h5>
              <p>05/21/22 07:00 AM +6</p>
            </div>
          </div>
          <div className="col-lg-12 mb-3"></div>
          <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
            <i className="fas fa-calendar text-muted text-center">
              {' '}
              Not Started
            </i>
          </div>
          <div className="col-lg-10">
            <div className="card p-3 ">
              <h5>Challenge Submission</h5>
              <p>05/21/22 07:00 AM +6</p>
            </div>
          </div>
          <div className="col-lg-12 mb-3"></div>
          <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
            <i className="fas fa-calendar text-muted text-center">
              {' '}
              Not Started
            </i>
          </div>
          <div className="col-lg-10">
            <div className="card p-3 ">
              <h5>Closing Period</h5>
              <p>05/21/22 07:00 AM +6</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h3>Prizes</h3>
            <button className=" btn-edit">
              Edit <i className="fas fa-pen"></i>
            </button>
          </div>
          <div className="col-lg-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              similique et dolor eius sunt natus, accusantium placeat corporis
              beatae <strong>75,000 USD</strong>
            </p>
            <h5>
              Award 1: <strong> $35,000 </strong> | Number of Awards:{' '}
              <strong> 1</strong>
            </h5>
            <h5>
              Award 2: <strong> $15,000 </strong> | Number of Awards:{' '}
              <strong> 1</strong>
            </h5>
            <h5>
              Award 3: <strong> $10,000 </strong> | Number of Awards:{' '}
              <strong> 1</strong>
            </h5>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12">
            <h3>Rules</h3>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo
              aperiamt.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo aperiam
              .
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo aperiam.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo aperiam{' '}
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo aperiam.
            </li>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <h3>Judging Criteria</h3>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo
              aperiamt.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo aperiam
              .
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo aperiam.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo aperiam{' '}
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              voluptate qui delectus cumque perferendis, rem dolor illo aperiam.
            </li>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h3>Resources</h3>
            <button className=" btn-edit">
              Add New <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-lg-3">
            <div className="card p-3">
              <i className="fas fa-file-pdf pdf-icon"></i>
              <div className=" d-flex justify-content-between mt-5">
                <small className="text-muted">Challenge Brief</small>
                <small className="text-muted">10kb</small>
              </div>
              <div className="mt-3">
                <a href="">
                  Download <i className="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-3">
              <i className="fas fa-file-word word-icon"></i>
              <div className=" d-flex justify-content-between mt-5">
                <small className="text-muted">Challenge Brief</small>
                <small className="text-muted">10kb</small>
              </div>
              <div className="mt-3">
                <a href="">
                  Download <i className="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-3">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h3>Updates</h3>
            <button className=" btn-edit">
              Add New <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="hr mt-3"></div>
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <h6>05/06/22</h6>
          </div>
          <div className="col-lg-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              ipsum illum eos repellat enim odio itaque neque corporis voluptate
              doloremque, distinctio minus? Quam repellendus ipsam et odio cum
              doloribus velit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi cupiditate aliquam autem quos impedit a
              laudantium sapiente odit tempora, amet atque libero mollitia iste
              officiis rerum eveniet dolore non provident.
            </p>
          </div>
          <div className="col-lg-12">
            <span className="font-weight-bolder">Shared By</span>{' '}
            <span>
              <img src={ellipse3} className="shared-by" alt="" />
            </span>
            <span className="text-muted">jonne man</span>
          </div>
          <div className="hr mt-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewOngoingChallenge;
