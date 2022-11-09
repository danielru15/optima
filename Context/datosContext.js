import { createContext, useState, useEffect} from "react";
import Alert from '@mui/material/Alert';
export { useContext } from "react";
import { auth, db} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection,onSnapshot, orderBy, query,addDoc, Timestamp,doc, getDocs,updateDoc,deleteDoc} from "firebase/firestore";
import moment from "moment/moment";

export const DatosContext = createContext();


export const DatosProvider = ({ children }) => {
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
  const [datosMaestro, setDatosMaestro] = useState([]);

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
   Login
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
    let Facturacion_Pendiente_Pago = Number(Number(ValorTotalFacturadoSinIVA) + Number(Iva_Facturado)) - Number((RetencionesYDescuentos)) - Number(FacturasPagadsPorElCliente) - Number((AnticiposPagadosxElCliente) - Number(Saldo_Anticipo_por_Amortizar))
    let Plazo_Contractual = moment(FechafC).diff(moment(FechaiC,),'days')
    let Plazo_Real = moment(FechafR).diff(moment(FechaiR,),'days')
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
    let Facturacion_Pendiente_Pago = Number(Number(ValorTotalFacturadoSinIVA) + Number(Iva_Facturado)) - Number((RetencionesYDescuentos)) - Number(FacturasPagadsPorElCliente) - Number((AnticiposPagadosxElCliente) - Number(Saldo_Anticipo_por_Amortizar))
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

  // Mostrar Datos
  useEffect(() => {
    const q = query(collection(db, 'MaestroHistoricO'),orderBy("Consecutivo" , "asc"), orderBy("Seudonimo", "asc" ), )
    onSnapshot(q, (querySnapshot) => {
      setDatosMaestro(querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })))
    })
  },[])


  return (
    <DatosContext.Provider value={{
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


       }}>
      {children}
    </DatosContext.Provider>
  );
};
