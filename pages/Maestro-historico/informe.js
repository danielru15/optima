import { Button, Card, CardContent, Grid,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Box, InputLabel, FormLabel, FormControl, Select, MenuItem } from '@mui/material'
import {useContext, useState} from 'react'
import { DatosContext } from "../../Context/datosContext"
import Layout from '../../components/layout/Layout'
import { lineHeight } from '@mui/system'


const Informe = () => {
  const {datosMaestro,formatodivisa} = useContext(DatosContext)

  let Linea = []
  const Categoria = [...new Set(datosMaestro.map((Val) => Val.LineaNegocio))];


  // valores Totales
  let Total_Contratado = datosMaestro.reduce(
    (sum, value) => typeof value.ValorTotalContratado === "number"? sum + value.ValorTotalContratado: sum, 0);
    
  let Total_Facturado = datosMaestro.reduce(
    (sum, value) => typeof value.ValorTotalFacturadoSinIVA === "number" ? sum + value.ValorTotalFacturadoSinIVA : sum,0 );

    let Neto_ingresado = datosMaestro.reduce(
      (sum, value) => typeof value.FacturasPagadsPorElCliente === "number" ? sum + value.FacturasPagadsPorElCliente : sum,0 );

  let Pendiente_Facturar = datosMaestro.reduce(
    (sum, value) => typeof value.ValorPendientePorFacturarSinIVA === "number" ? sum + value.ValorPendientePorFacturarSinIVA : sum,0 );
  
  let Total_Anticipos = datosMaestro.reduce(
    (sum, value) => typeof value.AnticipoContractual === "number" ? sum + value.AnticipoContractual : sum,0 )

  let Total_Anticipos_Pagados = datosMaestro.reduce(
    (sum, value) => typeof value.AnticiposPagadosxElCliente === "number" ? sum + value.AnticiposPagadosxElCliente : sum,0 )
  
  let Total_AnticiposxAmortizar = datosMaestro.reduce(
      (sum, value) => typeof value.SaldoAnticipoPorAmortizar === "number" ? sum + value.SaldoAnticipoPorAmortizar : sum,0 )

  let Anticipo_pendiente_pago = datosMaestro.reduce(
  (sum, value) => typeof value.AnticiposPendientesDePago === "number" ? sum + value.AnticiposPendientesDePago : sum,0 )
  
  return (
    <Layout>
      <Typography variant='h4'>Informe</Typography>
      <Grid container spacing={2} marginTop={2}>
      <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography color={'darkgreen'}>Valor total Contratado</Typography>
              <Typography>{formatodivisa.format(Total_Contratado)}</Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography color={'darkgreen'}>Valor total Facturado</Typography>
              <Typography>{formatodivisa.format(Total_Facturado)}</Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography color={'darkgreen'}>Valor total Ingresado</Typography>
              <Typography>{formatodivisa.format(Neto_ingresado)}</Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography color={'darkgreen'}>Valor total pendiente Facturar</Typography>
              <Typography>{formatodivisa.format(Pendiente_Facturar)}</Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography color={'darkgreen'}>
                 Valor total Anticipos
              </Typography>
              <Typography>{formatodivisa.format(Total_Anticipos)}</Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography color={'darkgreen'}>
                Valor total Anticipos Pagados
              </Typography>
              <Typography>{formatodivisa.format(Total_Anticipos_Pagados)}</Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography color={'darkgreen'}>Valor total anticipo por amortizar</Typography>
              <Typography>{formatodivisa.format(Total_AnticiposxAmortizar)}</Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography color={'darkgreen'}>total anticipo pendiente pago</Typography>
              <Typography>{formatodivisa.format(Anticipo_pendiente_pago)}</Typography>
            </CardContent>
          </Card>

        </Grid>
      </Grid>
      <form type="submit">
        <FormLabel>Filtrar</FormLabel>

        <FormControl>
        <InputLabel>Linea Negocio</InputLabel>
        <Select
          label="Linea Negocio"
        >
         {
          Categoria.map((c,i) => (
            <MenuItem  key={i} value={c}>{c}</MenuItem>
          ))
         }
        </Select>
        </FormControl>
        <TextField 
        type="date"
        />
        <TextField 
        type="date"
        />
        <TextField 
        type="date"
        />
        <TextField 
        type="date"
        />
        <Button variant="contained" color='success' >Filtrar</Button>
      </form>
      <TableContainer >
        <Table sx={{width:"max-content"}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{
                        position: 'sticky',
                        left: 0,
                        background: 'white',
                        zIndex: 800,
                    }}>Seudonimo</TableCell>
              <TableCell>Linea Negocio</TableCell>
              <TableCell>Total Contratado</TableCell>
              <TableCell>Total Facturado</TableCell>
              <TableCell>Total Ingresado</TableCell>
              <TableCell>Total pendiente facturar</TableCell>
              <TableCell>Total Anticipos</TableCell>
              <TableCell>Total Anticpos pagados</TableCell>
              <TableCell>Total Anticipo por amortizar</TableCell>
              <TableCell>Total Anticipos pendientes de pago</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
                datosMaestro.map(dato => (
                  <TableRow key={dato.id}>
                    <TableCell style={{
                        position: 'sticky',
                        left: 0,
                        background: 'white',
                        zIndex: 800,
                    }}>{dato.Seudonimo}</TableCell>
                    <TableCell>{dato.LineaNegocio}</TableCell>
                    <TableCell>{formatodivisa.format(dato.ValorTotalContratado)}</TableCell>
                    <TableCell>{formatodivisa.format(dato.ValorTotalFacturadoSinIVA)}</TableCell>
                    <TableCell>{formatodivisa.format(dato.FacturasPagadsPorElCliente)}</TableCell>
                    <TableCell>{formatodivisa.format(dato.FacturacionPendientedePago)}</TableCell>
                    <TableCell>{formatodivisa.format(dato.AnticipoContractual)}</TableCell>
                    <TableCell>{formatodivisa.format(dato.AnticiposPagadosxElCliente)}</TableCell>
                    <TableCell>{formatodivisa.format(dato.SaldoAnticipoPorAmortizar)}</TableCell>
                    <TableCell>{formatodivisa.format(dato.AnticiposPendientesDePago)}</TableCell>
                  </TableRow>
                ))
              }
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

export default Informe