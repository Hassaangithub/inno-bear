import React from 'react';
import Footer from '../components/Footer';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import {useState} from 'react';
import {userContact} from '../Services/contactus';
import {toast} from 'react-toastify';

const Support = () => {
  const [message, setMessage] = useState();
  const [subject, setSubject] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await userContact({
      subject: subject,
      message: message,
    });

    if (response.status === 200) {
      setLoading(false);
      toast.success(response.message);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(response.data.message);
      setLoading(false);
    }
  };

  const handleSubject = e => {
    setSubject(e.target.value);
  };

  return (
    <DashboardSidebar
      list={[
        {
          img: FluentPeople,
          title: 'Edit Profile',
          path: '/edit-profile',
        },
        {
          img: OutlineWork,
          title: 'Reset Password',
          path: '/reset-password',
        },
        {
          img: Vector,
          title: 'Notification Settings',
          path: '/notification-setting',
        },
        {
          img: Vector1,
          title: 'Support',
          path: '/support',
        },
      ]}
      isProfile={true}>
      <div style={{paddingBottom: '351px'}}>
        <div className="profile m-5  ">
          <div className="profileInner m-5">
            <h3>Contact Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="col-lg-6 contactLabel">
              <label htmlFor="subject">Subject</label> <br />
              <div className="border subjectSelect">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleSubject}
                  value={subject}>
                  <option selected value="">
                    Open this select menu
                  </option>
                  <option>Hosting a Challenge</option>
                  <option>Creating A Solver Team</option>
                  <option>Selecting a Challenge Type</option>
                  <option>Determining Prize Award</option>
                  <option>Accessing Challenge Data</option>
                  <option>Profile Settings</option>
                  <option>Using the Innovation Pipeline</option>
                  <option>Promoting a Challenge</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6"></div>
            <div className="col-lg-6 contactLabel mt-3">
              <label htmlFor="Message">Message</label> <br />
              <div className="border subjectMessage">
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="10"
                  value={message}
                  onChange={e => setMessage(e.target.value)}></textarea>
              </div>
            </div>
            <div className="col-lg-6"></div>
            <div className="col-lg-6 mt-5">
              <button
                type="submit"
                className="btn btn-primary  resetbtn"
                onClick={handleSubmit}>
                {loading ? (
                  <div
                    className="spinner-border text-primary"
                    role="status"></div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </DashboardSidebar>
  );
};

export default Support;
