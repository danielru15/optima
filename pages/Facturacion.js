import React, {useState, useContext} from 'react'
import { DatosContext } from "../Context/datosContext"
import Layout from '../components/layout/Layout'
import { DataGrid } from '@mui/x-data-grid'
import { TextField, Button } from '@mui/material'
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import * as XLSX from 'xlsx';
const Facturacion = () => {
    const {IdF, setIdF, Importarfactura,Facturacion} = useContext(DatosContext)
    let columns = [
        {field:"Num", headerName: "Num", width:100},
        {field:"Tipo documento", headerName: "TipoDocumento", width:400},
        {field:"Datos del comprador", headerName: "DatosdelComprador", width:600},
        {field:"Numero Identificacion", headerName: "NumeroIdentificacion", width:600},
        {field:"Centro de costos", headerName: "Centrodecostos", width:600},
        {field:"Fecha", headerName: "Fecha", width:600},
        {field:"Fecha Vencimiento", headerName: "FechaVencimiento", width:600},
        {field:"Concepto", headerName: "Concepto", width:1000},
        {field:"Valor antes de IVA", headerName: "ValorAntesdeIVA", width:600},
        {field:"IVA", headerName: "IVA", width:600},
        {field:"Total con IVA", headerName: "TotalconIVA", width:600},
        {field:"Retención en la fuente", headerName: "RetencionFuente", width:600},
        {field:"Retención IVA", headerName: "RetencionIVA", width:600},
        {field:"Retincion ICA", headerName: "RetincionICA", width:600},
        {field:"Amortizacion", headerName: "Amortizacion", width:600},
        {field:"Pronto Pago", headerName: "ProntoPago", width:600},
        {field:"Retencion x Garantia", headerName: "RetencionxGarantia", width:600},
        {field:"Total a Pagar", headerName: "TotalaPagar", width:600},
        {field:"Valor Pagado o Abonado", headerName: "ValorPagadooAbonado", width:600},
        {field:"Saldo Despues de Pago o Abono", headerName: "SaldoDespuesdePagooAbono", width:600},
        {field:"Fecha de pago", headerName: "Fechadepago", width:600},
        {field:"Estado", headerName: "Estatus", width:600},
    ]
    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                setIdF(json)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }
    console.log(IdF)
    const handleSubmit = (e) => {
        e.preventDefault()
        Importarfactura(IdF)
      
      }
  return (
    <Layout>
        <TextField 
        variant="outlined"  type="file"
        name="upload"
        id="upload"
        onChange={readUploadFile}
      />
     <Button color='secondary' onClick={handleSubmit} endIcon={<UploadFileOutlinedIcon/>}>Importar</Button>
        <div style={{ height: 500, width: "100%" }}>
      <DataGrid 
        rows={Facturacion}
       columns={columns}
       pageSize={7}       
      />           
      </div>
    </Layout>
  )
}

export default Facturacion