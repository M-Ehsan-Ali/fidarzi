import Chart from "chart.js/auto"; // Import Chart.js
import { useEffect, useRef } from "react";

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const names = [
      "50% IEO @ $0.01 USD",
      " 25% VIP FOUNDATION IDO SALES ROUNDS (CURRENT)",
      "10% FOUNDER TOKENS (3 YEARS VESTED)",
      "5% STABILITY AND LIQUIDITY RESERVES",
      "5% MARKETING AND BRANDING",
      "3.75% IDO AFFILIATE PROGRAM",
      "1.25% DEVELOPMENT TEAM REWARDS",
    ];
    const dataValues = [50, 25, 10, 5, 5, 3.75, 1.25];
    const dataBackgroundColors = [
      "#CBA85D",
      "#EBE3A0",
      "#0DAB8D",
      "#9B4DE2",
      "#B79AF7",
      "#CAB9F9",
      "#DDD5F7",
    ];

    // Chart Data
    const data = {
      datasets: [
        {
          data: dataValues,
          backgroundColor: dataBackgroundColors,
          hoverOffset: 4,
        },
      ],
    };

    // Chart Options
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const dataIndex = context.dataIndex;
              return names[dataIndex]; // Display name instead of data value
            },
          },
        },
      },
    };

    // Create Chart
    const myChart = new Chart(chartRef.current, {
      type: "doughnut",
      data: data,
      options: options,
    });

    // Cleanup
    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
