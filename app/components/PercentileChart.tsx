import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PercentileChart = ({ mypercentile }: { mypercentile?: number }) => {
  const initialData = [
    { x: 0, y: 1 },
    { x: 10, y: 3 },
    { x: 20, y: 5 },
    { x: 30, y: 10 },
    { x: 40, y: 20 },
    { x: 50, y: 25 },
    { x: 60, y: 22 },
    { x: 70, y: 15 },
    { x: 80, y: 10 },
    { x: 90, y: 4 },
    { x: 100, y: 1 },
  ];

  const updatedData = mypercentile
    ? initialData.map((entry) => {
        if (entry.x === mypercentile) {
          return { ...entry, y: entry.y + 1 };
        }
        return entry;
      }).concat(
        initialData.some(entry => entry.x === mypercentile)
          ? []
          : [{ x: mypercentile, y: 1 }]
      )
    : initialData;

  const sortedData = updatedData.sort((a, b) => a.x - b.x);

  const highlightPoint = mypercentile
    ? [{
        x: mypercentile,
        y: updatedData.find(entry => entry.x === mypercentile)?.y || 1,
      }]
    : [];

  const data = {
    labels: sortedData.map(entry => entry.x),  // Adding x values as labels
    datasets: [
      {
        label: 'Number of Students at Percentiles',
        data: sortedData,
        fill: true,
        borderColor: 'rgb(30 58 138)',
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: 'rgb(30 58 138)',
        borderWidth: 2,
      },
      {
        label: 'Your Percentile',
        data: highlightPoint,
        pointRadius: 10,
        pointBackgroundColor: 'rgb(255, 0, 0)',
        borderColor: 'rgb(255, 0, 0)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.raw.y} students`;
          },
        },
      },
    },
    scales: {
      x: {
        display: true, 
        grid: {
          display: false, 
        },
      },
      y: {
        display: false,  
        grid: {
          display: false, 
        },
      },
    },
  };

  return (
    <div className='lg:my-0 my-10'>
      <Line data={data} options={options} />
    </div>
  );
};

export default PercentileChart;
