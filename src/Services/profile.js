import axios from 'axios';

const getProfileData = () =>
  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_URL}/edit-profile`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const postUpdatedData = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/update-profile`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data',
    },
    data: data,
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const getCountries = () =>
  axios({
    method: 'get',
    url: `https://countriesnow.space/api/v0.1/countries/states`,
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const getCities = data =>
  axios({
    method: 'post',
    url: `https://countriesnow.space/api/v0.1/countries/cities`,
    headers: {'Content-Type': 'application/json'},
    data: data,
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const changePassword = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/change-password`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
    data: data,
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

export {
  getProfileData,
  postUpdatedData,
  getCountries,
  getCities,
  changePassword,
};
