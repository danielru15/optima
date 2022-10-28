import Layout from "../components/layout/Layout";
import { DatosProvider } from "../Context/datosContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DatosProvider>
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </DatosProvider>
  );
}

export default MyApp;
