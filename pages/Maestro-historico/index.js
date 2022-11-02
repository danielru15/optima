import Layout from "../../components/layout/Layout";
import {useContext} from 'react'
import { DatosContext } from "../../Context/datosContext"
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import React from "react";
import { DataGrid, GridToolbar, } from '@mui/x-data-grid';

const Index = () => {
  const router = useRouter();
  const {datosMaestro} = useContext(DatosContext)
  console.log(datosMaestro)

  const columns = [
    {field: "Contratado", headerName: "Contratado", width: 100 },
    {field: "Ejecutado", headerName: "Ejecutado En", width: 100 },
    {field: "Consecutivo", headerName: "Consecutivo", type: "number" },
    {field: "Oferta", headerName: "Oferta", width: 400 },
    {field: "LineaNegocio", headerName: "Linea de Negocio" , width: 200, },
    {field: "Seudonimo", headerName: "Seudonimo", width: 600 },
    {field: "Nombre",headerName: "Nombre del proyecto",width: 900,},
    {field: "DescripcionBreve", headerName: "Descripcion Breve",width: 900,},
    {field: "ClienteDirecto", headerName: "Cliente Directo", width: 300 },
    {field: "ContactoCliente", headerName: "Contacto Cliente", width: 300 },
    {field: "ClienteFinal", headerName: "Cliente Final", width: 300 },
    {field: "Director", headerName: "Director", width: 100 },
    {field: "Coordinador", headerName: "Coordinador", width: 200 },
    {field: "Contrato", headerName: "Contrato", width: 300 },
    {field: "FechaInicioContractual",headerName: "Fecha Inicio Contractual",width: 300,},
    {field: "FechaFinalContractual", headerName: "Fecha Terminación Contractual",width: 300,},
    {field: "FechaInicioReal", headerName: "Fecha Inicio Real", width: 300 },
    {field: "FechaFinalReal",headerName: "Fecha Terminación Real",width: 300,},
    {field: "ParticipacionOPTIMA", headerName: "Participación Optima",width: 200,},
    {field: "ValorContratoSinIVA", headerName: "Valor Contratado sin IVA",width: 200,},
    {field: "IVA", headerName: "IVA",width: 100, },
    {field: "OTROSSI1", headerName: "OTROSSI 1", width: 200 },
    {field: "OTROSSI2", headerName: "OTROSSI 2", width: 200 },
    {field: "OTROSSI3", headerName: "OTROSSI 3", width: 200 },
    {field: "OTROSSI4", headerName: "OTROSSI 4", width: 200 },
    {field: "OTROSSI5", headerName: "OTROSSI 5", width: 200 },
    {field: "OTROSSI6", headerName: "OTROSSI 6", width: 200 },
    {field: "OTROSSI7", headerName: "OTROSSI 7", width: 200 },
    {field: "OTROSSI8", headerName: "OTROSSI 8", width: 200 },
    {field: "OTROSSI9", headerName: "OTROSSI 9", width: 200 },
    {field: "OTROSSI10", headerName: "OTROSSI 10", width: 200 },
    {field: "OTROSSI11", headerName: "OTROSSI 11", width: 200 },
    {field: "OTROSSI12", headerName: "OTROSSI 12", width: 200 },
    {field: "TotalOtrossi", headerName: "TOTAL OTROSSI", width: 200 },
    {field: "ValorTotalContratado",headerName: "Valor Total Contratado sin IVA",width: 300,},
    {field: "PCO", headerName: "PCO", width:300 },
    {field: "Administracion", headerName: "Administración", width: 300 },
    {field: "Imprevistos", headerName: "Imprevistos", width: 300 },
    {field: "UtilidadBruta", headerName: "Utilidad Bruta", width: 300 },
    {field: "PorcentAnticipoContractural",headerName: "% Anticipo Contractual", width: 100,},
    {field: "AnticipoContractual",headerName: "valor Anticipo Contractual",width: 300,},
    {field: "AnticiposPagadosxElCliente",headerName: "ANTICIPOS PAGADOS POR EL CLIENTE",width: 300,},
    {field: "ValorTotalFacturadoSinIVA",headerName: "Valor Total Facturado Sin IVA",width: 300,},
    {field: "IVAFacturado",headerName: "IVA FACTURADO",width: 300,},
    {field: "RetegantiaPorcent",headerName: "% Retegantia",width: 100,},
    {field: "ValorReteGantia",headerName: "Valor Retegantia",width: 300,},
    {field: "ValorPendientePorFacturarSinIVA",headerName: "Valor Pendiente Ejecutar o Facturar",width: 300,},
    {field: "FacturasPagadsPorElCliente",headerName: "Neto Ingresado Al Banco",width: 300,},
    {field: "AnticipoAmortizadoPorElCliente",headerName: "Valor Anticipo Amortizado Por El Cliente",width: 300,},
    {field: "SaldoAnticipoPorAmortizar",headerName: "Saldo Anticipo Por Amortizar",width: 300,},
    {field:"RetencionesYDescuentos", headerName:"VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)",width: 300,},
    {field: "FacturacionPendientedePago", headerName: "Neto Facturas Pendientes de pago",width: 300,},
    {field: "AnticiposPendientesDePago",headerName: "valor anticipo Pendientes de pago",width: 300,},
    {field: "RelacionFacturadoContratado",headerName: "Relación Facturado / Contratado",width: 200,},
    {field: "Estado",headerName: "Estado",width: 200},
    {
      field: "click",
      headerName: "Click",
      width: 90,
      renderCell: (params) => {
         // you will find row info in params
         <button>Click</button>
      }
    },
  ]

  return (
    <Layout>
      <p>Maestro Historico</p>
      <Button
        variant="contained"
        onClick={() => router.push("/Maestro-historico/Crear")}
      >
        Crear
      </Button>
      <br />
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={datosMaestro}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}

        />
        
      </div>
    </Layout>
  );
};

export default Index;
