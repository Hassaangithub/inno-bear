import React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import TopNav from '../components/TopNav';
import profileImg from '../images/profile-img.png';
import rectangle35 from '../images/rectangle-35.png';
import {fetchAllSolutions} from '../Services/dashboard';

const AllSubmittedSolutions = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchAllSolutions();
      if (response.successData) {
        setData(response.successData.solutions);
      } else {
        toast.error(response.response.data.message);
      }
    };

    getData();
  }, []);

  const handleClick = id => {
    navigate(`/view-submitted-solution:${id}`);
  };

  return (
    <>
      <TopNav dashboard={true} />
      <div className="page-main-content mt-3 px-md-5 px-3">
        <div className="row mx-0">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h5>
              Submitted Challenges{' '}
              <small className="grey-txt">({data?.length})</small>
            </h5>
          </div>
          {data?.map(item => (
            <div
              key={item.id}
              className="col-lg-4 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main"
              role="button"
              onClick={() => handleClick(item.id)}>
              <div className="p-3 current-challenge-block">
                <img
                  src={item.challenge.header_image}
                  alt="rectangle-35"
                  className="w-100"
                />
                <h6 className="mt-3 mb-2">{item.discription}</h6>
                <small className="mb-0">By</small>
                <div className="mt-2 d-flex ">
                  <img
                    src={profileImg}
                    className="user-pic"
                    style={{height: '50px', width: '50px'}}
                  />
                  <img
                    src={profileImg}
                    className="user-pic"
                    style={{height: '50px', width: '50px'}}
                  />
                  <span className="user-pic d-flex justify-content-center text-white align-items-center ">
                    +3
                  </span>
                </div>
                <small className="mb-0">{item.created_at}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllSubmittedSolutions;
