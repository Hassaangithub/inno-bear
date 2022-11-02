import axios from 'axios';

const fetchStats = async params =>
  axios({
    method: 'get',
    url: `http://localhost/innobear/azizsolutions/api/dashboard-stats`,
    data: params,
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });

export {fetchStats};
