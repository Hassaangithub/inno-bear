import React, {useMemo} from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const SignupStepTwo = ({setFormData, formData, setStep}) => {
  const countries = useMemo(() => countryList().getData(), []);
  const handleFirstName = e => {
    setFormData({...formData, firstName: e.target.value});
  };
  const handleLastName = e => {
    setFormData({...formData, lastName: e.target.value});
  };
  const handlePhone = phoneNumber => {
    console.log(phoneNumber);
    setFormData({...formData, phoneNo: phoneNumber});
  };
  const handleCity = e => {
    setFormData({...formData, city: e.target.value});
  };
  const handleCountry = e => {
    setFormData({...formData, country: e.target.value});
  };
  const handleSubmit = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.phoneNo &&
      formData.city &&
      formData.country
    ) {
      setStep(3);
    }
  };

  return (
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
              className="form-control"
              id="firstName"
              placeholder="e.g John"
              onChange={handleFirstName}
            />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="firstName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="e.g Doe"
              onChange={handleLastName}
            />
          </div>
        </div>
        <div className="form-row my-lg-4">
          <div className="form-group col-lg-6">
            <label htmlFor="Country">Country</label>
            <select className="form-control" onChange={handleCountry}>
              <option disabled>--Please Select--</option>
              {countries.map((country, index) => (
                <option key={index}>{country.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="City">City</label>
            <select className="form-control" onChange={handleCity}>
              <option disabled>--Please Select--</option>
              <option>Lahore</option>
              <option>Karachi</option>
            </select>
          </div>
        </div>
        <div className="form-group mb-lg-5 mb-4">
          <label htmlFor="phoneNumber">Phone number</label>
          <PhoneInput
            containerClass="d-block"
            inputClass="form-control phone-input"
            id="phoneNumber"
            name="phone"
            type="tel"
            onChange={handlePhone}
            value={formData.phoneNo}
            // country={"us"}
          />
        </div>
        <button
          type="submit"
          className="btn create-account-btn"
          onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
};

export default SignupStepTwo;
