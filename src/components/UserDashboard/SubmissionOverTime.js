import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      // data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
      data: [212, 112, 1212, 1212, 2121, 122, 12, 9, 2444],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const SubmissionOverTime = () => {
  return (
    <div className="col-xl-8 col-sm-7 mb-sm-0 mb-3">
      <div className="p-4 box-shadow">
        <h5 className="mb-4">Submissions over time</h5>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default SubmissionOverTime;
