import React from 'react';
import {useNavigate} from 'react-router-dom';

const Step7 = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/challenges');
  };

  return (
    <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
      <p className="text-muted mb-2 steps-label">STEP 7 OF 7</p>
      <div className="d-flex flex-wrap mb-3">
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
      </div>
      <h4 className="mb-4">
        Let's give them some resources and finalize things
      </h4>
      <p>
        Add some resources that solvers can find find useful. Then, upload your
        artwork, and put the final touches on this challenge
      </p>
      <form>
        <div className="form-row mx-0">
          <div className="w-100 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Describe what this attachment is"
            />
          </div>
          <div className="w-100 form-group dropzone-attachment">
            <div className="input-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile04"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile04">
                  Drag and drop a file here or
                </label>
              </div>
            </div>
            <h6 className="text-center mt-3 mb-0 file-size-txt">
              File size:5mb max
            </h6>
          </div>
          <h5 className="w-100 my-sm-4 my-3">Upload your challenge images</h5>
          <div className="w-100 form-group">
            <h6 className="w-100">Header Image</h6>
            <p>Please use the attachement field to upload your header image</p>
            <div className="w-100 form-group dropzone-attachment">
              <div className="input-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile04"
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile04">
                    Drag and drop a file here or
                  </label>
                </div>
              </div>
              <h6 className="text-center mt-3 mb-0 file-size-txt">
                Image size:100mb max
              </h6>
            </div>
          </div>
          <div className="w-100 form-group">
            <h6 className="w-100">Thumbnail Image</h6>
            <p>
              Please use the attachement field to upload your thumbnail image
            </p>
            <div className="w-100 form-group dropzone-attachment">
              <div className="input-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile04"
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile04">
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
        <div className="mt-xl-5 mt-sm-4 mt-3">
          <button
            type="submit"
            className="px-md-5 white-btn btn"
            onClick={handleSubmit}>
            Save as Draft
          </button>
          <button
            type="submit"
            className="px-md-5 ml-md-4 ml-3 btn create-account-btn">
            Make it Live
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step7;
