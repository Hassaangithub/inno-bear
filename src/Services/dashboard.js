import axios from 'axios';

const fetchStats = () =>
  axios({
    method: 'get',
    url: `https://azizsolutions.onecoderz.com/api/dashboard-stats`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const fetchSubmittedIdeas = () =>
  axios({
    method: 'get',
    url: `https://azizsolutions.onecoderz.com/api/dashboard-challenges`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const fetchAllSolutions = () =>
  axios({
    method: 'get',
    url: `https://azizsolutions.onecoderz.com/api/user-submitted-solution`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const fetchSolutionById = id =>
  axios({
    method: 'get',
    url: `https://azizsolutions.onecoderz.com/api/submitted-solution?solution_id=${id}`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const fetchOngoingChallenges = id =>
  axios({
    method: 'get',
    url: `https://azizsolutions.onecoderz.com/api/ongoing-challenges`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const fetchOngoingChallengesById = id =>
  axios({
    method: 'get',
    url: `https://azizsolutions.onecoderz.com/api/submitted-solution?solution_id=${id}`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

const allUserChallenges = async =>
  axios({
    method: 'get',
    url: `https://azizsolutions.onecoderz.com/api/user-challenges`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });

export {
  fetchStats,
  fetchSubmittedIdeas,
  fetchAllSolutions,
  fetchSolutionById,
  fetchOngoingChallenges,
  fetchOngoingChallengesById,
  allUserChallenges,
};
