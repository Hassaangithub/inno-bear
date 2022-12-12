import React from 'react';
import {useNavigate} from 'react-router-dom';

const SubmittedChallengesCard = ({submittedIdea}) => {
  const navigate = useNavigate();
  const handleClick = id => {
    navigate(`/view-submitted-solution:${id}`);
  };

  return (
    <>
      {submittedIdea?.map(idea => (
        <div
          onClick={() => handleClick(idea.id)}
          key={idea.id}
          role="button"
          className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
          <div className="p-3 current-challenge-block">
            <img
              src={idea?.challenge.header_image}
              alt="rectangle-35"
              className="w-100"
            />
            <h6 className="mt-3 mb-2">{idea.title}</h6>
            <p className="mb-0">{idea.discription}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubmittedChallengesCard;
