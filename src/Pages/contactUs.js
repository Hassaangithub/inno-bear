import React, {useState} from 'react';
import {toast} from 'react-toastify';
import Layout from '../components/Layout';
import {contactUs} from '../Services/contactus';

const ContactUs = () => {
  const [firstNm, setFirstNm] = useState('');
  const [lastNm, setLastNm] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await contactUs({
      first_name: firstNm,
      last_name: lastNm,
      email: email,
      description: message,
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

  return (
    <Layout>
      <div className="row mx-0 mb-lg-0 mb-4 pr-lg-4 account-auth-pg account-auth-step-2">
        <div className="col-lg-6 p-0">
          <div className="contacr-details  side-contact-block">
            <h2>
              Got a question for us ? <br /> Lets talk!
            </h2>
            <p>
              We’re here for you. Let us know what you need and how we can be of
              service. Someone will get back to you as soon as humanly possible.
            </p>
            <div className="mt-3">
              <span>
                <i className="fas fa-map-marker-alt"></i>{' '}
                <span className="mx-3">Happy teammates around the globe</span>{' '}
              </span>
            </div>
            <div className="mt-3">
              <span>
                {' '}
                <i className="fas fa-phone"></i>{' '}
                <span className="mx-3">We’re more into texting &#128522;</span>
              </span>
            </div>
            <div className="mt-3">
              <span>
                {' '}
                <i className="fas fa-envelope"></i>{' '}
                <span className="mx-3">InnoBear@floor23digital.com</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 contact-form mt-4 p-4">
          <form>
            <div className="form-row">
              <div className="form-group col-lg-6">
                <label htmlFor="firstName">First name</label>
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
                <label htmlFor="firstName">Last name</label>
                <input
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
                <label htmlFor="Country">Email</label>
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
                <label htmlFor="City">Message</label>
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
              {loading ? (
                <div
                  className="spinner-border text-primary"
                  role="status"></div>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
