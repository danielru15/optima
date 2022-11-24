import Link from "next/link";

export default function Layout({ children }) {
    return (
      <>
      <div className="sidenav">
      <Link href={"/facturacion"}>Facturas</Link>
        <Link href={"/Maestro-historico"}>Maestro historico Nacionales</Link>
        <Link href={"/Maestro-historico/extranjeros"}>Maestro historico Extranjeros</Link>
        <Link href={"/Maestro-historico/informe"}>Informe Nacionales</Link>
        <Link href={"/Maestro-historico/informe-extranjeros"}>Informe Extranjeros</Link>
      </div>
      <div className="main">
        {children}
      </div>
      </>
      
      

    )
  }