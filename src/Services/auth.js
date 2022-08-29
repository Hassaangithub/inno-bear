import axios from 'axios';

const login = async params => {
  axios({
    method: 'post',
    url: 'https:/azizsolutions.onecoderz.com/api/user-login',
    data: params,
    headers: {'Content-Type': 'multipart/form-data'},
  })
    .then(function (response) {
      if (response.data.successData.user.accessToken) {
        localStorage.setItem(
          'TOKEN',
          response.data.successData.user.accessToken,
        );
      }
      // console.log(response.data.successData.user.accessToken);
    })
    .catch(function (response) {
      console.log(response);
    });
};

export {login};
