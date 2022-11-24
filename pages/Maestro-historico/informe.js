import {useContext} from 'react'
import { DatosContext } from "../../Context/datosContext"
import Layout from '../../components/layout/Layout'
import InformeCard from '../../components/maestroh/InformeCard'


const Informe = () => {
  const {datosMaestro,formatodivisa} = useContext(DatosContext)

  return (
    <Layout>
    <InformeCard
      titulo={'Informe Nacionales'}
      datosMaestro={datosMaestro}
      formatodivisa={formatodivisa}
      name={'Informe Nacionales'}
    />
    </Layout>
  )
}

export default Informe