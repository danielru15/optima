import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS,
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
  )

const Grafico = ({año,datosMaestro}) => {
    let result = año.map((fecha) => {
        let TotalContratado = 0;
        let TotalFacturado = 0
        let TotalIngresado = 0

        datosMaestro.forEach((dato) => {
            if (dato.FechaInicioContractual.includes(fecha)) {
                TotalContratado += dato.ValorTotalContratado
                TotalFacturado += dato.ValorTotalFacturadoSinIVA
                TotalIngresado += dato.FacturasPagadsPorElCliente
            }
        });
        return { fecha,TotalFacturado, TotalContratado, TotalIngresado};
        })
        .sort((a, b) => a.fecha - b.fecha);
        const labels = result.map((f) => f.fecha);
    

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '',
          },
        },
      };
    
      
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Total Contratado',
          data:result.map((f) => f.TotalContratado),
          backgroundColor: 'rgba(15, 91, 36 )',
        },
        {
          label: 'Total Facturado',
          data:result.map((f) => f.TotalFacturado),
          backgroundColor: 'rgba(0, 141, 38)',
        },
        {
            label: 'Total Ingresado al Banco',
            data:result.map((f) => f.TotalIngresado),
            backgroundColor: 'rgba(53, 162, 235, 0.9)',
          },
      ],
    }

  return (
    <div style={{width:800}}>
    <Bar options={options} data={data} />
    </div>
  )
}

export default Grafico