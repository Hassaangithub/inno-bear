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
import PaymentForm from '../components/Paymentform';

const PUBLIC_KEY = 'pk_test_574eldxLSK8mMqpYQz3alvnO00WAyRJgV5';
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
      <CustomModal show={show} handleClose={handleClose}>
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
      <Elements stripe={stripePromise} options={options}>
        <PaymentForm />
      </Elements>
    </Layout>
  );
};

export default FundingSource;
