import React, {useState} from 'react';
import Layout from '../components/Layout';

const ContactUs = () => {
  const [firstNm, setFirstNm] = useState('');
  const [lastNm, setLastNm] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstNm = e => {
    setFirstNm(e.target.value);
  };
  const handleLastNm = e => {
    setLastNm(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleMessage = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="row mx-0 mb-lg-0 mb-4 pr-lg-4 account-auth-pg account-auth-step-2">
        <div className="col-lg-6 p-0">
          <div className="contacr-details  side-contact-block">
            <h2>
              Get a question for us <br /> today? Lets talk!
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              possimus architecto temporibus libero sed ab tempore amet
              laudantium alias cum.
            </p>
            <div className="mt-3">
              <span>
                <i className="fas fa-map-marker-alt"></i>{' '}
                <span className="mx-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </span>{' '}
              </span>
            </div>
            <div className="mt-3">
              <span>
                {' '}
                <i className="fas fa-phone"></i>{' '}
                <span className="mx-3">1234567</span>
              </span>
            </div>
            <div className="mt-3">
              <span>
                {' '}
                <i className="fas fa-envelope"></i>{' '}
                <span className="mx-3">joan@gmail.com</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 contact-form mt-4 p-4">
          <form>
            <div className="form-row">
              <div className="form-group col-lg-6">
                <label for="firstName">First name</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="e.g John"
                  value={firstNm}
                  onChange={handleFirstNm}
                />
              </div>
              <div className="form-group col-lg-6">
                <label for="firstName">Last name</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="e.g Doe"
                  value={lastNm}
                  onChange={handleLastNm}
                />
              </div>
            </div>
            <div className="form-row my-lg-4">
              <div className="form-group col-lg-12">
                <label for="Country">Email</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  placeholder="e.g Doe@gmail.com"
                  onChange={handleEmail}
                />
              </div>
              <div className="form-group col-lg-12">
                <label for="City">Message</label>
                <textarea
                  required
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={handleMessage}
                  className="form-control"></textarea>
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn create-account-btn w-100 text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
