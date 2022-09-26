import axios from "axios";

const allChallenges = async =>
axios({
  method: 'get',
  url: 'https:/azizsolutions.onecoderz.com/api/user-login',
  headers: {'Content-Type': 'multipart/form-data'},
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });


  export{allChallenges}