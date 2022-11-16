import axios from 'axios';

const contactUs = data =>
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/contact-us`,
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
    data: data,
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });

export {contactUs};
