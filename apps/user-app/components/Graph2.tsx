import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface DataEntry {
    date: string;
    income: number;
    expense: number;
}

const data: DataEntry[] = [
    { date: '2023-03-01', income: 2000, expense: 2000 },
    { date: '2023-03-02', income: 4100, expense: 7000 },
    { date: '2023-03-07', income: 1000, expense: 2000 },
    { date: '2023-04-02', income: 4150, expense: 1900 },
    { date: '2023-04-04', income: 1500, expense: 1000 },
    { date: '2023-05-02', income: 4500, expense: 4000 },
    { date: '2023-06-02', income: 2500, expense: 7000 },    
    { date: '2024-03-01', income: 5000, expense: 2000 },
    { date: '2024-03-02', income: 4500, expense: 3000 },
    { date: '2024-03-07', income: 2000, expense: 8000 },
    { date: '2024-04-02', income: 450, expense: 3900 },
    { date: '2024-04-04', income: 4500, expense: 3000 },
    { date: '2024-05-02', income: 8500, expense: 8000 },
    { date: '2024-06-02', income: 2500, expense: 7000 },
];

const BarChart = () => {
    const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const years = Array.from(new Set(data.map(entry => new Date(entry.date).getFullYear()))).sort();

    const aggregateData = (year: string) => {
        const aggregatedData = { income: new Array(12).fill(0), expense: new Array(12).fill(0), labels: months };
        data.forEach(entry => {
            const date = new Date(entry.date);
            const entryYear = date.getFullYear().toString();
            if (entryYear === year) {
                const monthIndex = date.getMonth();
                aggregatedData.income[monthIndex] += entry.income;
                aggregatedData.expense[monthIndex] += entry.expense;
            }
        });

        return aggregatedData;
    };

    const chartData = aggregateData(selectedYear);

    const dataConfig = {
        labels: chartData.labels,
        datasets: [
            {
                label: 'Expenses',
                data: chartData.expense,
                backgroundColor: 'hsl(270, 60%, 80%)',
            },
            {
                label: 'Income',
                data: chartData.income,
                backgroundColor: 'hsl(270, 50%, 55%)',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'white',
                    font: {
                        size: 14,
                    },
                },
            },
            title: {
                display: true,
                text: `Income vs Expenses for ${selectedYear}`,
                color: 'white',
                font: {
                    size: 20,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 15,
                    },
                },
            },
            y: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 15,
                    },
                },
            },
        },
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    };

    return (
        <div className="flex flex-col my-2 bg-cardblack p-1.5 rounded-xl">
            <div className="flex justify-end mb-[-30px] z-10">
                <select
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="rounded px-2 py-1 bg-subblack text-white text-sm"
                >
                    {years.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="relative w-[650px] h-auto">
                <Bar data={dataConfig} options={options} />
            </div>
        </div>
    );
}

export default BarChart;
