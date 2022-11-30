import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import {useNavigate} from 'react-router-dom';
import {allChallenges} from '../Services/challanges';

const ExploreChallenges = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getChallenges = async () => {
      setLoading(true);
      const response = await allChallenges();
      if (!response) {
      } else {
        setData(response.data.successData.data);
        setLoading(false);
      }
    };
    getChallenges();
  }, []);
  const navigate = useNavigate();
  const handleCard = id => {
    navigate(`/challenges/detail:${id}`);
  };
  return (
    <Layout>
      <div className="page-main-content mt-3 px-md-5 px-3">
        <h2 className="text-center">Explore all Challenges</h2>
        <p className="text-center mb-0">
          Discover current challenges seeking solutions
        </p>
        {loading ? (
          <div className="d-flex align-items-center justify-content-center w-100 h-100 position-relative">
            <div
              className="spinner-border text-primary spinner-border-md position-absolute"
              role="status"
              style={{top: '80px'}}
            />
          </div>
        ) : (
          <div className="row mt-lg-5 mt-4 mb-3">
            {data?.map((card, index) => (
              <div className="col-lg-4 col-sm-6 mb-sm-4 mb-3" key={index}>
                <div
                  className="p-3 current-challenge-block "
                  role="button"
                  onClick={() => handleCard(card.id)}>
                  <img
                    src={card.header_image}
                    alt="rectangle-35"
                    className="w-100"
                  />
                  <h6 className="mt-3 mb-2">
                    {card.description_about_challenge} &nbsp;
                  </h6>
                  <p>{card.challenge_type}</p>
                  <div>
                    <span className="orange-txt">Award</span>
                    <span className="grey-txt">$ {card.award_prize}</span>
                  </div>
                  <div className="d-flex align-items-center mt-md-4 mt-3">
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                      }}>
                      <img
                        src={card.thumbnail_image}
                        alt="challege"
                        style={{
                          minHeight: '100%',
                          objectFit: 'cover',
                          maxWidth: '100%',
                        }}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="mb-0 text-dark font-14">{card.title}</p>
                      <p className="mb-0 font-14">{card.submission_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ExploreChallenges;
