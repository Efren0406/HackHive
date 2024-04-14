import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy(); // Destruye el gráfico existente antes de inicializar uno nuevo
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Kilos not Wasted',
            data: data.values,
            backgroundColor: 'rgb(54,193,2, 0.2)',
            borderColor: 'rgba(54,193,2, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Limpia el gráfico al desmontar el componente
      }
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
