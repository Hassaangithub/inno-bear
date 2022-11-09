import React from 'react';
import Banner from '../components/challengesDetail/Banner';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';
import ellipse3 from '../images/Ellipse-3.png';

const ViewSubmittedSolution = () => {
  return (
    <>
      <TopNav dashboard={true} />
      <Banner />
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
        <p>16th August, 2022</p>
        <div class="mt-5">
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            perspiciatis distinctio veritatis laudantium, velit voluptates
            quaerat illo eius ipsam magni nulla illum tempore, officiis
            reiciendis, assumenda ipsum minima iure delectus?Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Quaerat expedita asperiores
            laudantium commodi ullam minus voluptatum magnam maxime! Eum ipsa,
            fugit unde eius quos est qui sed eaque odio pariatur?Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Provident dolor
            inventore rerum voluptate omnis nihil debitis aliquid commodi
            voluptas, repellat quae! Dolores molestias porro consequatur, eos
            nobis est magnam architecto!
          </p>
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
      </div>
      <Footer />
    </>
  );
};

export default ViewSubmittedSolution;
