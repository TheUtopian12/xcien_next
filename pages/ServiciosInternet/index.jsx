import React, { useState, useEffect } from "react";
import Acordion from "../../components/Acordion";
import Footer from "../../components/Footer";
import InternetCard from "../../components/InternetCard";
import Navbar from "../../components/Navbar";
const ServiciosInternet = () => {
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
    <>
    




      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto pt-16">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                Internet
                </h1>
                <p className="mt-4 text-lg text-blueGray-200 text-white">
                Garantiza estabilidad, seguridad y velocidad en la transferencia de
        datos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
        
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1 p-14 items-center">
        {size.width < 900 ? (
          <div>
            <Acordion
              titulo="Alta velocidad"
              descripcion="Velocidad garantizada con una conexión de internet sin
              sobresuscripción, planes disponibles hasta 1 GB."
            />
            <Acordion
              titulo="Seguridad y productividad"
              descripcion=" Mayor rendimiento del equipo de trabajo con un internet
              seguro (internet+firewall)."
            />
            <Acordion
              titulo="Flexibilidad"
              descripcion="Planes personalizados de acuerdo a tus necesidades, nos adaptamos a tu crecimiento."
            />
            <Acordion
              titulo="Alta disponibilidad"
              descripcion="Aseguramos la continuidad de tu negocio."
            />
            <Acordion
              titulo="End to end"
              descripcion="Despreocúpate, nos encargamos de todo.
              Complementa tu servicio con nuestras soluciones 
              (wifi, firewall, orquestador de redes, G suite, telefonía , entre
              otros)."
            />
            <Acordion
              titulo="Soporte técnico"
              descripcion="Asistencia personalizada, solucionamos tu problema al momento."
            />
          </div>
        ) : (
          <div className="bg-fixed bg-cover h-full custom-img justify-center text-center">
            <div className="mt-72">
              {" "}
              <p
                style={{ color: "white", fontSize: "20px" }}
                className="bg-green-900/50 z-[2] rounded-xl"
              >
                <strong className="hover:text-green-600">Estabilidad</strong>
                <br />
                Garantiza estabilidad en la transferencia de datos, servicio de
                Internet hasta 1 Gb.
              </p>
              <br />
              <p
                style={{ color: "white", fontSize: "20px" }}
                className="bg-green-900/50 z-[2] rounded-xl"
              >
                <strong className="hover:text-green-600">
                  Alta disponibilidad
                </strong>
                <br />
                Internet sin caídas, aseguramos la continuidad de tú negocio.
              </p>
              <br />
              <p
                style={{ color: "white", fontSize: "20px" }}
                className="bg-green-900/50 z-[2] rounded-xl"
              >
                <strong className="hover:text-green-600">
                  Seguridad y Productividad
                </strong>
                <br />
                Mayor rendimiento del equipo de trabajo con un internet seguro
                (internet+firewall).
              </p>
              <br />
              <p
                style={{ color: "white", fontSize: "20px" }}
                className="bg-green-900/50 z-[2] rounded-xl"
              >
                <strong className="hover:text-green-600">
                  Soluciones integrales - End to end
                </strong>
                <br />
                Simplifica tu administración con soluciones adicionales (wifi,
                firewall, orquestador de redes, Gsuite, telefonía, entre otros).
              </p>
              <br />
              <p
                style={{ color: "white", fontSize: "20px" }}
                className="bg-green-900/50 z-[2] rounded-xl"
              >
                <strong className="hover:text-green-600">End to end</strong>
                <br />
                Despreocúpate, nos encargamos de todo. <br />
                Complementa tu servicio con nuestras soluciones <br />
                (wifi, firewall, orquestador de redes, G suite, telefonía ,
                entre otros).
              </p>
              <br />
              <p
                style={{ color: "white", fontSize: "20px" }}
                className="bg-green-900/50 z-[2] rounded-xl"
              >
                <strong className="hover:text-green-600">Flexibilidad</strong>
                <br />
                Planes personalizados de acuerdo a tus necesidades, nos
                adaptamos a tu crecimiento.
              </p>
              <br />
              <p
                style={{ color: "white", fontSize: "20px" }}
                className="bg-green-900/50 z-[2] rounded-xl"
              >
                <strong className="hover:text-green-600">
                  Soporte técnico
                </strong>
                <br />
                Asistencia personalizada, solucionamos tu problema al momento.
              </p>
            </div>
          </div>
        )}

        <div id="contentCards">
          <InternetCard
            titulo={"Internet Dedicado"}
            url={
              "https://www.escueladeinternet.com/wp-content/uploads/2014/08/Imatge_Nominalia-Office-365-300x255.jpg"
            }
            p1={
              "Servicio de conexión exclusiva para corporativos y organizaciones cuyos procesos dependen del uso de Internet para sus operaciones          "
            }
            p2={
              "Dedicado: enlace directo 1 a 1          Simétrico: misma velocidad de subida y bajada"
            }
            p3={"SLA: 99.95%"}
            p4={"Velocidad: Desde 5 Mbps  hasta 1 Gb          "}
            p5={"Instalación hasta 5 días"}
            pagina={"/InternetDedicado"}
          />
          <br />
          <InternetCard
            titulo={"INTERNET MYPE"}
            url={
              "https://mypes.pe/sites/default/files/styles/1_columna_lg/public/2018-05/imagen-editada-5.jpg?itok=n7k9BbuE"
            }
            p1={
              "Servicio de conexión exclusiva para pequeños y medianos negocios cuyos procesos dependen del uso de Internet para sus operaciones"
            }
            p2={"Asimétrico"}
            p3={"SLA: 99%"}
            p4={"Velocidad: 10 Mbps y 20 Mbps"}
            p5={"Instalación hasta 7 días"}
            pagina={"/InternetMype"}
          />
          <br />
          <InternetCard
            titulo={"INTERNET RESIDENCIAL PLUS"}
            url={
              "https://d500.epimg.net/cincodias/imagenes/2016/05/01/lifestyle/1462107416_170521_1462107510_noticia_normal.jpg"
            }
            p1={
              "Servicio de conexión ideal para emprendedores, trabajo en casa o usuarios exigentes que requieren un servicio de Internet en casa."
            }
            p2={"Asimétrico"}
            p3={"SLA: 99%"}
            p4={"Velocidad: 10 Mbps y 20 Mbps"}
            p5={"Instalación hasta 7 días"}
            pagina={"/InternetResidencial"}
          />

          <br />
          <InternetCard
            titulo={"INTERNET PARA EVENTOS"}
            url={
              "https://zsf2bmwpkpm0.cdn.shift8web.ca/wp-content/uploads/2020/12/internet-para-eventos-1.jpg"
            }
            p1={
              "Contrata Internet para eventos los días que los necesites. Internet flexible, dedicado y de rápida instalación."
            }
            p2={
              "Dedicado: enlace directo 1 a 1  Simétrico: misma velocidad de subida y bajada"
            }
            p3={"SLA: 99.95%"}
            p4={"Velocidad: Desde 10 Mbps hasta 1 Gb"}
            p5={"Contratación por días    "}
            pagina={"/InternetEventual"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiciosInternet;
