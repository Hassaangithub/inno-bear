import React, {useEffect} from 'react';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import {useNavigate} from 'react-router-dom';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import {useState} from 'react';
import Select from 'react-select';

import {
  getCities,
  getCountries,
  getProfileData,
  postUpdatedData,
} from '../Services/profile';
import {toast} from 'react-toastify';

const list = [
  {
    img: FluentPeople,
    title: 'Edit Profile',
    path: '/edit-profile',
  },
  {
    img: OutlineWork,
    title: 'Reset Password',
    path: '/dashboard/reset-password',
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
];
const EditProfile = () => {
  // const navigate = useNavigate();

  const [firstNm, setFirstNm] = useState('');
  const [lastNm, setLastNm] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [city, setCity] = useState('');
  const [pass, setPass] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [disableInput, setDisableInput] = useState(false);
  const fetchProfile = async () => {
    const response = await getProfileData();
    if (response.successData) {
      setFirstNm(response.successData.user.fname);
      setLastNm(response.successData.user.lname);
      setEmail(response.successData.user.email);
      setPhone(response.successData.user.phone);
      setCountry(response.successData.user.country);
      setCity(response.successData.user.city);
      setProfileImg(response.successData.user.image);
    } else {
      toast.error(response.response.data.message);
    }
  };

  const fetchCountries = async () => {
    const response = await getCountries();
    if (response.data) {
      setAllCountries(response.data);
    } else {
      toast.error('Failed to fetch countries');
    }
  };

  const fetchCities = async (name, iso3, iso2) => {
    setDisableInput(true);
    const data = {
      name: name,
      iso3: iso3,
      iso2: iso2,
    };
    const response = await getCities(JSON.stringify(data));
    if (response.data) {
      setAllCities(response.data);
      setDisableInput(false);
    } else {
      toast.error('Failed to fetch countries');
      setDisableInput(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchCountries();
  }, []);

  const handleImage = e => {
    setProfileImg(URL.createObjectURL(e.target.files[0]));
    setImgUrl(e.target.files[0]);
  };
  const handleFirstNm = e => {
    setFirstNm(e.target.value);
  };

  const handleLastNm = e => {
    setLastNm(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePhone = e => {
    setPhone(e.target.value);
  };

  const handleCountry = e => {
    const countryObj = JSON.parse(e.target.value);
    setCountry(countryObj.name);
    fetchCities(countryObj.name, countryObj.iso3, countryObj.iso2);
  };

  const handleCity = e => {
    setCity(e.target.value);
  };

  const handlePass = e => {
    setPass(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const data = {
      fname: firstNm,
      lname: lastNm,
      email: email,
      phone: phone,
      country: country,
      city: city,
      password: pass,
      image: imgUrl,
    };

    const response = await postUpdatedData(data);
    if (response.successData) {
      toast.success('Successfully Updated');
      setLoading(false);
    } else {
      toast.error(response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      <DashboardSidebar list={list} isProfile={true}>
        <div style={{paddingBottom: '351px'}}>
          <div className="profile m-5">
            <div className="profileInner m-5">
              <h1>Profile</h1>

              <div className="profileEditImage">
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="profile"
                    style={{
                      width: '144px',
                      height: '144px',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '144px',
                      height: '144px',
                      background: '#9e9e9e',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '50px',
                    }}>
                    {localStorage.getItem('email')[0]?.toUpperCase()}
                  </div>
                )}
                <div className="upload-image">
                  <input type="file" onChange={handleImage} />
                </div>
              </div>

              <form className="m-5 profileForm">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputfirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputfirstName"
                      value={firstNm}
                      onChange={handleFirstNm}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputlastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputlastName"
                      value={lastNm}
                      onChange={handleLastNm}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailAddress"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      value={phone}
                      onChange={handlePhone}
                    />
                  </div>

                  <div className="form-group col-lg-6">
                    <label htmlFor="Country">Country</label>
                    <select
                      className="form-control"
                      onChange={handleCountry}
                      // defaultValue={country}

                      value="bus">
                      <option value={null}>--Please Select--</option>
                      {/* {allCountries?.map((item, index) => (
                        <option key={index} value={JSON.stringify(item)}>
                          {item.name}
                        </option>
                      ))} */}

                      <option>car</option>
                      <option>bus</option>
                      <option>bike</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-6">
                    <label htmlFor="City">City</label>
                    <select
                      disabled={disableInput}
                      className={`form-control ${disableInput && 'cursor-na'}`}
                      onChange={handleCity}
                      defaultValue={city}>
                      <option disabled>--Please Select--</option>
                      {allCities?.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    {allCities?.map((item, index) => (
                      <div className="text-danger" key={index}>
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="profile m-5  ">
            <div className="profileInner m-5">
              <form className="m-5 profileForm">
                <h3>Password</h3>
                <p>Save your profile by entering your password below</p>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="changePassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="changePassword"
                      value={pass}
                      onChange={handlePass}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <button
                      type="submit"
                      className="btn changebtn"
                      onClick={handleSubmit}
                      style={{minWidth: '85px', maxHeight: '40px'}}>
                      {loading ? (
                        <div
                          className="spinner-border text-primary"
                          role="status"></div>
                      ) : (
                        'Update Profile'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DashboardSidebar>
    </>
  );
};

export default EditProfile;
