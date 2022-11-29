import React, {useContext} from 'react'
import Layout from "../components/layout/Layout";
import { DatosContext } from "../Context/datosContext"
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import * as XLSX from 'xlsx';

const Facturacion = () => {
  const {setfirst,first,CrearDatosF} = useContext(DatosContext)
  
  

  return (
    <Layout>
      <p>facturas</p>
      <TextField 
        variant="outlined"  type="file"
        name="upload"
        id="upload"
        onChange={readUploadFile}
      />
      
      
    <Button type='submit' onClick={handleSubmit}>subir a firebase</Button>


    </Layout>
  )
}

export default Facturacion