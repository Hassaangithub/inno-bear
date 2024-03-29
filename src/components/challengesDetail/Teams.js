import React from 'react';
import HeaderContent from './HeaderContent';
// import "image2" from '../../images/Ellipse-321.png'
// import "image2" from '../../images/Ellipse-324.png'

const Teams = ({type, endGoal, keyword}) => {
  return (
    <div className="challenges-pg px-md-5 px-3">
      <HeaderContent type={type} description={endGoal} keyword={keyword} />
    </div>
  );
};

export default Teams;
