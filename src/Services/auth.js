import axios from 'axios';

const login = async params =>
  axios({
    method: 'post',
    url: 'https:/azizsolutions.onecoderz.com/api/user-login',
    data: params,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });

const registerUser = async params =>
  axios({
    method: 'post',
    url: 'https:/azizsolutions.onecoderz.com/api/user-register',
    data: params,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(function (response) {
      return response;
    })
    .catch(function (response) {
      console.log(response);
    });

export {login, registerUser};
