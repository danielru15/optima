import Link from "next/link";

export default function Layout({ children }) {
    return (
      <>
      <div className="sidenav">
        <Link href={"/Maestro-historico"}>Maestro historico</Link>
        <Link href={"/Maestro-historico/extranjeros"}>Maestro historico extranjeros</Link>
        <Link href={"/Maestro-historico/informe"}>Informe</Link>
      </div>
      <div className="main">
        {children}
      </div>
      </>
      
      

    )
  }