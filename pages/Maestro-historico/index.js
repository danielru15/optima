import {useContext} from 'react'
import { DatosContext } from "../../Context/datosContext"
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Index = () => {
 
  const router = useRouter();
  const columns = [
    { field: "Contratado", headerName: "Contratado", width: 100 },
    { field: "Ejecutado En", headerName: "Ejecutado En", width: 100 },
    { field: "Consecutivo", headerName: "Consecutivo", type: "number" },
    { field: "Oferta", headerName: "Oferta", width: 100 },
    { field: "Linea de Negocio", headerName: "Linea de Negocio" },
    { field: "Seudonimo", headerName: "Seudonimo", width: 100 },
    {
      field: "Nombre del proyecto",
      headerName: "Nombre del proyecto",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      width: 140,
    },
    {
      field: "Descripcion Breve",
      headerName: "Descripcion Breve",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      width: 200,
    },
    { field: "Cliente Directo", headerName: "Cliente Directo", width: 130 },
    { field: "Cliente Final", headerName: "Cliente Final", width: 130 },
    { field: "Director", headerName: "Director", width: 100 },
    { field: "Coordinador", headerName: "Coordinador", width: 100 },
    { field: "Contrato", headerName: "Contrato", width: 130 },
    {
      field: "Fecha Inicio Contractual",
      headerName: "Fecha Inicio Contractual",
    },
    {
      field: "Fecha Terminación Contractual",
      headerName: "Fecha Terminación Contractual",
    },
    { field: "Plazo Dias", headerName: "Plazo Dias" },
    { field: "Fecha Inicio Real", headerName: "Fecha Inicio Real", width: 200 },
    {
      field: "Fecha Terminación Real",
      headerName: "Fecha Terminación Real",
      width: 200,
    },
    { field: "Plazo Dias", headerName: "Plazo Dias" },
    {
      field: "Participación Optima",
      headerName: "Participación Optima",
    },
    {
      field: "Valor Contratado sin IVA",
      headerName: "Valor Contratado sin IVA",
      width: 200,
    },
    { field: "OTROSI 1", headerName: "OTROSI 1", width: 200 },
    { field: "OTROSI 2", headerName: "OTROSI 2", width: 200 },
    { field: "OTROSI 3", headerName: "OTROSI 3", width: 200 },
    { field: "OTROSI 4", headerName: "OTROSI 4", width: 200 },
    { field: "OTROSI 5", headerName: "OTROSI 5", width: 200 },
    { field: "OTROSI 6", headerName: "OTROSI 6", width: 200 },
    { field: "OTROSI 7", headerName: "OTROSI 7", width: 200 },
    { field: "OTROSI 8", headerName: "OTROSI 8", width: 200 },
    { field: "OTROSI 9", headerName: "OTROSI 9", width: 200 },
    { field: "OTROSI 10", headerName: "OTROSI 10", width: 200 },
    { field: "OTROSI 11", headerName: "OTROSI 11", width: 200 },
    { field: "OTROSI 12", headerName: "OTROSI 12", width: 200 },
    {
      field: "Valor Total Contratado sin IVA",
      headerName: "Valor Total Contratado sin IVA",
      width: 200,
    },
    { field: "PCO", headerName: "PCO", width: 200 },
    { field: "Administración", headerName: "Administración", width: 200 },
    { field: "Imprevistos", headerName: "Imprevistos", width: 200 },
    { field: "Utilidad Bruta", headerName: "Utilidad Bruta", width: 200 },
    {
      field: "% Anticipo Contractual",
      headerName: "% Anticipo Contractual",
      width: 200,
    },
    {
      field: "Valor Anticipo Contractual",
      headerName: "valor Anticipo Contractual",
      width: 200,
    },
    {
      field: "ANTICIPOS PAGADOS POR EL CLIENTE",
      headerName: "ANTICIPOS PAGADOS POR EL CLIENTE",
      width: 200,
    },
    {
      field: "Valor Total Facturado Sin IVA",
      headerName: "Valor Total Facturado Sin IVA",
      width: 200,
    },
    {
      field: "IVA",
      headerName: "IVA",
      width: 200,
    },
    {
      field: "% Retegantia",
      headerName: "% Retegantia",
      width: 200,
    },
    {
      field: "Valor Retegantia",
      headerName: "Valor Retegantia",
      width: 200,
    },
    {
      field: "Valor Pendiente Ejecutar o Facturar",
      headerName: "Valor Pendiente Ejecutar o Facturar",
      width: 200,
    },
    {
      field: "Neto Ingresado Al Banco",
      headerName: "Neto Ingresado Al Banco",
      width: 200,
    },
    {
      field: "Valor Anticipo Amortizado Por El Cliente",
      headerName: "Valor Anticipo Amortizado Por El Cliente",
      width: 200,
    },
    {
      field: "Saldo Anticipo Por Amortizar",
      headerName: "Saldo Anticipo Por Amortizar",
      width: 200,
    },
    {
      field:
        "VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)",
      headerName:
        "VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)",
      width: 200,
    },
    {
      field: "Neto Facturas Pendientes de pago",
      headerName: "Neto Facturas Pendientes de pago",
      width: 200,
    },
    {
      field: "Valor anticipo Pendientes de pago",
      headerName: "valor anticipo Pendientes de pago",
      width: 200,
    },
    {
      field: "Relación Facturado / Contratado",
      headerName: "Relación Facturado / Contratado",
      width: 200,
    },
    {
      field: "Estado Contractual",
      headerName: "Estado Contractual",
      width: 200,
    },
  ];

  const registros = [];
  return (
    <>
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
          rows={registros}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
        />
      </div>
    </>
  );
};

export default Index;
