import { createContext, useState, useEffect} from "react";
export { useContext } from "react";
import { auth, db} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection,onSnapshot, orderBy, query,addDoc, Timestamp,doc, getDocs,updateDoc,deleteDoc,setDoc} from "firebase/firestore";
import moment from "moment/moment";
import { getJsDateFromExcel } from 'excel-date-to-js'
export const DatosContext = createContext();


export const DatosProvider = ({ children }) => {
  const [Idm, setIdm] = useState([])
  const [IdmE, setIdmE] = useState([])
  const [IdF, setIdF] = useState([])
  const [Facturacion, setFacturacion] = useState([])
  const [User, setUser] = useState('')
  const [Contratado, setContratado] = useState('')
  const [Ejecutado, setEjecutado] = useState('')
  const [Nombre, setNombre] = useState('')
  const [Seudonimo, setSeudonimo] = useState('')
  const [Consecutivo, setConsecutivo] = useState('')
  const [Oferta, setOferta] = useState('')
  const [LineaNegocio, setLineaNegocio] = useState('')
  const [DescripcionBreve, setDescripcionBreve] = useState('')
  const [ClienteDirecto, setClienteDirecto] = useState('')
  const [FechaiC, setFechaiC] = useState('')
  const [FechafC, setFechafC] = useState('')
  const [FechafR, setFechafR] = useState('')
  const [FechaiR, setFechaiR] = useState('')
  const [ContactoCliente, setContactoCliente] = useState('')
  const [ClienteFinal, setClienteFinal] = useState('')
  const [Director, setDirector] = useState('')
  const [Coordinador, setCoordinador] = useState('')
  const [Contrato, setContrato] = useState('')
  const [ParticipacionOPTIMA, setParticipacionOPTIMA] = useState()
  const [ValorContratoSinIVA, setValorContratoSinIVA] = useState()
  const [OTROSSI1, setOTROSSI1] = useState(0)
  const [OTROSSI2, setOTROSSI2] = useState(0)
  const [OTROSSI3, setOTROSSI3] = useState(0)
  const [OTROSSI4, setOTROSSI4] = useState(0)
  const [OTROSSI5, setOTROSSI5] = useState(0)
  const [OTROSSI6, setOTROSSI6] = useState(0)
  const [OTROSSI7, setOTROSSI7] = useState(0)
  const [OTROSSI8, setOTROSSI8] = useState(0)
  const [OTROSSI9, setOTROSSI9] = useState(0)
  const [OTROSSI10, setOTROSSI10] = useState(0)
  const [OTROSSI11, setOTROSSI11] = useState(0)
  const [OTROSSI12, setOTROSSI12] = useState(0)
  const [ImpuestosE, setImpuestosE] = useState(0)
  const [PCO, setPCO] = useState(0)
  const [Administracion, setAdministracion] = useState(0)
  const [Imprevistos, setImprevistos] = useState(0)
  const [UtilidadBruta, setUtilidadBruta] = useState(0)
  const [PorcentAnticipoContractural, setPorcentAnticipoContractural] = useState()
  const [AnticiposPagadosxElCliente, setAnticiposPagadosxElCliente] = useState()
  const [ValorTotalFacturadoSinIVA, setValorTotalFacturadoSinIVA] = useState()
  const [RetegantiaPorcent, setRetegantiaPorcent] = useState()
  const [FacturasPagadsPorElCliente, setFacturasPagadsPorElCliente] = useState()
  const [AnticipoAmortizadoPorElCliente, setAnticipoAmortizadoPorElCliente] = useState()
  const [RetencionesYDescuentos, setRetencionesYDescuentos] = useState()
  const [Estadoo, setEstadoo] = useState('')
  const [datosMaestro, setDatosMaestro] = useState([])
  const [datosMaestroE, setDatosMaestroE] = useState([]);
  
  // Mostrar en pesos 
  const formatodivisa = new Intl.NumberFormat('es-CO',{
    style:'currency',
    currency:'COP'
})
  /* Funcion Registrar usuario
  const signup = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
    return
  }
  
  const login = (email,password) => {
    return signInWithEmailAndPassword(email,password)
  }

  //Cerrar sesion
  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, async user => {
      setUser(user)
    })
    return unsuscribe
  }, [])
  
*/

  // Crear datos Maestro
  const CrearDatos = async (Contratado) => {
    let Total_otrossi = Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))
    let Valor_Total_Contratado = Number(ValorContratoSinIVA) + Number(Total_otrossi)
    let Saldo_Anticipo_por_Amortizar = Number((AnticiposPagadosxElCliente) - (AnticipoAmortizadoPorElCliente))
    let Iva_Facturado = Number(0.19 * Number(ValorTotalFacturadoSinIVA))
    let Facturacion_Pendiente_Pago = Number(Number(ValorTotalFacturadoSinIVA) + Number(Iva_Facturado)) - Number((RetencionesYDescuentos)) - Number(FacturasPagadsPorElCliente) - Number((AnticiposPagadosxElCliente) - Number(Saldo_Anticipo_por_Amortizar) - Number(RetencionesYDescuentos))
    let Plazo_Contractual = moment(FechafC).diff(moment(FechaiC,),'days')
    let Plazo_Real = moment(FechafR).diff(moment(FechaiR,),'days')
    let relacion = Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100)
    if( relacion <= 0.99 * 100) {
      setEstadoo('En curso')
    }else {
      setEstadoo('Cerrado')
    }
    try {
      await addDoc(collection(db, 'MaestroHistoricO'), {
        Contratado:Contratado,
        Ejecutado:Ejecutado,
        Consecutivo:Number(Consecutivo),
        Oferta:Oferta,
        LineaNegocio:LineaNegocio,
        Seudonimo:Seudonimo,
        Nombre:Nombre,
        DescripcionBreve:DescripcionBreve,
        ClienteDirecto:ClienteDirecto,
        ContactoCliente:ContactoCliente,
        ClienteFinal:ClienteFinal,
        Director:Director,
        Coordinador:Coordinador,
        Contrato:Contrato,
        FechaInicioContractual:FechaiC,
        FechaFinalContractual:FechafC,
        PlazoContractual:Plazo_Contractual,
        FechaInicioReal:FechaiR,
        FechaFinalReal:FechafR,
        PlazoReal:Plazo_Real,
        ParticipacionOPTIMA:(Number(ParticipacionOPTIMA)),
        ValorContratoSinIVA:(Number(ValorContratoSinIVA)),
        IVA:(Number((0.19 * Number(ValorContratoSinIVA)))),
        OTROSSI1:Number(OTROSSI1),
        OTROSSI2:Number(OTROSSI2),
        OTROSSI3:Number(OTROSSI3),
        OTROSSI4:Number(OTROSSI4),
        OTROSSI5:Number(OTROSSI5),
        OTROSSI6:Number(OTROSSI6),
        OTROSSI7:Number(OTROSSI7),
        OTROSSI8:Number(OTROSSI8),
        OTROSSI9:Number(OTROSSI9),
        OTROSSI10:Number(OTROSSI10),
        OTROSSI11:Number(OTROSSI11),
        OTROSSI12:Number(OTROSSI12),
        TotalOtrossi:(Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))),
        ValorTotalContratado:(Valor_Total_Contratado),
        PCO:(Number(PCO)),
        Administracion:(Number(Administracion)),
        Imprevistos:(Number(Imprevistos)),
        UtilidadBruta:(Number(UtilidadBruta)),
        PorcentAnticipoContractural:(Number(PorcentAnticipoContractural)),
        AnticipoContractual:((Number(PorcentAnticipoContractural /100) * Number(ValorContratoSinIVA))),
        AnticiposPagadosxElCliente:(Number(AnticiposPagadosxElCliente)),
        ValorTotalFacturadoSinIVA:(Number(ValorTotalFacturadoSinIVA)),
        IVAFacturado:(Number(0.19 * Number(ValorTotalFacturadoSinIVA))),
        RetegantiaPorcent:Number(RetegantiaPorcent),
        ValorReteGantia:(Number((Number(RetegantiaPorcent/100) * Number(ValorTotalFacturadoSinIVA)))),
        ValorPendientePorFacturarSinIVA:(Number(Valor_Total_Contratado - ValorTotalFacturadoSinIVA)),
        FacturasPagadsPorElCliente:(Number(FacturasPagadsPorElCliente)),
        AnticipoAmortizadoPorElCliente:(Number(AnticipoAmortizadoPorElCliente)),
        SaldoAnticipoPorAmortizar:(Number(Saldo_Anticipo_por_Amortizar)),
        RetencionesYDescuentos:(Number(RetencionesYDescuentos)),
        FacturacionPendientedePago:(Facturacion_Pendiente_Pago),
        AnticiposPendientesDePago:(Number((Number(PorcentAnticipoContractural/100) * Number(ValorContratoSinIVA)) - Number(AnticiposPagadosxElCliente))),
        RelacionFacturadoContratado:Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100),
        Estado:Estadoo
        /*
        Contratado:Contratado,
      Ejecutado:Ejecutado,
      Consecutivo:Number(Consecutivo),
      Oferta:Oferta,
      LineaNegocio:LineaNegocio,
      Seudonimo:Seudonimo,
      Nombre:Nombre,
      DescripcionBreve:DescripcionBreve,
      ClienteDirecto:ClienteDirecto,
      ContactoCliente:ContactoCliente,
      ClienteFinal:ClienteFinal,
      Director:Director,
      Coordinador:Coordinador,
      Contrato:Contrato,
      FechaInicioContractual:FechaiC,
      FechaFinalContractual:FechafC,
      FechaInicioReal:FechaiR,
      FechaFinalReal:FechafR,
      ParticipacionOPTIMA:(Number(ParticipacionOPTIMA)),
      ValorContratoSinIVA:(Number(ValorContratoSinIVA)),
      IVA:(Number((0.19 * Number(ValorContratoSinIVA)))),
      OTROSSI1:Number(OTROSSI1),
      OTROSSI2:Number(OTROSSI2),
      OTROSSI3:Number(OTROSSI3),
      OTROSSI4:Number(OTROSSI4),
      OTROSSI5:(Number(OTROSSI5)),
      OTROSSI6:(Number(OTROSSI6)),
      OTROSSI7:(Number(OTROSSI7)),
      OTROSSI8:(Number(OTROSSI8)),
      OTROSSI9:(Number(OTROSSI9)),
      OTROSSI10:(Number(OTROSSI10)),
      OTROSSI11:(Number(OTROSSI11)),
      OTROSSI12:(Number(OTROSSI12)),
      TotalOtrossi:(Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))),
      ValorTotalContratado:(Valor_Total_Contratado),
      PCO:(Number(PCO)),
      Administracion:(Number(Administracion)),
      Imprevistos:(Number(Imprevistos)),
      UtilidadBruta:(Number(UtilidadBruta)),
      PorcentAnticipoContractural:(Number(PorcentAnticipoContractural)),
      AnticipoContractual:((Number(PorcentAnticipoContractural /100) * Number(ValorContratoSinIVA))),
      AnticiposPagadosxElCliente:(Number(AnticiposPagadosxElCliente)),
      ValorTotalFacturadoSinIVA:(Number(ValorTotalFacturadoSinIVA)),
      IVAFacturado:(Number(0.19 * Number(ValorTotalFacturadoSinIVA))),
      RetegantiaPorcent:Number(RetegantiaPorcent),
      ValorReteGantia: (Number((Number(RetegantiaPorcent/100) * Number(ValorTotalFacturadoSinIVA)))),
      ValorPendientePorFacturarSinIVA:(Number(Valor_Total_Contratado - ValorTotalFacturadoSinIVA)),
      FacturasPagadsPorElCliente:(Number(FacturasPagadsPorElCliente)),
      AnticipoAmortizadoPorElCliente:(Number(AnticipoAmortizadoPorElCliente)),
      SaldoAnticipoPorAmortizar:(Number(Saldo_Anticipo_por_Amortizar)),
      RetencionesYDescuentos:(Number(RetencionesYDescuentos)),
      FacturacionPendientedePago:(Facturacion_Pendiente_Pago),
      AnticiposPendientesDePago:(Number((Number(PorcentAnticipoContractural/100) * Number(ValorContratoSinIVA)) - Number(AnticiposPagadosxElCliente))),
      RelacionFacturadoContratado:(Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100))
       */
      })
      alert('registro Exitoso')
    } catch (err) {
      console.log(err)
    }
    
  }
  const CrearDatosE = async (Contratado) => {
    let Total_otrossi = Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))
    let Valor_Total_Contratado = Number(ValorContratoSinIVA) + Number(Total_otrossi)
    let Saldo_Anticipo_por_Amortizar = Number((AnticiposPagadosxElCliente) - (AnticipoAmortizadoPorElCliente))
    let Facturacion_Pendiente_Pago = Number(Number(ValorTotalFacturadoSinIVA) + Number(ImpuestosE/100)) - Number((RetencionesYDescuentos)) - Number(FacturasPagadsPorElCliente) - Number((AnticiposPagadosxElCliente) - Number(Saldo_Anticipo_por_Amortizar) - Number(RetencionesYDescuentos))
    let Plazo_Contractual = moment(FechafC).diff(moment(FechaiC,),'days')
    let Plazo_Real = moment(FechafR).diff(moment(FechaiR,),'days')
    let relacion = Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100)
    if( relacion <= 0.99 * 100) {
      setEstadoo('En curso')
    }else {
      setEstadoo('Cerrado')
    }
    try {
      await addDoc(collection(db, 'MaestroHistoricOE'), {
        Contratado:Contratado,
        Ejecutado:Ejecutado,
        Consecutivo:Number(Consecutivo),
        Oferta:Oferta,
        LineaNegocio:LineaNegocio,
        Seudonimo:Seudonimo,
        Nombre:Nombre,
        DescripcionBreve:DescripcionBreve,
        ClienteDirecto:ClienteDirecto,
        ContactoCliente:ContactoCliente,
        ClienteFinal:ClienteFinal,
        Director:Director,
        Coordinador:Coordinador,
        Contrato:Contrato,
        FechaInicioContractual:FechaiC,
        FechaFinalContractual:FechafC,
        PlazoContractual:Plazo_Contractual,
        FechaInicioReal:FechaiR,
        FechaFinalReal:FechafR,
        PlazoReal:Plazo_Real,
        ParticipacionOPTIMA:(Number(ParticipacionOPTIMA)),
        ValorContratoSinIVA:(Number(ValorContratoSinIVA)),
        IVA:(Number(((ImpuestosE/100) * Number(ValorContratoSinIVA)))),
        OTROSSI1:Number(OTROSSI1),
        OTROSSI2:Number(OTROSSI2),
        OTROSSI3:Number(OTROSSI3),
        OTROSSI4:Number(OTROSSI4),
        OTROSSI5:Number(OTROSSI5),
        OTROSSI6:Number(OTROSSI6),
        OTROSSI7:Number(OTROSSI7),
        OTROSSI8:Number(OTROSSI8),
        OTROSSI9:Number(OTROSSI9),
        OTROSSI10:Number(OTROSSI10),
        OTROSSI11:Number(OTROSSI11),
        OTROSSI12:Number(OTROSSI12),
        TotalOtrossi:(Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))),
        ValorTotalContratado:(Valor_Total_Contratado),
        PCO:(Number(PCO)),
        Administracion:(Number(Administracion)),
        Imprevistos:(Number(Imprevistos)),
        UtilidadBruta:(Number(UtilidadBruta)),
        PorcentAnticipoContractural:(Number(PorcentAnticipoContractural)),
        AnticipoContractual:((Number(PorcentAnticipoContractural /100) * Number(ValorContratoSinIVA))),
        AnticiposPagadosxElCliente:(Number(AnticiposPagadosxElCliente)),
        ValorTotalFacturadoSinIVA:(Number(ValorTotalFacturadoSinIVA)),
        IVAFacturado:(Number(ImpuestosE/100) * Number(ValorTotalFacturadoSinIVA)),
        RetegantiaPorcent:Number(RetegantiaPorcent),
        ValorReteGantia:(Number((Number(RetegantiaPorcent/100) * Number(ValorTotalFacturadoSinIVA)))),
        ValorPendientePorFacturarSinIVA:(Number(Valor_Total_Contratado - ValorTotalFacturadoSinIVA)),
        FacturasPagadsPorElCliente:(Number(FacturasPagadsPorElCliente)),
        AnticipoAmortizadoPorElCliente:(Number(AnticipoAmortizadoPorElCliente)),
        SaldoAnticipoPorAmortizar:(Number(Saldo_Anticipo_por_Amortizar)),
        RetencionesYDescuentos:(Number(RetencionesYDescuentos)),
        FacturacionPendientedePago:(Facturacion_Pendiente_Pago),
        AnticiposPendientesDePago:(Number((Number(PorcentAnticipoContractural/100) * Number(ValorContratoSinIVA)) - Number(AnticiposPagadosxElCliente))),
        RelacionFacturadoContratado:Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100),
        Estado:Estadoo
        /*
        Contratado:Contratado,
      Ejecutado:Ejecutado,
      Consecutivo:Number(Consecutivo),
      Oferta:Oferta,
      LineaNegocio:LineaNegocio,
      Seudonimo:Seudonimo,
      Nombre:Nombre,
      DescripcionBreve:DescripcionBreve,
      ClienteDirecto:ClienteDirecto,
      ContactoCliente:ContactoCliente,
      ClienteFinal:ClienteFinal,
      Director:Director,
      Coordinador:Coordinador,
      Contrato:Contrato,
      FechaInicioContractual:FechaiC,
      FechaFinalContractual:FechafC,
      FechaInicioReal:FechaiR,
      FechaFinalReal:FechafR,
      ParticipacionOPTIMA:(Number(ParticipacionOPTIMA)),
      ValorContratoSinIVA:(Number(ValorContratoSinIVA)),
      IVA:(Number((0.19 * Number(ValorContratoSinIVA)))),
      OTROSSI1:Number(OTROSSI1),
      OTROSSI2:Number(OTROSSI2),
      OTROSSI3:Number(OTROSSI3),
      OTROSSI4:Number(OTROSSI4),
      OTROSSI5:(Number(OTROSSI5)),
      OTROSSI6:(Number(OTROSSI6)),
      OTROSSI7:(Number(OTROSSI7)),
      OTROSSI8:(Number(OTROSSI8)),
      OTROSSI9:(Number(OTROSSI9)),
      OTROSSI10:(Number(OTROSSI10)),
      OTROSSI11:(Number(OTROSSI11)),
      OTROSSI12:(Number(OTROSSI12)),
      TotalOtrossi:(Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))),
      ValorTotalContratado:(Valor_Total_Contratado),
      PCO:(Number(PCO)),
      Administracion:(Number(Administracion)),
      Imprevistos:(Number(Imprevistos)),
      UtilidadBruta:(Number(UtilidadBruta)),
      PorcentAnticipoContractural:(Number(PorcentAnticipoContractural)),
      AnticipoContractual:((Number(PorcentAnticipoContractural /100) * Number(ValorContratoSinIVA))),
      AnticiposPagadosxElCliente:(Number(AnticiposPagadosxElCliente)),
      ValorTotalFacturadoSinIVA:(Number(ValorTotalFacturadoSinIVA)),
      IVAFacturado:(Number(0.19 * Number(ValorTotalFacturadoSinIVA))),
      RetegantiaPorcent:Number(RetegantiaPorcent),
      ValorReteGantia: (Number((Number(RetegantiaPorcent/100) * Number(ValorTotalFacturadoSinIVA)))),
      ValorPendientePorFacturarSinIVA:(Number(Valor_Total_Contratado - ValorTotalFacturadoSinIVA)),
      FacturasPagadsPorElCliente:(Number(FacturasPagadsPorElCliente)),
      AnticipoAmortizadoPorElCliente:(Number(AnticipoAmortizadoPorElCliente)),
      SaldoAnticipoPorAmortizar:(Number(Saldo_Anticipo_por_Amortizar)),
      RetencionesYDescuentos:(Number(RetencionesYDescuentos)),
      FacturacionPendientedePago:(Facturacion_Pendiente_Pago),
      AnticiposPendientesDePago:(Number((Number(PorcentAnticipoContractural/100) * Number(ValorContratoSinIVA)) - Number(AnticiposPagadosxElCliente))),
      RelacionFacturadoContratado:(Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100))
       */
      })
      alert('registro Exitoso')
    } catch (err) {
      console.log(err)
    }
    
  }
  
  // Editar
  const Actualizar = async (id) => {
    let Total_otrossi = Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))
    let Valor_Total_Contratado = Number(ValorContratoSinIVA) + Number(Total_otrossi)
    let Saldo_Anticipo_por_Amortizar = Number((AnticiposPagadosxElCliente) - (AnticipoAmortizadoPorElCliente))
    let Iva_Facturado = Number(0.19 * Number(ValorTotalFacturadoSinIVA))
    let Facturacion_Pendiente_Pago = Number(Number(ValorTotalFacturadoSinIVA) + Number(Iva_Facturado)) - Number((RetencionesYDescuentos)) - Number(FacturasPagadsPorElCliente) - Number((AnticiposPagadosxElCliente) - Number(Saldo_Anticipo_por_Amortizar) - Number(RetencionesYDescuentos))
    let Plazo_Contractual = moment(FechafC).diff(moment(FechaiC,),'days')
    let Plazo_Real = moment(FechafR).diff(moment(FechaiR,),'days')
    let relacion = Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100)
    if( relacion <= 0.99 * 100) {
      setEstadoo('En curso')
    }else {
      setEstadoo('Cerrado')
    }
    const taskDocRef = doc(db, 'MaestroHistoricO', id)
    try{
      await updateDoc(taskDocRef, {
        Contratado:Contratado,
        Ejecutado:Ejecutado,
        Consecutivo:Number(Consecutivo),
        Oferta:Oferta,
        LineaNegocio:LineaNegocio,
        Seudonimo:Seudonimo,
        Nombre:Nombre,
        DescripcionBreve:DescripcionBreve,
        ClienteDirecto:ClienteDirecto,
        ContactoCliente:ContactoCliente,
        ClienteFinal:ClienteFinal,
        Director:Director,
        Coordinador:Coordinador,
        Contrato:Contrato,
        FechaInicioContractual:FechaiC,
        FechaFinalContractual:FechafC,
        PlazoContractual:Plazo_Contractual,
        FechaInicioReal:FechaiR,
        FechaFinalReal:FechafR,
        PlazoReal:Plazo_Real,
        ParticipacionOPTIMA:(Number(ParticipacionOPTIMA)),
        ValorContratoSinIVA:(Number(ValorContratoSinIVA)),
        IVA:(Number((0.19 * Number(ValorContratoSinIVA)))),
        OTROSSI1:Number(OTROSSI1),
        OTROSSI2:Number(OTROSSI2),
        OTROSSI3:Number(OTROSSI3),
        OTROSSI4:Number(OTROSSI4),
        OTROSSI5:Number(OTROSSI5),
        OTROSSI6:Number(OTROSSI6),
        OTROSSI7:Number(OTROSSI7),
        OTROSSI8:Number(OTROSSI8),
        OTROSSI9:Number(OTROSSI9),
        OTROSSI10:Number(OTROSSI10),
        OTROSSI11:Number(OTROSSI11),
        OTROSSI12:Number(OTROSSI12),
        TotalOtrossi:(Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))),
        ValorTotalContratado:(Valor_Total_Contratado),
        PCO:(Number(PCO)),
        Administracion:(Number(Administracion)),
        Imprevistos:(Number(Imprevistos)),
        UtilidadBruta:(Number(UtilidadBruta)),
        PorcentAnticipoContractural:(Number(PorcentAnticipoContractural)),
        AnticipoContractual:((Number(PorcentAnticipoContractural /100) * Number(ValorContratoSinIVA))),
        AnticiposPagadosxElCliente:(Number(AnticiposPagadosxElCliente)),
        ValorTotalFacturadoSinIVA:(Number(ValorTotalFacturadoSinIVA)),
        IVAFacturado:(Number(0.19 * Number(ValorTotalFacturadoSinIVA))),
        RetegantiaPorcent:Number(RetegantiaPorcent),
        ValorReteGantia:(Number((Number(RetegantiaPorcent/100) * Number(ValorTotalFacturadoSinIVA)))),
        ValorPendientePorFacturarSinIVA:(Number(Valor_Total_Contratado - ValorTotalFacturadoSinIVA)),
        FacturasPagadsPorElCliente:(Number(FacturasPagadsPorElCliente)),
        AnticipoAmortizadoPorElCliente:(Number(AnticipoAmortizadoPorElCliente)),
        SaldoAnticipoPorAmortizar:(Number(Saldo_Anticipo_por_Amortizar)),
        RetencionesYDescuentos:(Number(RetencionesYDescuentos)),
        FacturacionPendientedePago:(Facturacion_Pendiente_Pago),
        AnticiposPendientesDePago:(Number((Number(PorcentAnticipoContractural/100) * Number(ValorContratoSinIVA)) - Number(AnticiposPagadosxElCliente))),
        RelacionFacturadoContratado:Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100),
        Estado:Estadoo
      })
    } catch (err) {
      alert(err)
    }    
  }
  const ActualizarE = async (id) => {
    let Total_otrossi = Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))
    let Valor_Total_Contratado = Number(ValorContratoSinIVA) + Number(Total_otrossi)
    let Saldo_Anticipo_por_Amortizar = Number((AnticiposPagadosxElCliente) - (AnticipoAmortizadoPorElCliente))
    let Facturacion_Pendiente_Pago = Number(Number(ValorTotalFacturadoSinIVA) + Number(ImpuestosE/100)) - Number((RetencionesYDescuentos)) - Number(FacturasPagadsPorElCliente) - Number((AnticiposPagadosxElCliente) - Number(Saldo_Anticipo_por_Amortizar) - Number(RetencionesYDescuentos))
    let Plazo_Contractual = moment(FechafC).diff(moment(FechaiC,),'days')
    let Plazo_Real = moment(FechafR).diff(moment(FechaiR,),'days')
    let relacion = Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100)
    if( relacion <= 0.99 * 100) {
      setEstadoo('En curso')
    }else {
      setEstadoo('Cerrado')
    }
    const taskDocRef = doc(db, 'MaestroHistoricOE', id)
    try{
      await updateDoc(taskDocRef, {
        Contratado:Contratado,
        Ejecutado:Ejecutado,
        Consecutivo:Number(Consecutivo),
        Oferta:Oferta,
        LineaNegocio:LineaNegocio,
        Seudonimo:Seudonimo,
        Nombre:Nombre,
        DescripcionBreve:DescripcionBreve,
        ClienteDirecto:ClienteDirecto,
        ContactoCliente:ContactoCliente,
        ClienteFinal:ClienteFinal,
        Director:Director,
        Coordinador:Coordinador,
        Contrato:Contrato,
        FechaInicioContractual:FechaiC,
        FechaFinalContractual:FechafC,
        PlazoContractual:Plazo_Contractual,
        FechaInicioReal:FechaiR,
        FechaFinalReal:FechafR,
        PlazoReal:Plazo_Real,
        ParticipacionOPTIMA:(Number(ParticipacionOPTIMA)),
        ValorContratoSinIVA:(Number(ValorContratoSinIVA)),
        IVA:(Number((ImpuestosE/100 * Number(ValorContratoSinIVA)))),
        OTROSSI1:Number(OTROSSI1),
        OTROSSI2:Number(OTROSSI2),
        OTROSSI3:Number(OTROSSI3),
        OTROSSI4:Number(OTROSSI4),
        OTROSSI5:Number(OTROSSI5),
        OTROSSI6:Number(OTROSSI6),
        OTROSSI7:Number(OTROSSI7),
        OTROSSI8:Number(OTROSSI8),
        OTROSSI9:Number(OTROSSI9),
        OTROSSI10:Number(OTROSSI10),
        OTROSSI11:Number(OTROSSI11),
        OTROSSI12:Number(OTROSSI12),
        TotalOtrossi:(Number((Number(OTROSSI1)+Number(OTROSSI2)+Number(OTROSSI3)+Number(OTROSSI4)+Number(OTROSSI5)+Number(OTROSSI6)+Number(OTROSSI7)+Number(OTROSSI8)+Number(OTROSSI9)+Number(OTROSSI10)+Number(OTROSSI11)+Number(OTROSSI12)))),
        ValorTotalContratado:(Valor_Total_Contratado),
        PCO:(Number(PCO)),
        Administracion:(Number(Administracion)),
        Imprevistos:(Number(Imprevistos)),
        UtilidadBruta:(Number(UtilidadBruta)),
        PorcentAnticipoContractural:(Number(PorcentAnticipoContractural)),
        AnticipoContractual:((Number(PorcentAnticipoContractural /100) * Number(ValorContratoSinIVA))),
        AnticiposPagadosxElCliente:(Number(AnticiposPagadosxElCliente)),
        ValorTotalFacturadoSinIVA:(Number(ValorTotalFacturadoSinIVA)),
        IVAFacturado:(Number(ImpuestosE/100 * Number(ValorTotalFacturadoSinIVA))),
        RetegantiaPorcent:Number(RetegantiaPorcent),
        ValorReteGantia:(Number((Number(RetegantiaPorcent/100) * Number(ValorTotalFacturadoSinIVA)))),
        ValorPendientePorFacturarSinIVA:(Number(Valor_Total_Contratado - ValorTotalFacturadoSinIVA)),
        FacturasPagadsPorElCliente:(Number(FacturasPagadsPorElCliente)),
        AnticipoAmortizadoPorElCliente:(Number(AnticipoAmortizadoPorElCliente)),
        SaldoAnticipoPorAmortizar:(Number(Saldo_Anticipo_por_Amortizar)),
        RetencionesYDescuentos:(Number(RetencionesYDescuentos)),
        FacturacionPendientedePago:(Facturacion_Pendiente_Pago),
        AnticiposPendientesDePago:(Number((Number(PorcentAnticipoContractural/100) * Number(ValorContratoSinIVA)) - Number(AnticiposPagadosxElCliente))),
        RelacionFacturadoContratado:Number((Number(ValorTotalFacturadoSinIVA) / Number(Valor_Total_Contratado) )*100),
        Estado:Estadoo
      })
    } catch (err) {
      alert(err)
    }    
  }
  // Borrar
  const Eliminar = async (id) => {
    const taskDocRef = doc(db, 'MaestroHistoricO', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }
  const EliminarE = async (id) => {
    const taskDocRef = doc(db, 'MaestroHistoricOE', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }
  
  const ImportarDatosM = async (first) => {
    first.forEach((obj) => {
      try {
      addDoc(collection(db, 'MaestroHistoricO'), {
        Contratado:obj.CONTRATADO === undefined ? obj.CONTRATADO = '' :obj.CONTRATADO,
        Ejecutado:obj["EJECUTADO EN"] === undefined ? obj["EJECUTADO EN"] = '' : obj["EJECUTADO EN"],
        Consecutivo:obj["CONSECUTIVO (PY)"]=== undefined ? obj["CONSECUTIVO (PY)"]= "":obj["CONSECUTIVO (PY)"],
        Oferta:obj.OFERTA===undefined ? obj.OFERTA = "": obj.OFERTA,
        LineaNegocio:obj["LINEA DE NEGOCIO"]===undefined ? obj["LINEA DE NEGOCIO"] = "":obj["LINEA DE NEGOCIO"],
        Seudonimo:obj["SEUDONIMO "] ===undefined ?obj["SEUDONIMO "] = "":obj["SEUDONIMO "],
        Nombre:obj["NOMBRE DEL PROYECTO"]===undefined ? obj["NOMBRE DEL PROYECTO"] = "":obj["NOMBRE DEL PROYECTO"],
        DescripcionBreve:obj["DESCRIPCION BREVE"] ===undefined ?obj["DESCRIPCION BREVE"] = "":obj["DESCRIPCION BREVE"],
        ClienteDirecto:obj["CLIENTE DIRECTO"] ===undefined ? obj["CLIENTE DIRECTO"]= "":obj["CLIENTE DIRECTO"],
        ContactoCliente:obj["CONTACTO CLIENTE"] ===undefined ?obj["CONTACTO CLIENTE"] = "": obj["CONTACTO CLIENTE"],
        ClienteFinal:obj["CLIENTE FINAL"] ===undefined ? obj["CLIENTE FINAL"] = "":obj["CLIENTE FINAL"],
        Director:obj.DIRECTOR ===undefined ?obj.DIRECTOR = "":obj.DIRECTOR,
        Coordinador:obj.COORDINADOR===undefined ?obj.COORDINADOR = "":obj.COORDINADOR,
        Contrato:obj.CONTRATO===undefined ?obj.CONTRATO = "":obj.CONTRATO,
        FechaInicioContractual:obj["FECHA INICIO CONTRACTUAL"],
        FechaFinalContractual:obj["FECHA TERMINACION CONTRACTUAL"],
        PlazoContractual:obj["PLAZO CONTRACTUAL"] === undefined ? obj["PLAZO CONTRACTUAL"] = 0: obj["PLAZO CONTRACTUAL"] ,
        FechaInicioReal:obj["FECHA INICIO REAL"],
        FechaFinalReal:obj["FECHA TERMINACIÓN REAL"],
        PlazoReal:obj["DURACIÓN REAL (DIAS)"],
        ParticipacionOPTIMA:obj["PARTICIPACIÓN OPTIMA "] === undefined || 1 ? obj["PARTICIPACIÓN OPTIMA "] = 100 : obj["PARTICIPACIÓN OPTIMA "],
        ValorContratoSinIVA:obj["VALOR CONTRATO SIN IVA"] === undefined ? obj["VALOR CONTRATO SIN IVA"] = 0 : obj["VALOR CONTRATO SIN IVA"],
        IVA:obj["IVA "] === undefined ? obj["IVA "] = 0 : obj["IVA "],
        OTROSSI1:obj["OTROSÍ 1"]=== undefined?obj["OTROSÍ 1"]=0:obj["OTROSÍ 1"],
        OTROSSI2:obj["OTROSÍ 2"]=== undefined?obj["OTROSÍ 2"]=0:obj["OTROSÍ 2"],
        OTROSSI3:obj["OTROSÍ 3"]=== undefined?obj["OTROSÍ 3"]=0:obj["OTROSÍ 3"],
        OTROSSI4:obj["OTROSÍ 4"]=== undefined?obj["OTROSÍ 4"]=0:obj["OTROSÍ 4"],
        OTROSSI5:obj["OTROSÍ 5"]=== undefined?obj["OTROSÍ 5"]=0:obj["OTROSÍ 5"],
        OTROSSI6:obj["OTROSÍ 6"]=== undefined?obj["OTROSÍ 6"]=0:obj["OTROSÍ 6"],
        OTROSSI7:obj["OTROSÍ 7"]=== undefined?obj["OTROSÍ 7"]=0:obj["OTROSÍ 7"],
        OTROSSI8:obj["OTROSÍ 8"]=== undefined?obj["OTROSÍ 8"]=0:obj["OTROSÍ 8"],
        OTROSSI9:obj["OTROSÍ 9"]=== undefined?obj["OTROSÍ 9"]=0:obj["OTROSÍ 9"],
        OTROSSI10:obj["OTROSÍ 10"]=== undefined?obj["OTROSÍ 10"]=0:obj["OTROSÍ 10"],
        OTROSSI11:obj["OTROSÍ 11"]=== undefined?obj["OTROSÍ 11"]=0:obj["OTROSÍ 11"],
        OTROSSI12:obj["OTROSÍ 12"]=== undefined?obj["OTROSÍ 12"]=0:obj["OTROSÍ 12"],
        TotalOtrossi:obj["TOTAL OTROSÍES"]=== undefined ?obj["TOTAL OTROSÍES"] = 0 :obj["TOTAL OTROSÍES"],
        ValorTotalContratado:obj["VALOR TOTAL CONTRATADO (SIN IVA)"] === undefined ? obj["VALOR TOTAL CONTRATADO (SIN IVA)"] = (ValorContratoSinIVA + TotalOtrossi ): obj["VALOR TOTAL CONTRATADO (SIN IVA)"],
        PCO:obj.PCO === undefined?obj.PCO = 0 :obj.PCO,
        Administracion:obj.ADMINISTRACIÓN === undefined?obj.ADMINISTRACIÓN = 0 :obj.ADMINISTRACIÓN,
        Imprevistos:obj.IMPREVISTOS === undefined?obj.IMPREVISTOS = 0 :obj.IMPREVISTOS,
        UtilidadBruta:obj["UTILIDAD BRUTA"]=== undefined? obj["UTILIDAD BRUTA"] = 0:obj["UTILIDAD BRUTA"],
        PorcentAnticipoContractural:obj["% ANTICIPO CONTRACTUAL"] === undefined ? obj["% ANTICIPO CONTRACTUAL"] =0 : obj["% ANTICIPO CONTRACTUAL"],
        AnticipoContractual:obj["VALOR ANTICIPO CONTRACTUAL"] === undefined ? obj["VALOR ANTICIPO CONTRACTUAL"] = 0 : obj["VALOR ANTICIPO CONTRACTUAL"],
        AnticiposPagadosxElCliente:obj["VALOR ANTICIPOS PAGADOS POR EL CLIENTE"] === undefined ? obj["VALOR ANTICIPOS PAGADOS POR EL CLIENTE"] = 0: obj["VALOR ANTICIPOS PAGADOS POR EL CLIENTE"],
        ValorTotalFacturadoSinIVA:obj["VALOR TOTAL FACTURADO SIN IVA"] === undefined ? obj["VALOR TOTAL FACTURADO SIN IVA"] = 0 : obj["VALOR TOTAL FACTURADO SIN IVA"],
        IVAFacturado:obj["IVA / IMPUESTOS FACTURACION"] === undefined ? obj["IVA / IMPUESTOS FACTURACION"] = 0 : obj["IVA / IMPUESTOS FACTURACION"] ,
        RetegantiaPorcent:obj["% RETEGANTIA"] === undefined ? obj["% RETEGANTIA"] = 0 : obj["% RETEGANTIA"],
        ValorReteGantia:obj["VALOR RETENCIÓN DE GARANTÍA"] === undefined ? obj["VALOR RETENCIÓN DE GARANTÍA"] = 0 :obj["VALOR RETENCIÓN DE GARANTÍA"],
        ValorPendientePorFacturarSinIVA:obj["VALOR PENDIENTE POR EJECUTAR FACTURAR SIN IVA"]=== undefined ? obj["VALOR PENDIENTE POR EJECUTAR FACTURAR SIN IVA"] = 0 : obj["VALOR PENDIENTE POR EJECUTAR FACTURAR SIN IVA"] ,
        FacturasPagadsPorElCliente:obj["NETO FACTURAS PAGADAS POR EL CLIENTE"]=== undefined ? obj["NETO FACTURAS PAGADAS POR EL CLIENTE"] = 0 : obj["NETO FACTURAS PAGADAS POR EL CLIENTE"],
        AnticipoAmortizadoPorElCliente:obj["VALOR ANTICIPO AMORTIZADO POR EL CLIENTE"]=== undefined ? obj["VALOR ANTICIPO AMORTIZADO POR EL CLIENTE"] = 0 : obj["VALOR ANTICIPO AMORTIZADO POR EL CLIENTE"] ,
        SaldoAnticipoPorAmortizar:obj["SALDO ANTICIPO POR AMORTIZAR"]=== undefined ? obj["SALDO ANTICIPO POR AMORTIZAR"] = 0 : obj["SALDO ANTICIPO POR AMORTIZAR"] ,
        RetencionesYDescuentos:obj["VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)"]=== undefined ? obj["VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)"] = 0 : obj["VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)"],
        FacturacionPendientedePago:obj["NETO FACTURACIÓN PENDIENTE DE PAGO"]=== undefined ? obj["NETO FACTURACIÓN PENDIENTE DE PAGO"] = 0 : obj["NETO FACTURACIÓN PENDIENTE DE PAGO"] ,
        AnticiposPendientesDePago:obj["VALOR ANTICIPOS PENDIENTES DE PAGO"] === undefined?obj["VALOR ANTICIPOS PENDIENTES DE PAGO"] = 0 : obj["VALOR ANTICIPOS PENDIENTES DE PAGO"],
        RelacionFacturadoContratado:obj["RELACIÓN FACTURADO / CONTRATADO"] === undefined ?obj["RELACIÓN FACTURADO / CONTRATADO"]='':obj["RELACIÓN FACTURADO / CONTRATADO"] *100,
        Estado:obj["ESTADO CONTRATO"]=== undefined ? obj["ESTADO CONTRATO"] = "" : obj["ESTADO CONTRATO"]
      })
    }catch (err) {
      console.log(err)
    }
  })
  }
  const ImportarDatosME = async (first) => {
    first.forEach((obj) => {
      try {
      addDoc(collection(db, 'MaestroHistoricOE'), {
        Contratado:obj.CONTRATADO === undefined ? obj.CONTRATADO = '' :obj.CONTRATADO,
        Ejecutado:obj["EJECUTADO EN"] === undefined ? obj["EJECUTADO EN"] = '' : obj["EJECUTADO EN"],
        Consecutivo:obj["CONSECUTIVO (PY)"]=== undefined ? obj["CONSECUTIVO (PY)"]= "":obj["CONSECUTIVO (PY)"],
        Oferta:obj.OFERTA===undefined ? obj.OFERTA = "": obj.OFERTA,
        LineaNegocio:obj["LINEA DE NEGOCIO"]===undefined ? obj["LINEA DE NEGOCIO"] = "":obj["LINEA DE NEGOCIO"],
        Seudonimo:obj["SEUDONIMO "] ===undefined ?obj["SEUDONIMO "] = "":obj["SEUDONIMO "],
        Nombre:obj["NOMBRE DEL PROYECTO"]===undefined ? obj["NOMBRE DEL PROYECTO"] = "":obj["NOMBRE DEL PROYECTO"],
        DescripcionBreve:obj["DESCRIPCION BREVE"] ===undefined ?obj["DESCRIPCION BREVE"] = "":obj["DESCRIPCION BREVE"],
        ClienteDirecto:obj["CLIENTE DIRECTO"] ===undefined ? obj["CLIENTE DIRECTO"]= "":obj["CLIENTE DIRECTO"],
        ContactoCliente:obj["CONTACTO CLIENTE"] ===undefined ?obj["CONTACTO CLIENTE"] = "": obj["CONTACTO CLIENTE"],
        ClienteFinal:obj["CLIENTE FINAL"] ===undefined ? obj["CLIENTE FINAL"] = "":obj["CLIENTE FINAL"],
        Director:obj.DIRECTOR ===undefined ?obj.DIRECTOR = "":obj.DIRECTOR,
        Coordinador:obj.COORDINADOR===undefined ?obj.COORDINADOR = "":obj.COORDINADOR,
        Contrato:obj.CONTRATO===undefined ?obj.CONTRATO = "":obj.CONTRATO,
        FechaInicioContractual:obj["FECHA INICIO CONTRACTUAL"],
        FechaFinalContractual:obj["FECHA TERMINACION CONTRACTUAL"],
        PlazoContractual:obj["PLAZO CONTRACTUAL"] === undefined ? obj["PLAZO CONTRACTUAL"] = 0: obj["PLAZO CONTRACTUAL"] ,
        FechaInicioReal:obj["FECHA INICIO REAL"],
        FechaFinalReal:obj["FECHA TERMINACIÓN REAL"],
        PlazoReal:obj["DURACIÓN REAL (DIAS)"],
        ParticipacionOPTIMA:obj["PARTICIPACIÓN OPTIMA "] === undefined || 1 ? obj["PARTICIPACIÓN OPTIMA "] = 100 : obj["PARTICIPACIÓN OPTIMA "],
        ValorContratoSinIVA:obj["VALOR CONTRATO SIN IVA"] === undefined ? obj["VALOR CONTRATO SIN IVA"] = 0 : obj["VALOR CONTRATO SIN IVA"],
        IVA:obj["IVA "] === undefined ? obj["IVA "] = 0 : obj["IVA "],
        OTROSSI1:obj["OTROSÍ 1"]=== undefined?obj["OTROSÍ 1"]=0:obj["OTROSÍ 1"],
        OTROSSI2:obj["OTROSÍ 2"]=== undefined?obj["OTROSÍ 2"]=0:obj["OTROSÍ 2"],
        OTROSSI3:obj["OTROSÍ 3"]=== undefined?obj["OTROSÍ 3"]=0:obj["OTROSÍ 3"],
        OTROSSI4:obj["OTROSÍ 4"]=== undefined?obj["OTROSÍ 4"]=0:obj["OTROSÍ 4"],
        OTROSSI5:obj["OTROSÍ 5"]=== undefined?obj["OTROSÍ 5"]=0:obj["OTROSÍ 5"],
        OTROSSI6:obj["OTROSÍ 6"]=== undefined?obj["OTROSÍ 6"]=0:obj["OTROSÍ 6"],
        OTROSSI7:obj["OTROSÍ 7"]=== undefined?obj["OTROSÍ 7"]=0:obj["OTROSÍ 7"],
        OTROSSI8:obj["OTROSÍ 8"]=== undefined?obj["OTROSÍ 8"]=0:obj["OTROSÍ 8"],
        OTROSSI9:obj["OTROSÍ 9"]=== undefined?obj["OTROSÍ 9"]=0:obj["OTROSÍ 9"],
        OTROSSI10:obj["OTROSÍ 10"]=== undefined?obj["OTROSÍ 10"]=0:obj["OTROSÍ 10"],
        OTROSSI11:obj["OTROSÍ 11"]=== undefined?obj["OTROSÍ 11"]=0:obj["OTROSÍ 11"],
        OTROSSI12:obj["OTROSÍ 12"]=== undefined?obj["OTROSÍ 12"]=0:obj["OTROSÍ 12"],
        TotalOtrossi:obj["TOTAL OTROSÍES"]=== undefined ?obj["TOTAL OTROSÍES"] = 0 :obj["TOTAL OTROSÍES"],
        ValorTotalContratado:obj["VALOR TOTAL CONTRATADO (SIN IVA)"] === undefined ? obj["VALOR TOTAL CONTRATADO (SIN IVA)"] = (ValorContratoSinIVA + TotalOtrossi ): obj["VALOR TOTAL CONTRATADO (SIN IVA)"],
        PCO:obj.PCO === undefined?obj.PCO = 0 :obj.PCO,
        Administracion:obj.ADMINISTRACIÓN === undefined?obj.ADMINISTRACIÓN = 0 :obj.ADMINISTRACIÓN,
        Imprevistos:obj.IMPREVISTOS === undefined?obj.IMPREVISTOS = 0 :obj.IMPREVISTOS,
        UtilidadBruta:obj["UTILIDAD BRUTA"]=== undefined? obj["UTILIDAD BRUTA"] = 0:obj["UTILIDAD BRUTA"],
        PorcentAnticipoContractural:obj["% ANTICIPO CONTRACTUAL"] === undefined ? obj["% ANTICIPO CONTRACTUAL"] =0 : obj["% ANTICIPO CONTRACTUAL"],
        AnticipoContractual:obj["VALOR ANTICIPO CONTRACTUAL"] === undefined ? obj["VALOR ANTICIPO CONTRACTUAL"] = 0 : obj["VALOR ANTICIPO CONTRACTUAL"],
        AnticiposPagadosxElCliente:obj["VALOR ANTICIPOS PAGADOS POR EL CLIENTE"] === undefined ? obj["VALOR ANTICIPOS PAGADOS POR EL CLIENTE"] = 0: obj["VALOR ANTICIPOS PAGADOS POR EL CLIENTE"],
        ValorTotalFacturadoSinIVA:obj["VALOR TOTAL FACTURADO SIN IVA"] === undefined ? obj["VALOR TOTAL FACTURADO SIN IVA"] = 0 : obj["VALOR TOTAL FACTURADO SIN IVA"],
        IVAFacturado:obj["IVA / IMPUESTOS FACTURACION"] === undefined ? obj["IVA / IMPUESTOS FACTURACION"] = 0 : obj["IVA / IMPUESTOS FACTURACION"] ,
        RetegantiaPorcent:obj["% RETEGANTIA"] === undefined ? obj["% RETEGANTIA"] = 0 : obj["% RETEGANTIA"],
        ValorReteGantia:obj["VALOR RETENCIÓN DE GARANTÍA"] === undefined ? obj["VALOR RETENCIÓN DE GARANTÍA"] = 0 :obj["VALOR RETENCIÓN DE GARANTÍA"],
        ValorPendientePorFacturarSinIVA:obj["VALOR PENDIENTE POR EJECUTAR FACTURAR SIN IVA"]=== undefined ? obj["VALOR PENDIENTE POR EJECUTAR FACTURAR SIN IVA"] = 0 : obj["VALOR PENDIENTE POR EJECUTAR FACTURAR SIN IVA"] ,
        FacturasPagadsPorElCliente:obj["NETO FACTURAS PAGADAS POR EL CLIENTE"]=== undefined ? obj["NETO FACTURAS PAGADAS POR EL CLIENTE"] = 0 : obj["NETO FACTURAS PAGADAS POR EL CLIENTE"],
        AnticipoAmortizadoPorElCliente:obj["VALOR ANTICIPO AMORTIZADO POR EL CLIENTE"]=== undefined ? obj["VALOR ANTICIPO AMORTIZADO POR EL CLIENTE"] = 0 : obj["VALOR ANTICIPO AMORTIZADO POR EL CLIENTE"] ,
        SaldoAnticipoPorAmortizar:obj["SALDO ANTICIPO POR AMORTIZAR"]=== undefined ? obj["SALDO ANTICIPO POR AMORTIZAR"] = 0 : obj["SALDO ANTICIPO POR AMORTIZAR"] ,
        RetencionesYDescuentos:obj["VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)"]=== undefined ? obj["VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)"] = 0 : obj["VALOR RETENCIONES Y DESCUENTOS APLICADOS POR EL CLIENTE (SIN AMORTIZACIÓN DE ANTICIPO)"],
        FacturacionPendientedePago:obj["NETO FACTURACIÓN PENDIENTE DE PAGO"]=== undefined ? obj["NETO FACTURACIÓN PENDIENTE DE PAGO"] = 0 : obj["NETO FACTURACIÓN PENDIENTE DE PAGO"] ,
        AnticiposPendientesDePago:obj["VALOR ANTICIPOS PENDIENTES DE PAGO"] === undefined?obj["VALOR ANTICIPOS PENDIENTES DE PAGO"] = 0 : obj["VALOR ANTICIPOS PENDIENTES DE PAGO"],
        RelacionFacturadoContratado:obj["RELACIÓN FACTURADO / CONTRATADO"] === undefined ?obj["RELACIÓN FACTURADO / CONTRATADO"]='':obj["RELACIÓN FACTURADO / CONTRATADO"] *100,
        Estado:obj["ESTADO CONTRATO"]=== undefined ? obj["ESTADO CONTRATO"] = "" : obj["ESTADO CONTRATO"]
      })
    }catch (err) {
      console.log(err)
    }
  })
  }
  
  const Importarfactura = async (first) => {
    first.forEach((obj) => {
      try {
      addDoc(collection(db, 'FACTURACION'), {
        Num:obj["Num"] === undefined ? '' : obj["Num"],
        NumeroIdentificacion: obj["Número de identificación"] === undefined ? 0 : obj["Número de identificación"],
        TipoDocumento:obj["Tipo de Documento"]  === undefined ? '' :obj["Tipo de Documento"],
        Centrodecostos:obj["Centro de costos"] === undefined ?  0:obj["Centro de costos"],
        Fecha:obj.Fecha === undefined ? 0 :obj.Fecha,
        FechaVencimiento:obj["Fecha de Vencimiento"] === undefined ?  0:obj["Fecha de Vencimiento"],
        Concepto:obj.Concepto === undefined ? 0 :obj.Concepto,
        ValorAntesdeIVA:obj["Valor Antes de IVA"] === undefined ?  0:obj["Valor Antes de IVA"],
        IVA:obj[" IVA "] === undefined ? 0 :obj[" IVA "],
        TotalconIVA:obj["Total con IVA"] === undefined ? 0:obj["Total con IVA"],
        RetencionFuente:obj[" Retención en la fuente "] === undefined ? 0 :obj[" Retención en la fuente "],
        RetencionIVA:obj[" Retencion IVA "] === undefined ? 0 :obj[" Retencion IVA "],
        Amortizacion:obj.Amortizacion === undefined ? 0 :obj.Amortizacion,
        ProntoPago:obj["Pronto Pago"] === undefined ? 0 :obj["Pronto Pago"],
        RetencionxGarantia:obj["Retencion x Garantia"] === undefined ? 0 :obj["Retencion x Garantia"],
        RetincionICA:obj["Retincion ICA"] === undefined ? 0 : obj["Retincion ICA"],
        TotalaPagar:obj[" Total a Pagar "] === undefined ? 0 :obj[" Total a Pagar "],
        SaldoDespuesdePagooAbono:obj["Saldo Despues de Pago o Abono"] === undefined ?0 :obj["Saldo Despues de Pago o Abono"],
        Fechadepago:obj["Fecha de Pago"] === undefined ? 0 :obj["Fecha de Pago"],
        Estatus:obj.Estatus === undefined ? 0 :obj.Estatus,
  
      })
    }catch (err) {
      console.log(err)
    }
  })
  }

  // Mostrar Datos
  useEffect(() => {
    const E = query(collection(db, 'MaestroHistoricOE'),orderBy("Seudonimo", "asc" ) )
    const q = query(collection(db, 'MaestroHistoricO'),orderBy("Seudonimo", "asc" ))
    const Fa = query(collection(db, 'FACTURACION'),orderBy("Num", "asc" ))
    onSnapshot(E, (querySnapshot) => {
      setDatosMaestroE(querySnapshot.docs.map(doc => ({
        id: doc.id,
        Contratado:doc.data().Contratado,
        Ejecutado:doc.data().Ejecutado,
        Consecutivo:doc.data().Consecutivo,
        Oferta:doc.data().Oferta,
        LineaNegocio:doc.data().LineaNegocio,
        Seudonimo:doc.data().Seudonimo,
        Nombre:doc.data().Nombre,
        DescripcionBreve:doc.data().DescripcionBreve,
        ClienteDirecto:doc.data().ClienteDirecto,
        ContactoCliente:doc.data().ContactoCliente,
        ClienteFinal:doc.data().ClienteFinal,
        Director:doc.data().Director,
        Coordinador:doc.data().Coordinador,
        Contrato:doc.data().Contrato,
        FechaInicioContractual:doc.data().FechaInicioContractual,
        FechaFinalContractual:doc.data().FechaFinalContractual,
        PlazoContractual:doc.data().PlazoContractual,
        FechaInicioReal:doc.data().FechaInicioReal,
        FechaFinalReal:doc.data().FechaFinalReal,
        PlazoReal:doc.data().PlazoReal,
        ParticipacionOPTIMA:doc.data().ParticipacionOPTIMA,
        ValorContratoSinIVA:doc.data().ValorContratoSinIVA,
        IVA:doc.data().IVA,
        OTROSSI1:doc.data().OTROSSI1,
        OTROSSI2:doc.data().OTROSSI2,
        OTROSSI3:doc.data().OTROSSI3,
        OTROSSI4:doc.data().OTROSSI4,
        OTROSSI5:doc.data().OTROSSI5,
        OTROSSI6:doc.data().OTROSSI6,
        OTROSSI7:doc.data().OTROSSI7,
        OTROSSI8:doc.data().OTROSSI8,
        OTROSSI9:doc.data().OTROSSI9,
        OTROSSI10:doc.data().OTROSSI10,
        OTROSSI11:doc.data().OTROSSI11,
        OTROSSI12:doc.data().OTROSSI12,
        TotalOtrossi:doc.data().TotalOtrossi,
        ValorTotalContratado:doc.data().ValorTotalContratado,
        PCO:doc.data().PCO,
        Administracion:doc.data().Administracion,
        Imprevistos:doc.data().Imprevistos,
        UtilidadBruta:doc.data().UtilidadBruta,
        PorcentAnticipoContractural:doc.data().PorcentAnticipoContractural,
        AnticipoContractual:doc.data().AnticipoContractual,
        AnticiposPagadosxElCliente:doc.data().AnticiposPagadosxElCliente,
        ValorTotalFacturadoSinIVA:doc.data().ValorTotalFacturadoSinIVA,
        IVAFacturado:doc.data().IVAFacturado,
        RetegantiaPorcent:doc.data().RetegantiaPorcent,
        ValorReteGantia:doc.data().ValorReteGantia,
        ValorPendientePorFacturarSinIVA:doc.data().ValorPendientePorFacturarSinIVA,
        FacturasPagadsPorElCliente:doc.data().FacturasPagadsPorElCliente,
        AnticipoAmortizadoPorElCliente:doc.data().AnticipoAmortizadoPorElCliente,
        SaldoAnticipoPorAmortizar:doc.data().SaldoAnticipoPorAmortizar,
        RetencionesYDescuentos:doc.data().RetencionesYDescuentos,
        FacturacionPendientedePago:doc.data().FacturacionPendientedePago,
        AnticiposPendientesDePago:doc.data().AnticiposPendientesDePago,
        RelacionFacturadoContratado:doc.data().RelacionFacturadoContratado,
        Estado:doc.data().Estado
      })))
    })
    
    
    onSnapshot(q, (querySnapshot) => {
      setDatosMaestro(querySnapshot.docs.map(doc => ({
        id: doc.id,
        Contratado:doc.data().Contratado,
        Ejecutado:doc.data().Ejecutado,
        Consecutivo:doc.data().Consecutivo,
        Oferta:doc.data().Oferta,
        LineaNegocio:doc.data().LineaNegocio,
        Seudonimo:doc.data().Seudonimo,
        Nombre:doc.data().Nombre,
        DescripcionBreve:doc.data().DescripcionBreve,
        ClienteDirecto:doc.data().ClienteDirecto,
        ContactoCliente:doc.data().ContactoCliente,
        ClienteFinal:doc.data().ClienteFinal,
        Director:doc.data().Director,
        Coordinador:doc.data().Coordinador,
        Contrato:doc.data().Contrato,
        FechaInicioContractual:doc.data().FechaInicioContractual,
        FechaFinalContractual:doc.data().FechaFinalContractual,
        PlazoContractual:doc.data().PlazoContractual,
        FechaInicioReal:doc.data().FechaInicioReal,
        FechaFinalReal:doc.data().FechaFinalReal,
        PlazoReal:doc.data().PlazoReal,
        ParticipacionOPTIMA:doc.data().ParticipacionOPTIMA,
        ValorContratoSinIVA:doc.data().ValorContratoSinIVA,
        IVA:doc.data().IVA,
        OTROSSI1:doc.data().OTROSSI1,
        OTROSSI2:doc.data().OTROSSI2,
        OTROSSI3:doc.data().OTROSSI3,
        OTROSSI4:doc.data().OTROSSI4,
        OTROSSI5:doc.data().OTROSSI5,
        OTROSSI6:doc.data().OTROSSI6,
        OTROSSI7:doc.data().OTROSSI7,
        OTROSSI8:doc.data().OTROSSI8,
        OTROSSI9:doc.data().OTROSSI9,
        OTROSSI10:doc.data().OTROSSI10,
        OTROSSI11:doc.data().OTROSSI11,
        OTROSSI12:doc.data().OTROSSI12,
        TotalOtrossi:doc.data().TotalOtrossi,
        ValorTotalContratado:doc.data().ValorTotalContratado,
        PCO:doc.data().PCO,
        Administracion:doc.data().Administracion,
        Imprevistos:doc.data().Imprevistos,
        UtilidadBruta:doc.data().UtilidadBruta,
        PorcentAnticipoContractural:doc.data().PorcentAnticipoContractural,
        AnticipoContractual:doc.data().AnticipoContractual,
        AnticiposPagadosxElCliente:doc.data().AnticiposPagadosxElCliente,
        ValorTotalFacturadoSinIVA:doc.data().ValorTotalFacturadoSinIVA,
        IVAFacturado:doc.data().IVAFacturado,
        RetegantiaPorcent:doc.data().RetegantiaPorcent,
        ValorReteGantia:doc.data().ValorReteGantia,
        ValorPendientePorFacturarSinIVA:doc.data().ValorPendientePorFacturarSinIVA,
        FacturasPagadsPorElCliente:doc.data().FacturasPagadsPorElCliente,
        AnticipoAmortizadoPorElCliente:doc.data().AnticipoAmortizadoPorElCliente,
        SaldoAnticipoPorAmortizar:doc.data().SaldoAnticipoPorAmortizar,
        RetencionesYDescuentos:doc.data().RetencionesYDescuentos,
        FacturacionPendientedePago:doc.data().FacturacionPendientedePago,
        AnticiposPendientesDePago:doc.data().AnticiposPendientesDePago,
        RelacionFacturadoContratado:doc.data().RelacionFacturadoContratado,
        Estado:doc.data().Estado
      
      })))
    })

    onSnapshot(Fa, (querySnapshot) => {
      setFacturacion(querySnapshot.docs.map(doc => ({
        id:doc.id,
        Num:doc.data().Num,
        NumeroIdentificacion:doc.data().NumeroIdentificacion,
        TipoDocumento:doc.data().TipoDocumento,
        Centrodecostos:doc.data().Centrodecostos,
        Fecha:doc.data().Fecha,
        FechaVencimiento:doc.data().FechaVencimiento,
        Concepto:doc.data().Concepto,
        ValorAntesdeIVA:doc.data().ValorAntesdeIVA,
        IVA:doc.data().IVA,
        TotalconIVA:doc.data().TotalconIVA,
        RetencionFuente:doc.data().RetencionFuente,
        RetencionIVA:doc.data().RetencionIVA,
        Amortizacion:doc.data().Amortizacion,
        ProntoPago:doc.data().ProntoPago,
        RetencionxGarantia:doc.data().RetencionxGarantia,
        RetincionICA:doc.data().RetincionICA,
        TotalaPagar:doc.data().TotalaPagar,
        SaldoDespuesdePagooAbono:doc.data().SaldoDespuesdePagooAbono,
        Fechadepago:doc.data().Fechadepago,
        Estatus:doc.data().Estatus,
      })))
    })
    
  },[])


  return (
    <DatosContext.Provider value={{
      Facturacion,
      Importarfactura,
      IdF, setIdF,
      ImportarDatosME,
      ImportarDatosM,
      Idm, setIdm,
      IdmE, setIdmE,
      formatodivisa,
      Eliminar,
      Actualizar,
      datosMaestro,
      CrearDatos,
      Contratado, 
      setContratado,
      Ejecutado, 
      setEjecutado, 
      Nombre, 
      setNombre,
      setRetencionesYDescuentos,
      setAnticipoAmortizadoPorElCliente,
      setFacturasPagadsPorElCliente,
      setRetegantiaPorcent,
      setValorTotalFacturadoSinIVA,
      setAnticiposPagadosxElCliente,
      setPorcentAnticipoContractural,
      setUtilidadBruta,
      setImprevistos,
      setAdministracion,
      setPCO,
      setOTROSSI1,
      setOTROSSI2,
      setOTROSSI3,
      setOTROSSI4,
      setOTROSSI5,
      setOTROSSI6,
      setOTROSSI7,
      setOTROSSI8,
      setOTROSSI9,
      setOTROSSI10,
      setOTROSSI11,
      setOTROSSI12,
      setValorContratoSinIVA,
      setParticipacionOPTIMA,
      setContrato,
      setCoordinador,
      setDirector,
      setClienteFinal,
      setClienteDirecto,
      setDescripcionBreve,
      setLineaNegocio,
      setOferta,
      setSeudonimo,
      setContactoCliente,
      setFechaiC,
      setFechafC,
      setFechafR,
      setFechaiR,
      setConsecutivo,
      OTROSSI1,
      OTROSSI2,
      OTROSSI3,
      OTROSSI4,
      OTROSSI5,
      OTROSSI6,
      OTROSSI7,
      OTROSSI8,
      OTROSSI9,
      OTROSSI10,
      OTROSSI11,
      OTROSSI12,
      ValorContratoSinIVA,
      ParticipacionOPTIMA,
      Contrato,
      Coordinador,
      Director,
      ClienteFinal,
      ClienteDirecto,
      DescripcionBreve,
      LineaNegocio,
      Oferta,
      Seudonimo,
      ContactoCliente,
      FechaiC,
      FechafC,
      FechafR,
      FechaiR,
      Consecutivo,
      PCO,
      Administracion,
      Imprevistos,
      UtilidadBruta,
      PorcentAnticipoContractural,
      AnticiposPagadosxElCliente,
      ValorTotalFacturadoSinIVA,
      RetegantiaPorcent,
      FacturasPagadsPorElCliente,
      AnticipoAmortizadoPorElCliente,
      RetencionesYDescuentos,
      CrearDatosE,
      ActualizarE,
      datosMaestroE, 
      setDatosMaestroE,
      EliminarE,
      ImpuestosE, 
      setImpuestosE,
      Estadoo, setEstadoo

       }}>
      {children}
    </DatosContext.Provider>
  );
};
