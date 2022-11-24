import React, {useContext} from 'react'
import Layout from "../components/layout/Layout";
import { DatosContext } from "../Context/datosContext"
import { Button } from '@mui/material'
import * as XLSX from 'xlsx';

const Facturacion = () => {
  const {setfirst,first,CrearDatosF} = useContext(DatosContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    CrearDatosF(first)
  }
  
  
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
            setfirst(json)
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
}
  return (
    <Layout>
      <p>facturas</p>
      <input
        type="file"
        name="upload"
        id="upload"
        onChange={readUploadFile}
    />
    <button type='submit' onClick={handleSubmit}>subir a firebase</button>


    </Layout>
  )
}

export default Facturacion