import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/all.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="layout">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
