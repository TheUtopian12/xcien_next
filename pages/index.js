import { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import Opiniones from "../components/Opiniones";
import Servicios from "../components/Servicios";
import Footer from "../components/Footer";
import { CardExpand } from "../components/ExpandCards/CardExpand";

import { Slider2 } from "../components/Slider2";

export default function Home() {
  const size = useWindowSize();

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <div>
      <Head>
        <title>XCIEN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        heading="Ya conoces nuestros servicios?"
        message="Te ofrecemos servicios especializados de internet
                  dedicado empresarial y/o corporativo"
      />
      {size.width < 800 ? <Slider2 /> : <CardExpand />}

      <Servicios />
      <Nosotros />
      <Opiniones />

      <Footer />
    </div>
  );
}
