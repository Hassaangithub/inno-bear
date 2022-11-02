import axios from 'axios';

const AllPlans = async data =>
  axios({
    method: 'get',
    url: `${process.env.REACT_APP_BASE_URL}/plans`,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

export {AllPlans};
