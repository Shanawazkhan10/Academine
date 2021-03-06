import "../styles/globals.css";
import Header from "../component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
