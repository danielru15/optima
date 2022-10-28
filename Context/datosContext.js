import { createContext, useState} from "react";
export { useContext } from "react";

export const DatosContext = createContext();


export const DatosProvider = ({ children }) => {
  const [Contratado, setContratado] = useState('')
  const [Ejecutado, setEjecutado] = useState('')
  const [Nombre, setNombre] = useState('')
  const [datosMaestro, setDatosMaestro] = useState([
    {
      Contratado: "aa",
      Ejecutado: "aa",
      Nombre: "",
      Seudonimo: "",
      Oferta: "",
      LineaNegocio: "",
      DescripcionBreve: "",
      ClienteDirecto: "",
      ClienteFinal: "",
      Director: "",
      Coordinador: "",
      Contrato: "",
      ParticipacionOPTIMA: "",
      ValorContratoSinIVA: "",
      IVA: "",
      OTROSI1: "",
      OTROSI2: "",
      OTROSI3: "",
      OTROSI4: "",
      OTROSI5: "",
      OTROSI6: "",
      OTROSI7: "",
      OTROSI8: "",
      OTROSI9: "",
      OTROSI10: "",
      OTROSI11: "",
      OTROSI12: "",
      PCO: "",
      Administracion: "",
      Imprevistos: "",
      UtilidadBruta: "",
      PorcentAnticipoContractural: "",
      AnticipoContractual: "",
      AnticiposPagadosxElCliente: "",
      ValorTotalFacturadoSinIVA: "",
      IVAFacturado: "",
      RetegantiaPorcent: "",
      FacturasPagadsPorElCliente: "",
      AnticipoAmortizadoPorElCliente: "",
      RetencionesYDescuentos: "",
    },
  ]);
  
  const CrearDatos = (Contratado) => {
    setDatosMaestro([...datosMaestro, {
      Contratado:Contratado,
      Ejecutado:"",
      Nombre:"",
      Seudonimo:"",
      Oferta:"",
      LineaNegocio: "",
      DescripcionBreve: "",
      ClienteDirecto: "",
      ClienteFinal: "",
      Director: "",
      Coordinador: "",
      Contrato: "",
      ParticipacionOPTIMA: "",
      ValorContratoSinIVA: "",
      IVA: "",
      OTROSI1: "",
      OTROSI2: "",
      OTROSI3: "",
      OTROSI4: "",
      OTROSI5: "",
      OTROSI6: "",
      OTROSI7: "",
      OTROSI8: "",
      OTROSI9: "",
      OTROSI10: "",
      OTROSI11: "",
      OTROSI12: "",
      PCO: "",
      Administracion: "",
      Imprevistos: "",
      UtilidadBruta: "",
      PorcentAnticipoContractural: "",
      AnticipoContractual: "",
      AnticiposPagadosxElCliente: "",
      ValorTotalFacturadoSinIVA: "",
      IVAFacturado: "",
      RetegantiaPorcent: "",
      FacturasPagadsPorElCliente: "",
      AnticipoAmortizadoPorElCliente: "",
      RetencionesYDescuentos: "",

    }])
    
  }
  return (
    <DatosContext.Provider value={{
      datosMaestro,
      CrearDatos,
      Contratado, 
      setContratado,
      Ejecutado, 
      setEjecutado, 
      Nombre, 
      setNombre }}>
      {children}
    </DatosContext.Provider>
  );
};
