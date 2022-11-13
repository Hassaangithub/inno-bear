import axios from 'axios';

const login = async params =>
  axios({
    method: 'post',
    url: `https://azizsolutions.onecoderz.com/api/user-login`,
    data: params,
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const registerUser = async params =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/user-register`,
    data: params,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(function (response) {
      return response;
    })
    .catch(function (response) {
      return response;
    });

const registerUserStep1 = async params =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/create-account-step-1-validations`,
    data: params,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(function (response) {
      return response;
    })
    .catch(function (response) {
      return response;
    });

const registerUserStep2 = async params =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/create-account-step-2-validations`,
    data: params,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(function (response) {
      return response;
    })
    .catch(function (response) {
      return response;
    });

export {login, registerUser, registerUserStep1, registerUserStep2};
