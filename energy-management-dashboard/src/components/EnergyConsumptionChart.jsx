import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EnergyConsumptionChart = () => {
    const data = {
        labels: [
            '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
            '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
            '20:00', '21:00', '22:00', '23:00'
        ],
        datasets: [
            {
                label: 'Energy Consumption (kWh)',
                data: [
                    0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 1.0, 1.5, 1.8, 2.0, 
                    2.3, 2.5, 3.0, 3.2, 2.8, 2.5, 2.0, 1.8, 1.7, 1.5, 
                    1.2, 1.0, 0.8, 0.6
                ],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Energy Consumption per Hour',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time of Day',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Energy (kWh)',
                },
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default EnergyConsumptionChart;
