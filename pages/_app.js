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
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if(!('theme' in localStorage)) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        switchDarkClasses();
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    } else {
      if(localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
        switchDarkClasses();
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });

  return (
    <>
      <Head>
        <title>Noah Taheij</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
      </Head>
      <div className="bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100" id="App">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>

      {/* Dark Mode Button */}
      <div className="dark-mode">
            <button onClick={goDark} role="button" id="toggle-dark" className="dark-mode">
                <i className="fas fa-sun fa-2x" id="toggle-dark-icon"></i>
            </button>
      </div>
    </>
  );
}

function goDark() {
  if (localStorage.theme === 'light') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }

  switchDarkClasses();
}

function switchDarkClasses() {
  var root = document.querySelector(':root');
  var rootLight = getComputedStyle(root).getPropertyValue('--light');
  var rootDark = getComputedStyle(root).getPropertyValue('--dark');

  var toggleDarkModeIcon = document.getElementById('toggle-dark-icon');

  root.style.setProperty('--light', rootDark);
  root.style.setProperty('--dark', rootLight);

  if(rootDark == getComputedStyle(root).getPropertyValue('--alwaysLight')) {
    toggleDarkModeIcon.className = "fas fa-moon fa-2x";
  } else {
      toggleDarkModeIcon.className = "fas fa-sun fa-2x";
  }
}

export default MyApp;
