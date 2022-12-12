import React from 'react'
import Layout from '../../components/layout/Layout'
import {useContext, useState} from 'react'
import { DatosContext } from "../../Context/datosContext"
import { useRouter } from "next/router";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, renderCell } from '@mui/x-data-grid';
import { Chip } from "@mui/material";
import * as XLSX from 'xlsx';

const Extranjeros = () => {
  const {datosMaestroE,EliminarE,IdmE, setIdmE,ImportarDatosME} = useContext(DatosContext)
  const [Search, setSearch] = useState('')
  const router = useRouter();
  let datos = []

  const downloadxls = (e, data) => {
    e.preventDefault();
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "OI-SGI-F-0094 EXTRANJEROS");
    /* generate XLSX file and send to client */
    XLSX.writeFile(wb, "Maestro Historico Extranjeros.xls");
  };

  const Searcher = (e) => {
    setSearch(e.target.value)
  }

  if (!Search) {
    datos = datosMaestroE
  }else {
    datos = datosMaestroE.filter((dato) => dato.Seudonimo.toLowerCase().includes(Search.toLocaleLowerCase())) 
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  const usdPrice = {
    type: 'number',
    valueFormatter: ({ value }) => currencyFormatter.format(value),
    cellClassName: 'font-tabular-nums',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ImportarDatosME(IdmE)
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
            setIdmE(json)
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  const columns = [
    {headerName: "Acciones", width:200, type:"actions", renderCell:(params)=> <ButtonGroup>
      <IconButton aria-label="eliminar">
        <DeleteIcon onClick={() => Eliminar(params.id)} color="error"/>
      </IconButton>
      <IconButton aria-label="edit">
        <EditIcon  onClick={() => router.push(`/Maestro-historico/${params.row.id}`)}/>
      </IconButton>
    </ButtonGroup>},
    {field:"Contratado", headerName: "Contratado", width:100},
    {field:"Ejecutado", headerName: "Ejecutado En"},
    {field:"Consecutivo", headerName: "Consecutivo"},
    {field:"Oferta", headerName: "Oferta", width:400},
    {field:"LineaNegocio", headerName: "Linea de Negocio"},
    {field:"Seudonimo", headerName: "Seudonimo", width:300},
    {field:"Nombre", headerName: "Nombre del proyecto", width:800},
    {field: "DescripcionBreve", headerName: "Descripcion Breve",width: 900,},
    {field: "ClienteDirecto", headerName: "Cliente Directo", width: 300 },
    {field: "ContactoCliente", headerName: "Contacto Cliente", width: 300 },
    {field: "ClienteFinal", headerName: "Cliente Final", width: 300 },
    {field: "Director", headerName: "Director", width: 100 },
    {field: "Coordinador", headerName: "Coordinador", width: 200 },
    {field: "Contrato", headerName: "Contrato", width: 300 },
    {field: "FechaInicioContractual",headerName: "Fecha Inicio Contractual",width: 300, type:"date"},
    {field: "FechaFinalContractual", headerName: "Fecha Terminación Contractual",width: 300,type:"date"},
    {field:"PlazoContractual", headerName:"Plazo Contractual", width:200},
    {field: "FechaInicioReal", headerName: "Fecha Inicio Real", width: 300,type:"date" },
    {field: "FechaFinalReal",headerName: "Fecha Terminación Real",width: 300,type:"date",},
    {field:"PlazoReal", headerName:"Plazo Real", width:200},
    {field: "ParticipacionOPTIMA", headerName: "Participación Optima",width: 200,valueFormatter: ({ value }) => `${value}%`},
    {field: "ValorContratoSinIVA", headerName: "Valor Contratado sin IVA",width: 200,...usdPrice },
    {field: "IVA", headerName: "IVA",width: 200,...usdPrice  },
    {field: "OTROSI1", headerName: "OTROSSI 1", width: 200,...usdPrice, },
    {field: "OTROSI2", headerName: "OTROSSI 2", width: 200,...usdPrice  },
    {field: "OTROSI3", headerName: "OTROSSI 3", width: 200,...usdPrice },
    {field: "OTROSI4", headerName: "OTROSSI 4", width: 200,...usdPrice  },
    {field: "OTROSI5", headerName: "OTROSSI 5", width: 200,...usdPrice  },
    {field: "OTROSI6", headerName: "OTROSSI 6", width: 200,...usdPrice  },
    {field: "OTROSI7", headerName: "OTROSSI 7", width: 200,...usdPrice  },
    {field: "OTROSI8", headerName: "OTROSSI 8", width: 200,...usdPrice  },
    {field: "OTROSI9", headerName: "OTROSSI 9", width: 200,...usdPrice  },
    {field: "OTROSI10", headerName: "OTROSSI 10", width: 200,...usdPrice  },
    {field: "OTROSI11", headerName: "OTROSSI 11", width: 200,...usdPrice  },
    {field: "OTROSI12", headerName: "OTROSSI 12", width: 200,...usdPrice  },
    {field: "TotalOtrossi", headerName: "TOTAL OTROSSI", width: 200,...usdPrice  },
    {field: "ValorTotalContratado",headerName: "Valor Total Contratado sin IVA",width: 300,...usdPrice },
    {field: "PCO", headerName: "PCO", width:300,...usdPrice  },
    {field: "Administracion", headerName: "Administración", width: 300,...usdPrice  },
    {field: "Imprevistos", headerName: "Imprevistos", width: 300,...usdPrice  },
    {field: "UtilidadBruta", headerName: "Utilidad Bruta", width: 300,...usdPrice  },
    {field: "PorcentAnticipoContractural",headerName: "% Anticipo Contractual", width: 200,valueFormatter: ({ value }) => `${value}%`},
    {field: "AnticipoContractual",headerName: "valor Anticipo Contractual",width: 300,...usdPrice },
    {field: "AnticiposPagadosxElCliente",headerName: "ANTICIPOS PAGADOS POR EL CLIENTE",width: 300,...usdPrice },
    {field: "ValorTotalFacturadoSinIVA",headerName: "Valor Total Facturado Sin IVA",width: 300,...usdPrice },
    {field: "IVAFacturado",headerName: "IVA FACTURADO",width: 300,...usdPrice },
    {field: "RetegantiaPorcent",headerName: "% Retegantia",width: 100,valueFormatter: ({ value }) => `${value}%`},
    {field: "ValorReteGantia",headerName: "Valor Retegantia",width: 300,...usdPrice },
    {field: "ValorPendientePorFacturarSinIVA",headerName: "Valor Pendiente Ejecutar o Facturar",width: 300,...usdPrice, cellClassName: (params) => params.value >= 1 ? 'saldo-x-amortizar' : '' },
    {field: "FacturasPagadsPorElCliente",headerName: "Neto Ingresado Al Banco",width: 300,...usdPrice },
    {field: "AnticipoAmortizadoPorElCliente",headerName: "Valor Anticipo Amortizado Por El Cliente",width: 300,...usdPrice },
    {field: "SaldoAnticipoPorAmortizar",headerName: "Saldo Anticipo Por Amortizar",width: 300,...usdPrice, cellClassName: (params) => params.value >= 1 ? 'saldo-x-amortizar' : '' },
    {field:"RetencionesYDescuentos", headerName:"VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)",...usdPrice, width:500 },
    {field: "FacturacionPendientedePago", headerName: "Neto Facturas Pendientes de pago",width: 300,...usdPrice, cellClassName: (params) => params.value >= 1 ? 'pendiente-pago' : '' },
    {field: "AnticiposPendientesDePago",headerName: "valor anticipo Pendientes de pago",width: 300,...usdPrice, cellClassName: (params) => params.value >= 1 ? 'pendiente-pago' : '' },
    {field: "RelacionFacturadoContratado",headerName: "Relación Facturado / Contratado",width: 200,valueFormatter: ({ value }) => `${Math.round(value)}%`, },
    {field:"Estado", headerName: "Estado", width:220, renderCell:(params) => <Chip label={params.value} color={params.value === 'EN CURSO' ?  'success' : params.value === 'CERRADO' ?  'error' : params.value ==='CIERRE ADMINISTRATIVO' ? 'warning' : 'default' } /> }
  ]

  return (
    <Layout>
      <p>Maestro Historico Extranjeros</p>
      <br/>
      <TextField 
        variant="outlined"  type="file"
        name="upload"
        id="upload"
        onChange={readUploadFile}
      />
      <ButtonGroup variant="contained" aria-label="small button group" size="small">
      <Button color='secondary' onClick={handleSubmit} endIcon={<UploadFileOutlinedIcon/>}>Importar</Button>
      <Button
        variant="contained"
        onClick={() => router.push("/Maestro-historico/crearE")}
        endIcon={<AddCircleOutlineOutlinedIcon/>}
      >Crear</Button>
      <Button
      color="success"
        variant="contained"
        onClick={(e) => {
          downloadxls(e, datos);
        }}
        endIcon={<FileDownloadOutlinedIcon/>}
      >
        Descargar
      </Button>
      </ButtonGroup>
      <br />
      <TextField fullWidth margin="dense"  value={Search} onChange={Searcher} label="Buscar" />
      <br />
      <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={datos}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6,10,25,50,200]}
      />
      </div>
    </Layout>
  )
}

export default Extranjeros