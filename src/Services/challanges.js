import axios from 'axios';

const allChallenges = () =>
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

const singleChallenge = id =>
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

const createChallenge = data =>
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

const saveChallenge1 = data =>
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

const saveChallenge2 = data =>
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

const saveChallenge3 = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-3`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const saveChallenge4 = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-4`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const saveChallenge5 = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-5`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const saveChallenge6 = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-6`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const saveChallenge7 = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/save-challenge-step-7`,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const getCommunity = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/challenge-topic`,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const getUpdates = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/challenge-updates`,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const postComment = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/challenge-topica-dd-answer`,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

const addTopic = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/add-topic-in-challenge`,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response.data;
    });

const updateChallenge = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/challenge-update`,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response.data;
    });

export {
  allChallenges,
  createChallenge,
  saveChallenge1,
  saveChallenge2,
  saveChallenge3,
  saveChallenge4,
  saveChallenge5,
  saveChallenge6,
  saveChallenge7,
  singleChallenge,
  getUpdates,
  getCommunity,
  postComment,
  addTopic,
  updateChallenge,
};
