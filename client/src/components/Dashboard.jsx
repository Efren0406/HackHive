import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navigation from './Navigation';
import Chat from './Chat';

const Dashboard = () => {
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
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
          datasets: [{
            label: 'Ventas Mensuales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
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
  }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navigation />
            {/* Barra lateral */}
            {/* <div className="bg-gray-800 text-white w-64 p-4">
                <h1 className="text-xl font-bold mb-4">Dashboard</h1>
                <ul>
                <li className="py-2">Inicio</li>
                <li className="py-2">Estadísticas</li>
                <li className="py-2">Configuración</li>
                </ul>
            </div> */}

            {/* Contenido principal */}
            <div className="flex-1 p-4">
                <h2 className="text-2xl font-bold mb-4">Bienvenido al Dashboard</h2>

                {/* Recuadros con estadísticas */}
                <div className="flex flex-wrap">
                    <Chat />
                </div>

                {/* Gráfico de barras */}
                <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Ventas Mensuales</h3>
                <canvas ref={chartRef} width="400" height="200"></canvas>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
