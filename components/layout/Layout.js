import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const query = useRouter()
    return (
      <>
      <div className="logo">
        <img src="https://www.optimaingenieria.co/wp-content/uploads/2017/12/logo-optima-ingenieria.png" alt="logo" />
      </div>
      <div className="sidenav">
        <Link href={"/Maestro-historico"} className={query.pathname = "/Maestro-historico" ? 'active' : ''}>Maestro Historico Nacionales</Link>
        <Link href={"/Maestro-historico/extranjeros"} className={query.pathname == "/Maestro-historico/extranjeros" ? 'active' : ''}>Maestro Historico Extranjeros</Link>
        <Link href={"/Maestro-historico/informe"}>Informe Nacionales</Link>
        <Link href={"/Maestro-historico/informe-extranjeros"}>Informe Extranjeros</Link>
        <Link href={"/Facturacion"}>Facturacion</Link>
      </div>
      <div className="main">
        {children}
      </div>
      </>
      
      

    )
  }