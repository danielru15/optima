import React from 'react'
import Layout from '../../components/layout/Layout'
import { useRouter } from "next/router";
import Button from "@mui/material/Button";


const Extranjeros = () => {
  const router = useRouter();
  return (
    <Layout>
      <p>Maestro Historico</p>
      <Button
        variant="contained"
        onClick={() => router.push("/Maestro-historico/Crear")}
      >
        Crear
      </Button>
    </Layout>
  )
}

export default Extranjeros