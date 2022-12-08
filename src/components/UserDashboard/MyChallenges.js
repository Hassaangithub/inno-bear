import React from 'react';
import Vector5 from '../../images/vector-5.png';
import Vector6 from '../../images/vector-6.png';
import Vector7 from '../../images/vector-7.png';

const MyChallenges = ({myChallenges}) => {
  return (
    <div className="row mx-0 col-12">
      <div className="col-12 my-4">
        <h4>My Challenges</h4>
      </div>
      <div className="table-responsive">
        <table className="table table-striped mb-0">
          <thead>
            <tr>
              <th className="text-center h6">Challenges</th>
              <th className="text-center h6">Closing Date</th>
              <th className="text-center h6">Award</th>
              <th className="text-center h6">Status</th>
              <th className="text-center h6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myChallenges?.map(challenge => (
              <tr key={challenge.id}>
                <td>
                  <div className="w-100 custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="chal1"
                    />
                    <label
                      className="my-1 custom-control-label pass-below-text"
                      htmlFor="chal1">
                      {challenge.title}
                    </label>
                  </div>
                </td>
                <td>{challenge.cutoff_date}</td>
                <td>
                  <b>${challenge.award_prize}</b>
                </td>
                <td>
                  <a href="#" className="badge badge-in-progress">
                    {challenge.admin_status}
                  </a>
                </td>
                <td>
                  <a href="#">
                    <img src={Vector5} alt="vector-5" />
                  </a>
                  <a href="#">
                    <img src={Vector6} alt="vector-6" />
                  </a>
                  <a href="#">
                    <img src={Vector7} alt="vector-7" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyChallenges;
