import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ScoreHistory = ({ score = 76, data }) => {
  // Generate last 6 days dates
  const generateDefaultDates = () => {
    const dates = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }));
    }
    return dates;
  };

  // Use provided data or generate default data using score
  const chartData = {
    labels: data?.labels || generateDefaultDates(),
    datasets: [
      {
        label: "Project Score",
        data: data?.scores || Array(6).fill(score),
        borderColor: "rgb(83 192 159)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
        tension: 0.13,
        pointRadius: 0,
        pointHoverRadius: 0,
        pointBorderWidth: 0,
      },
    ],
  };

  const scores = data?.scores || Array(6).fill(score);
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
        title: {
          display: false,
        },
        min: Math.floor(Math.min(...scores) - 1),
        max: Math.ceil(Math.max(...scores) + 1),
      },
    },
  };

  return (

    <div>
    <div className="inline-block text-sm font-normal">Score History</div>
    <div className="flex flex-col">
      <div style={{ maxHeight: '80px', overflow: 'hidden' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  </div>

  );
};

export default ScoreHistory;