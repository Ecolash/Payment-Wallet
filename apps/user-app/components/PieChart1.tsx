// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import 'tailwindcss/tailwind.css';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PieElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PieElement,
//     Title,
//     Tooltip,
//     Legend
// );

// interface DataEntry {
//     date: string;
//     income: number;
//     expense: number;
//     category: string;
// }

// const data: DataEntry[] = [
//     { date: '2023-03-01', income: 5000, expense: 2000, category: 'Rent' },
//     { date: '2023-03-02', income: 4500, expense: 3000, category: 'Groceries' },
//     { date: '2023-03-07', income: 2000, expense: 8000, category: 'Utilities' },
//     { date: '2023-04-02', income: 450, expense: 3900, category: 'Transportation' },
//     { date: '2023-04-04', income: 4500, expense: 3000, category: 'Entertainment' },
//     { date: '2023-05-02', income: 8500, expense: 8000, category: 'Healthcare' },
//     { date: '2023-06-02', income: 2500, expense: 7000, category: 'Rent' },
//     { date: '2024-03-01', income: 5000, expense: 2000, category: 'Groceries' },
//     { date: '2024-03-02', income: 4500, expense: 3000, category: 'Utilities' },
//     { date: '2024-03-07', income: 2000, expense: 8000, category: 'Transportation' },
//     { date: '2024-04-02', income: 450, expense: 3900, category: 'Entertainment' },
//     { date: '2024-04-04', income: 4500, expense: 3000, category: 'Healthcare' },
//     { date: '2024-05-02', income: 8500, expense: 8000, category: 'Rent' },
//     { date: '2024-06-02', income: 2500, expense: 7000, category: 'Groceries' },
// ];

// const PieChart = () => {
//     const aggregateDataByCategory = () => {
//         const categories: Record<string, number> = {};

//         data.forEach(entry => {
//             if (!categories[entry.category]) {
//                 categories[entry.category] = 0;
//             }
//             categories[entry.category] += entry.expense;
//         });

//         return categories;
//     };

//     const categoryData = aggregateDataByCategory();

//     const chartData = {
//         labels: Object.keys(categoryData),
//         datasets: [
//             {
//                 data: Object.values(categoryData),
//                 backgroundColor: [
//                     'hsl(120, 80%, 80%)',
//                     'hsl(45, 77%, 80%)',
//                     'hsl(210, 77%, 80%)',
//                     'hsl(300, 77%, 80%)',
//                     'hsl(60, 77%, 80%)',
//                     'hsl(0, 77%, 80%)',
//                 ],
//                 borderColor: [
//                     'hsl(120, 77%, 72%)',
//                     'hsl(45, 77%, 72%)',
//                     'hsl(210, 77%, 72%)',
//                     'hsl(300, 77%, 72%)',
//                     'hsl(60, 77%, 72%)',
//                     'hsl(0, 77%, 72%)',
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 position: 'top' as const,
//                 labels: {
//                     color: 'white',
//                     font: {
//                         size: 14,
//                     },
//                 },
//             },
//             title: {
//                 display: true,
//                 text: 'Merchant Payment',
//                 color: 'white',
//                 font: {
//                     size: 18,
//                 },
//             },
//         },
//     };

//     return (
//         <div className="flex flex-col my-2 bg-cardblack p-2 rounded-xl">
//             <div className="relative w-full h-80">
//                 <Pie data={chartData} options={options} />
//             </div>
//         </div>
//     );
// }

// export default PieChart;
