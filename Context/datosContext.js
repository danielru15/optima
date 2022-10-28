import { createContext, useState } from "react";
export { useContext } from "react";

export const datosContext = createContext();

export const Maestro = ({ children }) => {
  const [datosMaestro, setDatosMaestro] = useState([
    {
      Contratado: "",
      Ejecutado: "",
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
  

  return (
    <datosContext.Provider value={(datosMaestro, setDatosMaestro)}>
      {children}
    </datosContext.Provider>
  );
};
