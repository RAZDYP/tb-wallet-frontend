// src/components/CandlestickChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const CandlestickChart = () => {
    const data = {
        labels: ['2023-09-20', '2023-09-21', '2023-09-22'], // Dates for demonstration
        datasets: [
            {
                label: 'High-Low',
                data: [
                    { t: new Date('2023-09-20').getTime(), y: 105 },
                    { t: new Date('2023-09-21').getTime(), y: 103 },
                    { t: new Date('2023-09-22').getTime(), y: 104 }
                ],
                backgroundColor: 'transparent',
                borderColor: '#000',
                type: 'line',
                segment: {
                    borderColor: ctx => ctx.p0.y < ctx.p1.y ? 'red' : 'green',
                }
            },
            {
                label: 'Open-Close',
                data: [
                    { x: new Date('2023-09-20').getTime(), y: 100, o: 104 },
                    { x: new Date('2023-09-21').getTime(), y: 101, o: 102 },
                    { x: new Date('2023-09-22').getTime(), y: 103, o: 102 }
                ],
                backgroundColor: ctx => ctx.raw.y < ctx.raw.o ? 'red' : 'green',
                borderColor: 'transparent',
                barPercentage: 0.3,
                categoryPercentage: 1
            }
        ]
    };

    const options = {
        scales: {
            x: {
                type: 'time',
                position: 'bottom',
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return <Bar data={data} options={options} />;
}

export default CandlestickChart;
