import axios from 'axios';

const contactUs = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/contact-us`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
    data: data,
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const userContact = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/user-contact-email`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
    data: data,
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const getFaqs = () =>
  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_URL}/faqs`,
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const getPrivacyPolicy = () =>
  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_URL}/privacy-policy`,
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const getTermAndConditions = () =>
  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_URL}/term-of-use`,
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

export {
  contactUs,
  userContact,
  getFaqs,
  getPrivacyPolicy,
  getTermAndConditions,
};
