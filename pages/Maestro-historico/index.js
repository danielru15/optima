import Layout from "../../components/layout/Layout";
import {useContext} from 'react'
import { DatosContext } from "../../Context/datosContext"
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Index = () => {
  const router = useRouter();
  const {datosMaestro} = useContext(DatosContext)
  console.log(datosMaestro)

  const columns = [
    { field: "Contratado", headerName: "Contratado", width: 100 },
    { field: "Ejecutado", headerName: "Ejecutado En", width: 100 },
    { field: "Consecutivo", headerName: "Consecutivo", type: "number" },
    { field: "Oferta", headerName: "Oferta", width: 100 },
    { field: "LineaNegocio", headerName: "Linea de Negocio" },
    { field: "Seudonimo", headerName: "Seudonimo", width: 100 },
    {
      field: "Nombre",
      headerName: "Nombre del proyecto",
    },
    {
      field: "DescripcionBreve",
      headerName: "Descripcion Breve",
    },
    { field: "ClienteDirecto", headerName: "Cliente Directo", width: 130 },
    { field: "ContactoCliente", headerName: "Contacto Cliente", width: 130 },
    { field: "ClienteFinal", headerName: "Cliente Final", width: 130 },
    { field: "Director", headerName: "Director", width: 100 },
    { field: "Coordinador", headerName: "Coordinador", width: 100 },
    { field: "Contrato", headerName: "Contrato", width: 130 },
    {
      field: "FechaInicioContractual",
      headerName: "Fecha Inicio Contractual",
    },
    {
      field: "FechaFinalContractual",
      headerName: "Fecha Terminación Contractual",
    },
    { field: "FechaInicioReal", headerName: "Fecha Inicio Real", width: 200 },
    {
      field: "FechaFinalReal",
      headerName: "Fecha Terminación Real",
      width: 200,
    },
    {
      field: "ParticipacionOPTIMA",
      headerName: "Participación Optima",
    },
    {
      field: "ValorContratoSinIVA",
      headerName: "Valor Contratado sin IVA",
      width: 200,
    },
    {
      field: "IVA",
      headerName: "IVA",
    },
    { field: "OTROSSI1", headerName: "OTROSSI 1", width: 200 },
    { field: "OTROSSI2", headerName: "OTROSSI 2", width: 200 },
    { field: "OTROSSI3", headerName: "OTROSSI 3", width: 200 },
    { field: "OTROSSI4", headerName: "OTROSSI 4", width: 200 },
    { field: "OTROSSI5", headerName: "OTROSSI 5", width: 200 },
    { field: "OTROSSI6", headerName: "OTROSSI 6", width: 200 },
    { field: "OTROSSI7", headerName: "OTROSSI 7", width: 200 },
    { field: "OTROSSI8", headerName: "OTROSSI 8", width: 200 },
    { field: "OTROSSI9", headerName: "OTROSSI 9", width: 200 },
    { field: "OTROSSI10", headerName: "OTROSSI 10", width: 200 },
    { field: "OTROSSI11", headerName: "OTROSSI 11", width: 200 },
    { field: "OTROSSI12", headerName: "OTROSSI 12", width: 200 },
    { field: "TotalOtrossi", headerName: "TOTAL OTROSSI", width: 200 },
    {
      field: "ValorTotalContratado",
      headerName: "Valor Total Contratado sin IVA",
      width: 200,
    },
    { field: "PCO", headerName: "PCO", width: 200 },
    { field: "Administración", headerName: "Administración", width: 200 },
    { field: "Imprevistos", headerName: "Imprevistos", width: 200 },
    { field: "UtilidadBruta", headerName: "Utilidad Bruta", width: 200 },
    {
      field: "PorcentAnticipoContractural",
      headerName: "% Anticipo Contractual",
      width: 200,
    },
    {
      field: "AnticipoContractual",
      headerName: "valor Anticipo Contractual",
      width: 200,
    },
    {
      field: "AnticiposPagadosxElCliente",
      headerName: "ANTICIPOS PAGADOS POR EL CLIENTE",
    },
    {
      field: "ValorTotalFacturadoSinIVA",
      headerName: "Valor Total Facturado Sin IVA",
      width: 200,
    },
    {
      field: "IVAFacturado",
      headerName: "IVA FACTURADO",
      width: 200,
    },
    {
      field: "RetegantiaPorcent",
      headerName: "% Retegantia",
      width: 200,
    },
    {
      field: "ValorReteGantia",
      headerName: "Valor Retegantia",
      width: 200,
    },
    {
      field: "ValorPendientePorFacturarSinIVA",
      headerName: "Valor Pendiente Ejecutar o Facturar",
      width: 200,
    },
    {
      field: "FacturasPagadsPorElCliente",
      headerName: "Neto Ingresado Al Banco",
      width: 200,
    },
    {
      field: "AnticipoAmortizadoPorElCliente",
      headerName: "Valor Anticipo Amortizado Por El Cliente",
      width: 200,
    },
    {
      field: "SaldoAnticipoPorAmortizar",
      headerName: "Saldo Anticipo Por Amortizar",
      width: 200,
    },
    {
      field:
        "RetencionesYDescuentos",
      headerName:
        "VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)",
      width: 200,
    },
    {
      field: "FacturacionPendientedePago",
      headerName: "Neto Facturas Pendientes de pago",
      width: 200,
    },
    {
      field: "AnticiposPendientesDePago",
      headerName: "valor anticipo Pendientes de pago",
      width: 200,
    },
    {
      field: "RelacionFacturadoContratado",
      headerName: "Relación Facturado / Contratado",
      width: 200,
    }
  ];
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
          options={[{
            icon:'edit',
            tooltip:'editar'
          }
        ]}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
        />
      </div>
    </Layout>
  );
};

export default Index;
