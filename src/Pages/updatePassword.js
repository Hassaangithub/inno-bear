import React from 'react';
import Footer from '../components/Footer';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import {useState} from 'react';
import {changePassword} from '../Services/profile';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [currentpass, setCurrentPass] = useState();
  const [newpass, setNewPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await changePassword({
      current_password: currentpass,
      password: newpass,
      password_confirmation: confirmPass,
    });
    if (response.status === 200) {
      toast.success(response.message);
      setLoading(false);
    } else {
      toast.error(response.data.message);
      setLoading(false);
    }
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
        <div className="profile m-5">
          <div className="profileInner m-5">
            <form className="m-5 profileForm">
              <h3>Reset Password</h3>
              <p>Please enter a new password to reset your password</p>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    value={currentpass}
                    onChange={e => setCurrentPass(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6"></div>
                <div className="form-group col-md-6">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="newPassword"
                    value={newpass}
                    onChange={e => setNewPass(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6"></div>
                <div className="form-group col-md-6">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPass}
                    onChange={e => setConfirmPass(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6"></div>
                <div className="form-group col-md-4">
                  <button
                    type="submit"
                    className="btn cancelbtn"
                    onClick={() => navigate('/edit-profile')}>
                    Cancel
                  </button>
                </div>
                <div className="form-group col-md-8">
                  <button
                    type="submit"
                    className="btn btn-group-lg resetbtn text-white"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={handleSubmit}>
                    {loading ? (
                      <div
                        className="spinner-border text-primary"
                        role="status"></div>
                    ) : (
                      'Reset Password'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </DashboardSidebar>
  );
};

export default UpdatePassword;
