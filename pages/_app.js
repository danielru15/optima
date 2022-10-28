import Layout from "../components/layout/Layout";
import { Maestro } from "../context/datosContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Maestro>
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </Maestro>
  );
}

export default MyApp;
