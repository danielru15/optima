import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import React from "react";

const index = () => {
  const router = useRouter();
  return (
    <>
      <p>Maestro Historico</p>
      <Button
        variant="contained"
        onClick={() => router.push("/Maestro-historico/Crear")}
      >
        Crear
      </Button>
      
    </>
  );
};

export default index;
