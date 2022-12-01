import React, {useState} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {registerUserStep2} from '../Services/auth';
import {toast, ToastContainer} from 'react-toastify';
import {useEffect} from 'react';
import {getCountries} from '../Services/profile';

const SignupStepTwo = ({setFormData, formData, setStep}) => {
  const [formError, setFormError] = useState({
    firstName: false,
    lastName: false,
    country: false,
    city: false,
    phoneNo: false,
  });
  const [loading, setLoading] = useState(false);
  const [allCountries, setAllCountries] = useState();
  const [cities, setCities] = useState();

  const fetchCountries = async () => {
    const response = await getCountries();
    if (response.data) {
      setAllCountries(response.data);
    } else {
      toast.error('Failed to fetch countries');
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleFirstName = e => {
    if (e.target.value) {
      setFormError({...formError, firstName: false});
    }
    setFormData({...formData, fname: e.target.value});
  };
  const handleLastName = e => {
    if (e.target.value) {
      setFormError({...formError, lastName: false});
    }
    setFormData({...formData, lname: e.target.value});
  };
  const handlePhone = phoneNumber => {
    if (phoneNumber) {
      setFormError({...formError, phoneNo: false});
    }
    setFormData({...formData, phone: phoneNumber});
  };
  const handleCity = e => {
    if (e.target.value) {
      setFormError({...formError, city: false});
    }
    setFormData({...formData, city: e.target.value});
  };
  const handleCountry = e => {
    const countryObj = JSON.parse(e.target.value);
    setCities(countryObj.states);
    if (e.target.value) {
      setFormError({...formError, country: false});
    }
    setFormData({...formData, country: countryObj.name});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.fname) {
      setFormError({...formError, firstName: true});
    } else if (!formData.lname) {
      setFormError({...formError, lastName: true});
    } else if (!formData.phone) {
      setFormError({...formError, phoneNo: true});
    } else if (!formData.city) {
      setFormError({...formError, city: true});
    } else if (!formData.country) {
      setFormError({...formError, country: true});
    } else if (
      formData.fname &&
      formData.lname &&
      formData.phone &&
      formData.city &&
      formData.country
    ) {
      setLoading(true);
      const response = await registerUserStep2({
        fname: formData.fname,
        lname: formData.lname,
        country: formData.country,
        city: formData.city,
        phone: formData.phone,
      });

      if (response.data) {
        setLoading(false);
        setStep(3);
      } else {
        toast.error(response.response.data.message);
        setFormError({
          firstName: true,
          lastName: true,
          country: true,
          phoneNo: true,
          city: true,
        });
        setLoading(false);
      }
    }
  };
  console.log('all', allCountries);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="col-lg-6 col-md-8">
        <h1>Complete your sign up process</h1>
        <p className="beneath-main-heading">
          Let's grab a few more details to finish setting up your account
        </p>
        <div className="d-flex flex-wrap mb-3">
          <span className="auth-step gradient-step mr-2"></span>
          <span className="auth-step grey-step"></span>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-lg-6">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className={`form-control ${
                  formError.firstName && 'border-danger'
                }`}
                id="firstName"
                placeholder="e.g John"
                onChange={handleFirstName}
              />
              {formError.firstName && (
                <span className="text-danger ml-2 ">Enter First Name</span>
              )}
            </div>
            <div className="form-group col-lg-6">
              <label htmlFor="firstName">Last name</label>
              <input
                type="text"
                className={`form-control ${
                  formError.lastName && 'border-danger'
                }`}
                id="lastName"
                placeholder="e.g Doe"
                onChange={handleLastName}
              />
              {formError.lastName && (
                <span className="text-danger ml-2 ">Enter Last Name</span>
              )}
            </div>
          </div>
          <div className="form-row my-lg-4">
            <div className="form-group col-lg-6">
              <label htmlFor="Country">Country</label>
              <select
                className={`form-control ${
                  formError.country && 'border-danger'
                }`}
                onChange={handleCountry}>
                <option disabled selected value="">
                  --Please Select--
                </option>
                {allCountries?.map((country, index) => (
                  <option key={index} value={JSON.stringify(country)}>
                    {country.name}
                  </option>
                ))}
              </select>
              {formError.country && (
                <span className="text-danger ml-2 ">Select Country</span>
              )}
            </div>
            <div className="form-group col-lg-6">
              <label htmlFor="City">City</label>
              <select
                className={`form-control ${formError.city && 'border-danger'} ${
                  !cities && 'cursor-na'
                }`}
                onChange={handleCity}
                disabled={!cities}>
                <option disabled selected value="">
                  --Please Select--
                </option>
                {cities?.map((state, index) => (
                  <option index={index} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              {formError.city && (
                <span className="text-danger ml-2 ">Select City</span>
              )}
            </div>
          </div>
          <div className="form-group mb-lg-5 mb-4">
            <label htmlFor="phoneNumber">Phone number</label>
            <PhoneInput
              containerClass="d-block"
              inputClass={`form-control phone-input ${
                formError.email && 'border-danger'
              }`}
              id="phoneNumber"
              name="phone"
              type="tel"
              onChange={handlePhone}
              value={formData.phoneNo}
            />
            {formError.phoneNo && (
              <span className="text-danger ml-2 ">Enter Phone No.</span>
            )}
          </div>
          <button
            type="submit"
            className="btn create-account-btn text-white"
            onClick={handleSubmit}>
            {loading ? (
              <div
                className="spinner-border text-primary spinner-border-md"
                role="status"
              />
            ) : (
              'Next'
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupStepTwo;
