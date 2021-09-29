import "tailwindcss/tailwind.css";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "tailwindcss/screens.css";
import "../styles/app.css";
import "../styles/arrow.css";
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Noah Taheij</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="bg-gray-200 bg-opacity-60" id="App">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
