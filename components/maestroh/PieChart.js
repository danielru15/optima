import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = ({datosMaestro, TotalDatosMaestro}) => {
    let TotalEncurso = Math.round((datosMaestro.filter(item => item.Estado === 'EN CURSO').length/TotalDatosMaestro)*100 )
    let TotalCerrados = Math.round((datosMaestro.reduce((counter, { Estado }) => Estado === 'CERRADO' ? counter += 1 : counter, 0)/TotalDatosMaestro)*100)
    let TotalCerradoAdministrativo = Math.round((datosMaestro.reduce((counter, { Estado }) => Estado === 'CIERRE ADMINISTRATIVO' ? counter += 1 : counter, 0)/TotalDatosMaestro)*100)
    let TotalSuspendio = Math.round((datosMaestro.filter(item => item.Estado === 'SUSPENDIDO').length/TotalDatosMaestro)*100)

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '% Estado',
          },
        },
      };

    const data = {
        labels: ['EN CURSO','CERRADO', 'CIERRE ADMINISTRATIVO', 'SUSPENDIDO'],
        datasets: [
          {
            label: '%',
            data: [TotalEncurso, TotalCerrados, TotalCerradoAdministrativo, TotalSuspendio],
            backgroundColor: [
              'rgba(0, 106, 2)',
              'rgba(180, 14, 39)',
              'rgba(79, 91, 185)',
              'rgba(234, 92, 0)',
            ],
            borderColor: [
              'rgba(0, 106, 2)',
              'rgba(180, 14, 39)',
              'rgba(79, 91, 185)',
              'rgba(234, 92, 0)',
            ],
            borderWidth: 1,
          },
        ],
      }


  return (
    <div>
        <Pie data={data}options={options} />
    </div>
  )
}

export default PieChart