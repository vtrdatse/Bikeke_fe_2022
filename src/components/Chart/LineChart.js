import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
function LineChar() {
    Chart.register(CategoryScale);
    return (
        <div>
            <Line
                data={{
                    labels: [
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                    ],
                    datasets: [
                        {
                            label: 'New Customers',
                            data: [12, 19, 3, 5, 2, 20],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 1,
                        },
                        {
                            label: 'New Driver',
                            data: [5, 9, 1, 2, 15, 4],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}
                height={460}
                width={720}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
}

export default LineChar;
