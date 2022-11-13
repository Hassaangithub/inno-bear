import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import Banner from '../components/challengesDetail/Banner';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';
import ellipse3 from '../images/Ellipse-3.png';
import {fetchSolutionById} from '../Services/dashboard';

const ViewSubmittedSolution = () => {
  const [data, setData] = useState();
  const {id} = useParams();
  const solutionId = id.replace(':', '');
  useEffect(() => {
    const getData = async () => {
      const response = await fetchSolutionById(solutionId);
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Banner image={data?.challenge.header_image} title={data?.title} />
      <div className="page-main-content create-new-solution-pg px-md-5 px-3">
        <div className="mt-5 mb-3">
          <div className="col-lg-12 row flex align-items-center">
            <span className="font-weight-bolder">Submitted By</span>{' '}
            <div className="mx-2">
              <span className="mx-2">
                <img src={ellipse3} className="shared-by " alt="" />
              </span>
              <span className="text-muted">jonne man</span>
            </div>
            <div className="mx-2">
              <span className="mx-2">
                <img src={ellipse3} className="shared-by " alt="" />
              </span>
              <span className="text-muted">jonne man</span>
            </div>
            <div className="mx-2">
              <span className="mx-2">
                <img src={ellipse3} className="shared-by " alt="" />
              </span>
              <span className="text-muted">jonne man</span>
            </div>
          </div>
        </div>
        <p>{data?.created_at}</p>
        <div className="mt-5">
          <h3>Description</h3>
          <p>{data?.discription}</p>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h3>Attachments</h3>
          </div>
          <div className="col-lg-3">
            <div className="card p-3">
              <i className="fas fa-file-pdf pdf-icon"></i>
              <div className=" d-flex justify-content-between mt-5">
                <small className="text-muted">Challenge Brief</small>
                <small className="text-muted">10kb</small>
              </div>
              <div className="mt-3">
                <a href="" download>
                  Download <i className="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3">
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
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewSubmittedSolution;
