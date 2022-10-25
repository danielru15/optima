import Link from "next/link";

export default function Layout({ children }) {
    return (
      <>
      <div className="sidenav">
        <Link href={"/Maestro-historico"}>Maestro historico</Link>
      </div>
      <div className="main">
        {children}
      </div>
      </>
      
      

    )
  }