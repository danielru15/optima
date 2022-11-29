import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const query = useRouter()
    return (
      <>
      <div className="sidenav">
        <Link href={"/Maestro-historico"} className={query.pathname = "/Maestro-historico" ? 'active' : ''}>Maestro historico Nacionales</Link>
        <Link href={"/Maestro-historico/extranjeros"} className={query.pathname == "/Maestro-historico/extranjeros" ? 'active' : ''}>Maestro historico Extranjeros</Link>
        <Link href={"/Maestro-historico/informe"}>Informe Nacionales</Link>
        <Link href={"/Maestro-historico/informe-extranjeros"}>Informe Extranjeros</Link>
      </div>
      <div className="main">
        {children}
      </div>
      </>
      
      

    )
  }