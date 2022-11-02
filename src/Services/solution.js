import axios from 'axios';

const createSolution = async data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/create-solution`,
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
