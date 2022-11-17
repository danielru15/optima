import React, {useContext} from 'react'
import { DatosContext } from "../../Context/datosContext"
import Layout from '../../components/layout/Layout'
import InformeCard from '../../components/maestroh/InformeCard'

const informeExtranjeros = () => {
  const {datosMaestroE} = useContext(DatosContext)
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Layout>
      <InformeCard
        titulo={'Informe Extranjeros'}
        datosMaestro={datosMaestroE}
        formatodivisa={currencyFormatter}
      />
    </Layout>
  )
}

export default informeExtranjeros