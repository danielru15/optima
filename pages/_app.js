import { DatosProvider } from "../Context/datosContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DatosProvider>
        <Component {...pageProps} />{" "}
    </DatosProvider>
  );
}

export default MyApp;
