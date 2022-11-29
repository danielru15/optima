import React, {useState} from 'react'
import { useRef } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import { Button, Card, CardContent, Grid,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Box, InputLabel, FormLabel, FormControl, Select, MenuItem } from '@mui/material'
import * as XLSX from 'xlsx';
import Grafico from './Grafico';

const InformeCard = ({datosMaestro,formatodivisa,titulo, name}) => {
    const [Linea, setLinea] = useState('')
    const [Coord, setCoord] = useState('')
    const [Seudonimoo, setSeudonimoo] = useState('')
    const [FechaInicioC, setFechaInicioC] = useState('')
    const [FechaFinC, setFechaFinC] = useState('')
    const [Estade, setEstade] = useState('')
    const [filtro, setFiltro] = useState()
    const first = useRef()
    const Categoria = [...new Set(datosMaestro.map((Val) => Val.LineaNegocio))];
    const Coordinador = [...new Set(datosMaestro.map((Val) => Val.Coordinador))]
    const Seudonimo = [...new Set(datosMaestro.map((Val) => Val.Seudonimo))]
    const Estado = ['Cerrado','Cierre administrativo', 'En curso']
    const regresarfecha = (datosMaestro) => {
      return new Date(datosMaestro.FechaInicioContractual).getFullYear()
    }
    const fechaPrestamo = datosMaestro.map(regresarfecha);
    const año_Contractual = [...new Set(fechaPrestamo)]
    const tableRef = useRef(null);

    const downloadxls = (e, data) => {
      e.preventDefault();
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, `${name}`);
      /* generate XLSX file and send to client */
      XLSX.writeFile(wb, "Informe.xls");
    };
   //Function filtro

   
const filtrar = (e) => {
    e.preventDefault()
    if(Seudonimo !== '' || Linea !== '' || FechaInicioC !== '' ||  FechaFinC !== '' || Coord !== '' || Estade !== ''){
      setFiltro(datosMaestro.filter((d) => d.Seudonimo === Seudonimoo || d.LineaNegocio === Linea  || Coord === d.Coordinador || Estade === d.Estado ))
    }
  }
  const limpiar = (e) => {
    e.preventDefault()
    setSeudonimoo('')
    setFechaFinC('')
    setFechaInicioC('')
    setLinea('')
    setCoord('')
    setFiltro('')
    setEstade('')
  }

    // valores Totales
    let Total_Contratado = filtro?filtro.reduce(
      (sum, value) => typeof value.ValorTotalContratado === "number"? sum + value.ValorTotalContratado: sum, 0):datosMaestro.reduce(
        (sum, value) => typeof value.ValorTotalContratado === "number"? sum + value.ValorTotalContratado: sum, 0)
      
    let Total_Facturado = filtro?filtro.reduce(
      (sum, value) => typeof value.ValorTotalFacturadoSinIVA === "number" ? sum + value.ValorTotalFacturadoSinIVA : sum,0 ):datosMaestro.reduce(
        (sum, value) => typeof value.ValorTotalFacturadoSinIVA === "number" ? sum + value.ValorTotalFacturadoSinIVA : sum,0 )
  
      let Neto_ingresado = filtro?filtro.reduce(
        (sum, value) => typeof value.FacturasPagadsPorElCliente === "number" ? sum + value.FacturasPagadsPorElCliente : sum,0 ):datosMaestro.reduce(
          (sum, value) => typeof value.FacturasPagadsPorElCliente === "number" ? sum + value.FacturasPagadsPorElCliente : sum,0 )
  
    let Pendiente_Facturar = filtro?filtro.reduce(
      (sum, value) => typeof value.ValorPendientePorFacturarSinIVA === "number" ? sum + value.ValorPendientePorFacturarSinIVA : sum,0 ):datosMaestro.reduce(
        (sum, value) => typeof value.ValorPendientePorFacturarSinIVA === "number" ? sum + value.ValorPendientePorFacturarSinIVA : sum,0 )
    
    let Total_Anticipos = filtro?filtro.reduce(
      (sum, value) => typeof value.AnticipoContractual === "number" ? sum + value.AnticipoContractual : sum,0 ):datosMaestro.reduce(
        (sum, value) => typeof value.AnticipoContractual === "number" ? sum + value.AnticipoContractual : sum,0 )
  
    let Total_Anticipos_Pagados = filtro?filtro.reduce(
      (sum, value) => typeof value.AnticiposPagadosxElCliente === "number" ? sum + value.AnticiposPagadosxElCliente : sum,0 ):datosMaestro.reduce(
        (sum, value) => typeof value.AnticiposPagadosxElCliente === "number" ? sum + value.AnticiposPagadosxElCliente : sum,0 )
    
    let Total_AnticiposxAmortizar = filtro?filtro.reduce(
        (sum, value) => typeof value.SaldoAnticipoPorAmortizar === "number" ? sum + value.SaldoAnticipoPorAmortizar : sum,0 ):datosMaestro.reduce(
          (sum, value) => typeof value.SaldoAnticipoPorAmortizar === "number" ? sum + value.SaldoAnticipoPorAmortizar : sum,0 )
  
    let Anticipo_pendiente_pago = filtro?filtro.reduce(
    (sum, value) => typeof value.AnticiposPendientesDePago === "number" ? sum + value.AnticiposPendientesDePago : sum,0 ):datosMaestro.reduce(
      (sum, value) => typeof value.AnticiposPendientesDePago === "number" ? sum + value.AnticiposPendientesDePago : sum,0 )
    
    let UtilidadBruta = filtro?filtro.reduce(
        (sum, value) => typeof value.UtilidadBruta === "number" ? sum + value.UtilidadBruta : sum,0 ):datosMaestro.reduce(
          (sum, value) => typeof value.UtilidadBruta === "number" ? sum + value.UtilidadBruta : sum,0 )
    
    let Total_Imprevistos = filtro?filtro.reduce(
            (sum, value) => typeof value.Imprevistos === "number" ? sum + value.Imprevistos : sum,0 ):datosMaestro.reduce(
              (sum, value) => typeof value.Imprevistos === "number" ? sum + value.Imprevistos : sum,0 )
    
    let Total_Otrossi = filtro?filtro.reduce(
                (sum, value) => typeof value.TotalOtrossi === "number" ? sum + value.TotalOtrossi : sum,0 ):datosMaestro.reduce(
                  (sum, value) => typeof value.TotalOtrossi === "number" ? sum + value.TotalOtrossi : sum,0 )
                  
    let Total_Administracion = filtro?filtro.reduce(
        (sum, value) => typeof value.Administracion === "number" ? sum + value.Administracion : sum,0 ):datosMaestro.reduce(
        (sum, value) => typeof value.Administracion === "number" ? sum + value.Administracion : sum,0 )
    
        let Total_Pco = filtro?filtro.reduce(
          (sum, value) => typeof value.PCO === "number" ? sum + value.PCO : sum,0 ):datosMaestro.reduce(
            (sum, value) => typeof value.PCO === "number" ? sum + value.PCO : sum,0 )
    
  // Indicadores
  let Margen_bruto_Porcentual = (UtilidadBruta/Total_Contratado)*100
  let utilidad_operacional = UtilidadBruta - Total_Administracion
  let Margen_operacional = (Total_Contratado/utilidad_operacional)*100
    return (
      <>
        <Typography variant='h4'>{titulo}</Typography>
        <Grafico año={año_Contractual} datosMaestro={datosMaestro}/>
        <Grid container spacing={2} marginTop={2} marginBottom={4}>
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
                <Typography color={'darkgreen'}>Total anticipo pendiente pago</Typography>
                <Typography>{formatodivisa.format(Anticipo_pendiente_pago)}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <Card>
              <CardContent>
                <Typography color={'darkgreen'}>Total utilidad bruta</Typography>
                <Typography>{formatodivisa.format(UtilidadBruta)}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <Card>
              <CardContent>
                <Typography color={'darkgreen'}>Total Otrossi</Typography>
                <Typography>{formatodivisa.format(Total_Otrossi)}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <Card>
              <CardContent>
                <Typography color={'darkgreen'}>Total Imprevistos</Typography>
                <Typography>{formatodivisa.format(Total_Imprevistos)}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <Card>
              <CardContent>
                <Typography color={'darkgreen'}>Valor total PCO</Typography>
                <Typography>{formatodivisa.format(Total_Pco)}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <Card>
              <CardContent>
                <Typography color={'darkgreen'}>Valor total Adminisracion</Typography>
                <Typography>{formatodivisa.format(Total_Administracion)}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <Card>
              <CardContent>
                <Typography color={'darkgreen'}>Utilidad Operacional</Typography>
                <Typography>{formatodivisa.format(utilidad_operacional)}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
        </Grid>
        <Typography variant='p'>Indicadores</Typography>
        <Grid container spacing={1} marginTop={2} marginBottom={4} >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Card>
              <CardContent>
                <Typography color={'darkgreen'}>Margen Operacional: Total ingresos/Utilidad operacional</Typography>
                <Typography>{`${Math.round(Margen_operacional)}%`}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Card>
              <CardContent>
                <Typography color={'darkgreen'}>Margen Bruto Porcentual: Utilidad Bruta / Total Contratado</Typography>
                <Typography>{`${Math.round(Margen_bruto_Porcentual)}%`}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          
        </Grid>
        <form onSubmit={filtrar} ref={first} >
          <FormLabel>Filtrar</FormLabel>
          <FormControl>
          <InputLabel>Seudonimo</InputLabel>
          <Select
            label="Seudonimo"
            value={Seudonimoo}
            onChange={e => setSeudonimoo(e.target.value)}
          >
           {
            Seudonimo.map((c,i) => (
              <MenuItem  key={i} value={c}>{c}</MenuItem>
            ))
           }
          </Select>
          </FormControl>
          <FormControl>
          <InputLabel>Linea Negocio</InputLabel>
          <Select
            label="Linea Negocio"
            value={Linea}
            onChange={e => setLinea(e.target.value)}
          >
           {
            Categoria.map((c,i) => (
              <MenuItem  key={i} value={c}>{c}</MenuItem>
            ))
           }
          </Select>
          </FormControl>
          <FormControl>
          <InputLabel>Coordinador</InputLabel>
          <Select
            label="coordinador"
            value={Coord}
            onChange={e => setCoord(e.target.value)}
          >
           {
            Coordinador.map((c,i) => (
              <MenuItem  key={i} value={c}>{c}</MenuItem>
            ))
           }
          </Select>
          </FormControl>
          <TextField 
          label="Fecha inicio"
          type="month"
          onChange={e => setFechaInicioC(e.target.value)}
        
          
          />
          
          <TextField 
          type="month"
          label="Fecha fin"
          onChange={e => setFechaFinC(e.target.value)}
      
          />
          <FormControl>
          <InputLabel>Estado</InputLabel>
          <Select
            label="Estado"
            value={Estade}
            onChange={e => setEstade(e.target.value)}
          >
           {
            Estado.map((c,i) => (
              <MenuItem  key={i} value={c}>{c}</MenuItem>
            ))
           }
          </Select>
          </FormControl>
          <ButtonGroup>
            <Button variant="contained" color='success' type="submit" >Filtrar</Button>
            <Button variant="contained" color='error' onClick={limpiar} >Limpiar</Button>
            <Button onClick={(e) => {downloadxls(e, filtro?filtro:datosMaestro)}} variant="contained" color='warning' >Descargar</Button>
          </ButtonGroup>
        </form>
        <TableContainer marginTop={3}>
          <Table sx={{width:"max-content"}} aria-label="simple table" ref={tableRef}>
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
                <TableCell>Total Utilidad Bruta</TableCell>
                <TableCell>Total Otrossi</TableCell>
                <TableCell>Imprevistos</TableCell>
                <TableCell>Administracion</TableCell>
                <TableCell>PCO</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                  filtro?filtro.map(dato => (
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
                      <TableCell>{formatodivisa.format(dato.UtilidadBruta)}</TableCell>
                      <TableCell>{formatodivisa.format(dato.TotalOtrossi)}</TableCell>
                      <TableCell>{formatodivisa.format(dato.Imprevistos)}</TableCell>
                      <TableCell>{formatodivisa.format(dato.Administracion)}</TableCell>
                        <TableCell>{formatodivisa.format(dato.PCO)}</TableCell>
                    </TableRow>
                  )):
                  <>
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
                        <TableCell>{formatodivisa.format(dato.UtilidadBruta)}</TableCell>
                        <TableCell>{formatodivisa.format(dato.TotalOtrossi)}</TableCell>
                        <TableCell>{formatodivisa.format(dato.Imprevistos)}</TableCell>
                        <TableCell>{formatodivisa.format(dato.Administracion)}</TableCell>
                        <TableCell>{formatodivisa.format(dato.PCO)}</TableCell>
                      </TableRow>
                    ))
                  }
                  </>
                }
            </TableBody>
          </Table>
        </TableContainer>
        </>
  )
}

export default InformeCard