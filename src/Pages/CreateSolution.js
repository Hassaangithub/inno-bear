import React, {useState} from 'react';
import Banner from '../components/challengesDetail/Banner';
import Layout from '../components/Layout';
import {useRecoilValue} from 'recoil';
import {challengeId, currentChallenge} from '../recoil/atom';
import {createSolution} from '../Services/solution';
import image1 from '../images/sidebar-img-1.png';
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import resourcePic from '../images/resourcepic.jpg';
import creatinOutOfBox from '../images/creatingOutOfBoxSub.pdf';
import preSubmissionList from '../images/preSubmissionList.pdf';

const CreateSolution = () => {
  const [character, setCharacter] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState();
  const userId = localStorage.getItem('userId');
  const id = useRecoilValue(challengeId);
  const challengeData = useRecoilValue(currentChallenge);
  const navigate = useNavigate();

  const handleCharacter = e => {
    setCharacter(e.target.value);
  };

  const handleDescription = e => {
    setDescription(e.target.value);
  };

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleFile = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    if (character && description && title && file) {
      const data = {
        challenge_id: parseInt(id),
        user_id: parseInt(userId),
        discription: description,
        title: title,
        proposal: file,
      };

      const response = await createSolution(data);

      if (response) {
        toast.success(response.data.message);
        setLoading(false);
        setFile('');
        setDescription('');
        setTitle('');
        setCharacter('');
        navigate(`/challenges/detail:${id}`);
      } else {
        setLoading(false);
        toast.error(response.response.data.message);
      }
    }
  };

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
      <Banner
        image={challengeData?.thumbnail_image}
        title={challengeData?.title}
      />

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
              <button
                className="mb-sm-4 mb-3 theme-blue-link"
                onClick={e => e.preventDefault()}>
                <span className="mr-2 fa fa-plus"></span>(Coming Soon) Invite
                team members to collaborate
              </button>
              <form>
                <div className="form-row mx-0 mb-lg-4 mb-0">
                  <div className="w-100 form-group mb-sm-4 mb-3">
                    <h6>Are you submitting as a team or as an individual?</h6>
                    <select className="form-control" onChange={handleCharacter}>
                      <option>---Select Option---</option>
                      <option value="individual">Individual</option>
                      <option value="team">Team</option>
                    </select>
                  </div>
                  <div className="w-100 form-group mb-sm-4 mb-3">
                    <h6>Solution Title</h6>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleTitle}
                      value={title}
                    />
                  </div>
                  <div className="w-100 form-group mb-sm-4 mb-3">
                    <h6>Solution Description</h6>
                    <textarea
                      placeholder="Write a description here"
                      className="form-control"
                      onChange={handleDescription}
                      value={description}
                    />
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
                            onChange={handleFile}
                            multiple
                          />
                          <label
                            htmlFor="inputGroupFile04"
                            className="custom-file-label">
                            Drag and drop a file here or
                          </label>
                        </div>
                      </div>
                      {file && <p className="text-center"> {file.name}</p>}
                      <h6 className="text-center mt-3 mb-0 file-size-txt">
                        Image size:100mb max
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-md-5 white-btn btn"
                    onClick={handleSubmit}>
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-md-5 ml-md-4 ml-3 btn create-account-btn text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <h5 className="my-lg-3 mt-4 mb-3">Resources</h5>
            <a
              download
              className="row align-items-center mb-sm-4 mb-3 text-decoration-none"
              href={creatinOutOfBox}>
              <div className="col-sm-5 col-6">
                <img src={image1} alt="sidebar-img-1" className="w-100" />
              </div>
              <div className="col-sm-7 col-6 px-sm-3 px-2">
                <h6 className="text-dark">
                  Creating Out-of-the-Box Submissions
                </h6>
                <p className="mb-0 text-truncate-2 text-blue">
                  Helpful considerations when creating your next solution.
                </p>
              </div>
            </a>
            <a
              download
              className="row align-items-center mb-sm-4 mb-3 text-decoration-none"
              href={preSubmissionList}>
              <div className="col-sm-5 col-6">
                <img src={resourcePic} alt="sidebar-img-1" className="w-100" />
              </div>
              <div className="col-sm-7 col-6 px-sm-3 px-2">
                <h6 className="text-dark">
                  Pre-Submission Checklist for Success
                </h6>
                <p className="mb-0 text-truncate-2 text-blue">
                  Helpful considerations before submitting your final solution.
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
