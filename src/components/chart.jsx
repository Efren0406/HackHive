import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data, type, colors, border }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy(); // Destruye el gráfico existente antes de inicializar uno nuevo
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: type,
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Kilos not Wasted',
            data: data.values,
            backgroundColor: colors,
            borderColor: border,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
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
    <div className=''>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
