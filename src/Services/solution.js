import axios from 'axios';

const createSolution = async data =>
  axios({
    method: 'post',
    url: 'https://innobearadmin.floor23digital.com/api/create-solution',
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });

export {createSolution};
