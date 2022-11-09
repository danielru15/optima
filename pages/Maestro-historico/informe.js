import { Card, CardContent, Grid, Typography } from '@mui/material'
import {useContext, useState} from 'react'
import { DatosContext } from "../../Context/datosContext"
import Layout from '../../components/layout/Layout'


const Informe = () => {
  const {datosMaestro,formatodivisa} = useContext(DatosContext)
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
    </Layout>
  )
}

export default Informe