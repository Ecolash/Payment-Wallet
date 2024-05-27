'use client'
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface Series {
  name: string;
  data: number[];
}

interface ChartOptions extends ApexOptions {
  toolbar: {
    show: boolean;
  };
}

interface Data {
  series: Series[];
  options: ChartOptions;
}

const Graph: React.FC = () => {
  const data: Data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 700,
        width: 1200,
        background: '#1E1E1E', // Dark background for dark mode
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
            customIcons: [],
          },
          autoSelected: 'zoom',
        },
      },
      fill: {
        colors: ["#1CAC78"], // Darker gradient fill
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        // curve: "smooth",
        colors: ["#1CAC78"],
      },
      tooltip: {
        theme: 'dark', // Dark mode tooltip
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        labels: {
          style: {
            colors: '#ffffff', // White labels for dark mode
          },
        },
      },
      yaxis: {
        show: true,
        labels: {
          style: {
            colors: '#ffffff', // White labels for dark mode
          },
        },
      },
      toolbar: {
        show: false
      }
    },
  };

  return (
    <div className="CustomerReview bg-cardblack rounded-2xl p-5 box-border w-full max-w-full">
      <Chart options={data.options} series={data.series} type="area" height={280} width={660}/>
      <style jsx global>{`
        .apexcharts-menu-item {
          color: black !important; /* Menu bar text color */
        }
      `}</style>
    </div>
  );
};

export default Graph;
