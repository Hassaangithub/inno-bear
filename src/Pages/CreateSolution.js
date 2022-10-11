import React from 'react';
import Banner from '../components/challengesDetail/Banner';
import Layout from '../components/Layout';

const CreateSolution = () => {
  return (
    <Layout>
      {/* <div className="position-relative">
        <img src="images/hydro-banner.png" alt="banner-img" className="w-100" />
        <div
          className="position-absolute w-100 h-100 top-0 d-flex flex-column justify-content-center align-items-center banner-block"
          style={{background: 'none'}}>
          <h1 className="text-white mob-heading">
            Hydropower Operations Optimization
          </h1>
          <h1 className="text-white mob-heading">(H2Os) Prize</h1>
        </div>
      </div> */}
      <Banner />
      <div className="page-main-content create-new-solution-pg px-md-5 px-3">
        <div className="row my-sm-5 my-3">
          <div className="col-lg-7">
            <h2 className="mb-sm-4">Create a New Solution</h2>
            <div className="col-lg-11 px-0">
              <p className="mb-sm-4 mb-3">
                Prepare to submit your solution by completing your submission
                package below. You can save and come back to your submission at
                any time, and invite other teammates to collaborate on it as
                well.
              </p>
              <button className="mb-sm-4 mb-3 theme-blue-link">
                <span className="mr-2 fa fa-plus"></span>Invite team members to
                collaborate
              </button>
              <form>
                <div className="form-row mx-0 mb-lg-4 mb-0">
                  <div className="w-100 form-group mb-sm-4 mb-3">
                    <h6>Are you submitting as a team or as an individual?</h6>
                    <select className="form-control">
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="w-100 form-group mb-sm-4 mb-3">
                    <h6>Solution Title</h6>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="w-100 form-group mb-sm-4 mb-3">
                    <h6>Solution Description</h6>
                    <textarea
                      placeholder="Write a description here"
                      className="form-control"></textarea>
                  </div>
                  <div className="w-100 form-group mb-sm-4 mb-3">
                    <h6 className="w-100">Solution Proposal</h6>
                    <p>
                      Please use the attachement field to submit your solution
                      proposal
                    </p>
                    <div className="w-100 form-group dropzone-attachment">
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile04"
                          />
                          <label
                            htmlFor="inputGroupFile04"
                            className="custom-file-label">
                            Drag and drop a file here or
                          </label>
                        </div>
                      </div>
                      <h6 className="text-center mt-3 mb-0 file-size-txt">
                        Image size:100mb max
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" className="px-md-5 white-btn btn">
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="px-md-5 ml-md-4 ml-3 btn create-account-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <h5 className="my-lg-3 mt-4 mb-3">Resources</h5>
            <a
              className="row align-items-center mb-sm-4 mb-3 text-decoration-none"
              href="#">
              <div className="col-sm-5 col-6">
                <img
                  src="images/sidebar-img-1.png"
                  alt="sidebar-img-1"
                  className="w-100"
                />
              </div>
              <div className="col-sm-7 col-6 px-sm-3 px-2">
                <h6 className="text-dark">
                  How to submit novel, award winning ideas
                </h6>
                <p className="mb-0 text-truncate-2 text-blue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing eli elit
                  Quam Lorem ipsum dolor sit amet, consectetur adipiscing eli
                  elit Quam
                </p>
              </div>
            </a>
            <a
              className="row align-items-center mb-sm-4 mb-3 text-decoration-none"
              href="#">
              <div className="col-sm-5 col-6">
                <img
                  src="images/sidebar-img-2.png"
                  alt="sidebar-img-1"
                  className="w-100"
                />
              </div>
              <div className="col-sm-7 col-6 px-sm-3 px-2">
                <h6 className="text-dark">
                  How to submit novel, award winning ideas
                </h6>
                <p className="mb-0 text-truncate-2 text-blue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing eli elit
                  Quam Lorem ipsum dolor sit amet, consectetur adipiscing eli
                  elit Quam
                </p>
              </div>
            </a>
            <a
              className="row align-items-center mb-sm-4 mb-3 text-decoration-none"
              href="#">
              <div className="col-sm-5 col-6">
                <img
                  src="images/sidebar-img-3.png"
                  alt="sidebar-img-1"
                  className="w-100"
                />
              </div>
              <div className="col-sm-7 col-6 px-sm-3 px-2">
                <h6 className="text-dark">
                  How to submit novel, award winning ideas
                </h6>
                <p className="mb-0 text-truncate-2 text-blue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing eli elit
                  Quam Lorem ipsum dolor sit amet, consectetur adipiscing eli
                  elit Quam
                </p>
              </div>
            </a>
            <a
              className="row align-items-center mb-sm-4 mb-3 text-decoration-none"
              href="#">
              <div className="col-sm-5 col-6">
                <img
                  src="images/sidebar-img-4.png"
                  alt="sidebar-img-1"
                  className="w-100"
                />
              </div>
              <div className="col-sm-7 col-6 px-sm-3 px-2">
                <h6 className="text-dark">
                  How to submit novel, award winning ideas
                </h6>
                <p className="mb-0 text-truncate-2 text-blue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing eli elit
                  Quam Lorem ipsum dolor sit amet, consectetur adipiscing eli
                  elit Quam
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateSolution;
