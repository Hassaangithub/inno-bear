import React from 'react';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';

const CreateTeam = () => {
  return (
    <>
      <TopNav />
      <div className="page-main-content mt-3 px-md-5 px-3">
        <div className="col-xl-6 mx-auto">
          <h2 className="text-center">Create a Team</h2>
          <p className="text-center mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ad repudiandae voluptate, recusandae, consequatur
            cupiditate qui neque perspiciatis natus quis id. Quibusdam saepe
            tempora dolorem odio architecto voluptatibus iure ut!
          </p>
        </div>
        <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
          <form>
            <div className="form-row mx-0">
              <div className="w-100 form-group">
                <h6>Team Name</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="What is the name of your team?"
                />
              </div>

              <h6 className="mt-4 mb-3">
                What keywords should we look out for that describe the types of
                challenges your team might be interested in?
              </h6>
              <div className="mb-3 interests-container">
                <span className="interest ">Youth</span>
                <span className="interest">Food</span>
                <span className="interest">Java Development</span>
                <span className="interest">MBA</span>
                <span className="interest ">Art &amp; Culture</span>
                <span className="interest">Energy</span>
                <span className="interest">Artificial Intelligence</span>
                <span className="interest">Dessert</span>
                <span className="interest add-interest">
                  <span className="fa fa-plus"></span>
                </span>
              </div>
              <div className="w-100 form-group">
                <h6 className="w-100">Header Image</h6>
                <p>
                  Please use the attachement field to upload your header image
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
                        className="custom-file-label"
                        for="inputGroupFile04">
                        Drag and drop an image here or
                      </label>
                    </div>
                  </div>
                  <h6 className="text-center mt-3 mb-0 file-size-txt">
                    Image size:100mb max
                  </h6>
                </div>
              </div>
            </div>
            <div className="mt-xl-5 mt-sm-4 mt-0 text-center">
              <button
                type="submit"
                className="px-md-5 ml-md-4 ml-3 btn create-account-btn text-white">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateTeam;
