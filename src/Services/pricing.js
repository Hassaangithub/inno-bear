import axios from 'axios';

const AllPlans = async data =>
  axios({
    method: 'get',
    url: 'https://innobearadmin.floor23digital.com/api/plans',
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

export {AllPlans};
