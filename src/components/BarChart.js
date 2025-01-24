import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function BarChart({labels, data }) {
console.log(labels, data);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Tooltip
    );

    const options = {
        responsive: true,
    };

    const dataset = {
        labels,
        datasets: [
            {
                data: data,
                backgroundColor: 'rgba(40, 22, 201, 0.6)',
            }
        ],
    };
    return <Bar options={options} data={dataset} />;

}

export default BarChart;