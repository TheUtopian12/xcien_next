import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Navbar/>
        <Component {...pageProps} />
       
      </ThemeProvider>
    </>
  );
}

export default MyApp;
