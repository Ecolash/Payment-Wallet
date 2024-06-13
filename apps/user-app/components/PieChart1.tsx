'use client';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

interface PieChartProps {
  data: { [key: string]: number };
  colors: { [key: string]: string };
}

const PieChart: React.FC<PieChartProps> = ({ data, colors }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: Object.keys(data).map(category => colors[category]),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true, 
      },
    },
  };

  return (
    <div className="w-[280px] mx-auto items-center">
      <h2 className="text-center text-[18px] font-bold font-sans mb-2">Expenditure by Category</h2>
      <Pie data={chartData} options={options} height={500} width={500} />
    </div>
  );
};

export default PieChart;
