import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import Banner from '../components/challengesDetail/Banner';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';
import ellipse3 from '../images/Ellipse-3.png';
import {singleChallenge} from '../Services/challanges';

const ViewOngoingChallenge = () => {
  const [data, setData] = useState();
  const {id} = useParams();
  const challengeId = id.replace(':', '');
  useEffect(() => {
    const getData = async () => {
      const response = await singleChallenge(challengeId);
      if (response.data.successData) {
        setData(response.data.successData.data);
      } else {
        toast.error(response.response.data.message);
      }
    };

    getData();
  }, []);

  console.log(data?.rules);
  return (
    <>
      <TopNav dashboard={true} />

      <Banner image={data?.header_image} title={data?.title} />
      <div className="page-main-content create-new-solution-pg px-md-5 px-3">
        <div className="row my-sm-5 my-3">
          <div className="col-lg-12">
            <p className="text-muted mb-2">Challenge Type</p>
            <h5 className="mb-0"> {data?.challenge_type}</h5>
            <div className="mt-3 mb-lg-5 mb-3 d-block interests-block">
              {data?.keywords?.split(',').map((keyword, index) => (
                <span className="interest mr-2" key={index}>
                  {keyword}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <h3>Overview</h3>
              <p>{data?.description_about_challenge}</p>
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
            {data?.rules.map(item => (
              <li key={item.id}>{item.rule}</li>
            ))}
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <h3>Judging Criteria</h3>
            {data?.determines.map(winningRule => (
              <li key={winningRule.id}>{winningRule.wining_rule}</li>
            ))}
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
