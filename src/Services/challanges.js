import axios from 'axios';

const allChallenges = async =>
  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_URL}/challenges`,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });

const singleChallenge = async id =>
  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_URL}/challenge?challenge_id=${id}`,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

const createChallenge = async data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/create-challenge`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

const saveChallenge1 = async data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-1`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const saveChallenge2 = async data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-2`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const saveChallenge3 = async data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-3`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });

const saveChallenge4 = async data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-4`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });

const saveChallenge5 = async data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-5`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });

const saveChallenge6 = async data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-6`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
const saveChallenge7 = async data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/api/save-challenge-step-7`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });

export {
  allChallenges,
  createChallenge,
  saveChallenge1,
  saveChallenge2,
  saveChallenge3,
  saveChallenge5,
  saveChallenge6,
  saveChallenge7,
  singleChallenge,
};
