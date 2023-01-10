import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import TopNav from '../components/TopNav';
import image from '../images/rectangle-35.png';
import {fetchOngoingChallenges} from '../Services/dashboard';

const AllOngoingChallenges = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchOngoingChallenges();
      if (response.successData) {
        setData(response.successData);
      } else {
        toast.error(response.response.data.message);
      }
    };

    getData();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <TopNav dashboard={true} />
      <div className="page-main-content mt-3 px-md-5 px-3">
        <div className="row mx-0">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h5>
              Ongoing Challenges{' '}
              <small className="grey-txt">
                ({data?.totalOngoingChallenges?.length})
              </small>
            </h5>
          </div>
          {data?.totalOngoingChallenges?.map(item => (
            <div
              key={item.id}
              className="col-lg-4 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main"
              role="button"
              onClick={() => navigate(`/view-ongoing-challenge/:${item.id}`)}>
              <div className="p-3 current-challenge-block">
                <img
                  src={item.header_image}
                  alt="challenge header image"
                  className="w-100"
                />
                <h6 className="mt-3 mb-2">{item.title}</h6>
                <small className="mb-0">{item.title}</small>
                <div className="mt-2">
                  <span className="orange-txt">Award</span>
                  <span className="grey-txt">${item.award_prize}</span>
                  <span className="badge badge-active float-right">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mx-0">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h5>
              Drafts <small className="grey-txt">(2)</small>
            </h5>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
            <div className="p-3 current-challenge-block">
              <img src={image} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <small className="mb-0">Theoretical</small>
              <div className="mt-2">
                <span className="orange-txt">Award</span>
                <span className="grey-txt">$20,000</span>
                <span className="badge badge-closed float-right">Draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOngoingChallenges;
