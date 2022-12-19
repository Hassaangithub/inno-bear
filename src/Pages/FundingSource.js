import React from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import CustomModal from '../components/CustomModal';
import Layout from '../components/Layout';
import Image1 from '../images/bank-transfer-1.png';
import Image2 from '../images/bank-transfer-2.png';
import Image3 from '../images/bank-transfer-3.png';
import Image4 from '../images/bank-transfer-4.png';
import Image5 from '../images/challenge-img.png';
import Image6 from '../images/share-icon.png';
import {
  useStripe,
  useElements,
  CardElement,
  CardExpiryElement,
  CardCvcElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const PUBLIC_KEY = 'pk_live_9Qn6W31EUmj6MYM6qYerPAhp00jL1mKZjs';
const options = {
  clientSecrete: process.env.REACT_APP_STRIPE_CLIENT_SECRETE,
};
const stripePromise = loadStripe(PUBLIC_KEY);
console.log('helo', process.env.REACT_APP_STRIPE_CLIENT_SECRETE);

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};
const FundingSource = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [nonce, setNonce] = useState(null);
  // const stripe = useStripe();
  // const elements = useElements();
  const navigate = useNavigate();
  const [fundingMethod, setFundingMethod] = useState('visa');
  const [cardholderName, setCardholderName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cvv, setCvv] = useState();
  const [date, setDate] = useState();
  const [saveDetails, setSaveDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  // console.log({
  //   fundingMethod,
  //   cardholderName,
  //   cardNumber,
  //   cvv,
  //   date,
  //   saveDetails,
  // });

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = async e => {
    // e.preventDefault();
    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: elements.getElement(CardElement),
    // });
    // if (!error) {
    //   try {
    //     const {id} = paymentMethod;
    //     const response = await axios(
    //       'http://localhost/innobear/azizsolutions/api/payment',
    //       {
    //         amount: 1000,
    //         id,
    //       },
    //     );
    //     if (response.data.success) {
    //       console.log('Successfull payment');
    //       setSuccess(true);
    //     }
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    // } else {
    //   console.log('error', error.message);
    // }
  };

  // console.log(nonce, error);

  return (
    <Layout>
      <CustomModal show={show} handleClose={handleClose} modalType="info">
        <div className="modal-body challenge-body">
          <div className="text-center">
            <h4>
              Great!! A Challenge Genius will connect with you to ensure you're
              all setup and ready to go!
            </h4>
            <p className="below-main-heading">
              Your project is live with your Grizzly Plan!!
            </p>
            <img
              src={Image5}
              alt="challenge-img"
              className="my-xl-5 my-lg-4 my-3"
            />
          </div>
          <div className="d-flex justify-content-center mb-lg-5 mb-3">
            <button
              type="submit"
              className="px-md-4 white-btn btn"
              onClick={() => navigate('/home')}>
              Return to homepage
            </button>
            <button
              type="button"
              className="d-flex align-items-center btn btn-primary ml-lg-5 ml-3">
              <img src={Image6} alt="share-icon" />
              Share your challenge
            </button>
          </div>
          <p class="text-center mb-0">
            Do you want to supercharge your number of challenge participants?
          </p>
          <p class="text-center mb-0">
            We can help, contact us{' '}
            <Link to="/contact-us" class="orange">
              here
            </Link>
          </p>
        </div>
      </CustomModal>
      {/* <Elements stripe={stripePromise} options={options}> */}
      <div className="page-main-content mt-3 px-md-5 px-3">
        <div className="col-xl-6 mx-auto">
          <h2 className="text-center">
            Connect a <span className="orange h2">Funding</span> Source
          </h2>
          <p className="text-center mb-0">
            Choose the funding method you will use to provide your prize awards.
            You don't have to complete this step now, but it should be completed
            within 5 days of your challenge live date, to get your badge showing
            brilliant minds that your challenge is ready, funded, and open for
            ideas
          </p>
        </div>
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mb-md-5 mb-3 mx-auto p-0 steps-model funding-method">
          <h5 className="mb-0 text-center p-4 main-heading">
            Choose a Funding Method
          </h5>
          {/* <CardElement /> */}
          {/* <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
            <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
            <CardNumberElement options={CARD_ELEMENT_OPTIONS} /> */}
          <div className="d-flex justify-content-between p-4">
            <div className="d-flex flex-column align-items-center cursor-na">
              <span className="img-holder">
                <img src={Image1} alt="bank-transfer-1" />
              </span>
              <small className="grey-text">Wire Transfer</small>
            </div>
            <div
              className="d-flex flex-column align-items-center"
              role="button">
              <span className="img-holder active">
                <img src={Image2} alt="bank-transfer-2" />
              </span>
              <small className="grey-text active">Visa</small>
            </div>
            <div className="d-flex flex-column align-items-center cursor-na">
              <span className="img-holder">
                <img src={Image3} alt="bank-transfer-3" />
              </span>
              <small className="grey-text">Paypal</small>
            </div>
            <div className="d-flex flex-column align-items-center cursor-na">
              <span className="img-holder">
                <img src={Image4} alt="bank-transfer-4" />
              </span>
              <small className="grey-text">Off Platform</small>
            </div>
          </div>
          <form className="px-4 pb-5">
            <div className="w-100 form-group mb-sm-4 mb-3">
              <h6>Cardholder’s Name</h6>
              <input
                type="text"
                className="form-control"
                value={cardholderName}
                onChange={e => setCardholderName(e.target.value)}
              />
            </div>
            <div className="w-100 form-group mb-sm-4 mb-3">
              <h6>Card Number</h6>
              <input
                type="text"
                className="form-control"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-6">
                <h6>CVV</h6>
                <input
                  type="text"
                  className="form-control"
                  onChange={e => setCvv(e.target.value)}
                />
              </div>
              <div className="form-group col-6">
                <h6>Date</h6>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="chalOne"
                value={saveDetails}
                onChange={e => setSaveDetails(e.target.checked)}
              />
              <label
                className="my-1 custom-control-label pass-below-text"
                htmlFor="chalOne">
                Save my funding details for future challenges
              </label>
            </div>
            <div className="mt-xl-5 mt-sm-4 mt-3 text-center">
              <button
                type="submit"
                className="w-100 mb-3 btn text-white"
                onClick={handleSubmit}>
                {loading ? (
                  <div
                    className="spinner-border text-primary spinner-border-md"
                    role="status"
                  />
                ) : (
                  'Add Funding Method'
                )}
              </button>
              <a href="#">
                <h6 className="d-inline">Do this later</h6>
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* </Elements> */}
    </Layout>
  );
};

export default FundingSource;
