import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
    const router = useRouter()
  return (
    <>
    <p>Maestro Historico</p>
    <button type="button" onClick={() => router.push('/Maestro-historico/Crear')}>
      Nuevo
    </button>
    </>
  )
}

export default index