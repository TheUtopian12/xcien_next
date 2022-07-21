import React from "react";
import Image from "next/image";
import style from "../../styles/vpn.module.css";
import vpnLogo from "../../public/img/vpn.png";
import Navbar2 from "../../components/Navbar2";

const index = () => {
  return (
    <div className={style.container1}>
      <Navbar2 />
      <div id={style.contentText}>
        <h3 className={`${style.tituloh3} text-5xl`}>VPN</h3>
        <br />
        <>
          <p style={{ color: "white", fontSize: "20px" }}>
            <strong className="hover:text-green-600 text-3xl">
              ¿Qué ventajas tienen las redes virtuales privadas (VPN) de Xcien?
            </strong>
            <br />
          </p>
          <br />
          <p className="text-white text-2xl">
            <br />
            Posibilidad de conectar dos o más sucursales de una empresa
            utilizando como vínculo internet
          </p>
          <br />
          <p className="text-white text-2xl">
            Un usuario puede acceder a su equipo doméstico desde un sitio remoto
          </p>

          <p className="text-white text-2xl">
            <br />
            Garantiza el nivel de seguridad adecuado para los sistemas conectado
          </p>
          <br />
        </>
      </div>
      <div className="flex-row items-center justify-center bg-white">
        <br />
        <Image src={vpnLogo} width="800" height="500" />

        <button
          type="button"
          className="text-black hover:text-white relative left-1/3 bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Más Información
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default index;
