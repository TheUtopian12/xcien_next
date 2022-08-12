import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import grafico from "../../public/img/vpn1.svg";
import grafico2 from "../../public/img/vpn2.svg";
import Footer from "../../components/Footer";
const Vpm = () => {
  return (
    <>
     <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1598946114934-8cf259aa241d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
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
                  VPN
                </h1>
               
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
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4 items-center">
        <div className="">
          <p className="text-3xl text-black text-center">
            <strong>Red Privada Virtual</strong>
            <br />
          </p>
          <p className="text-3xl text-black text-center">
            <strong className="hover:text-green-600 text-3xl  rounded-xl">
              Conectado dentro y fuera de la oficina
            </strong>
            <br />
          </p>
          <br />
          <p className="text-black text-2xl  rounded-xl m-2">
            <br />
            Mejoramos la seguridad de tu empresa mediante nuestro servicio de
            red privada virtual y con ello creamos una mejor conexión interna.
          </p>
          <br />
          <p className="text-black text-2xl  rounded-xl m-2">
            Nuestro servicio te permite que envíes y recibas datos sobre redes
            compartidas o públicas como si fuera una red privada, con toda la
            funcionalidad, seguridad y políticas de gestión de una red.
          </p>

          <p className="text-black text-2xl  rounded-xl m-2">
            <br />
            <strong>Aumenta la eficiencia y seguridad </strong> con nuestros
            servicios administrados.
          </p>
          <br />
        </div>
        <div className="">
          <div className="flex-row text-center bg-white">
            <Image src={grafico} width="500" height="300" />
            <br />

            <div className=" justify-center items-center text-center">
          
            </div>
          </div>
        </div>

        <div className="flex-row text-center bg-white pt-28">
          <Image src={grafico2} width="500" height="300" />
          <br />

          <div className=" justify-center items-center text-center">
            <button
              type="button"
              className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Más Información
            </button>
          </div>
        </div>

        <div>
          <p className="text-3xl text-black text-left">
            <strong className="hover:text-green-600 text-3xl  rounded-xl">
              Ventajas
            </strong>
            <br />
          </p>
          <br />
          <p className="text-black text-2xl  rounded-xl m-2">
            <br />
            Posibilidad de conectar dos o más sucursales de una empresa
            utilizando como vínculo Internet.
          </p>
          <br />
          <p className="text-black text-2xl  rounded-xl m-2">
            Un usuario puede acceder a su equipo doméstico desde un sitio
            remoto.{" "}
          </p>
          <p className="text-black text-2xl  rounded-xl m-2">
            <br />
            Garantiza el nivel de seguridad adecuado para los sistemas
            conectados.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vpm;
