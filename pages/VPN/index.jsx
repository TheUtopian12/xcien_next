import React, { useState } from "react";
import Image from "next/image";
import style from "../../styles/vpn.module.css";
import vpnLogo from "../../public/img/vpn.png";
import Navbar2 from "../../components/Navbar2";
import grafico from '../../public/img/Imagen1.png'
import grafico2 from '../../public/img/Imagen2.png'
const index = () => {
  const [slide, setSlide] = useState(true);
  return (
    <div className={style.container1}>
      <Navbar2 />
      <div
        id={style.contentText}
        className="bg-fixed bg-center bg-cover custom-img h-full "
      >
        <h3 className={`${style.tituloh3} text-5xl`}>VPN</h3>
        <br />
        <>
          {slide ? (
            <>
              <p className="text-3xl text-white text-center">
                <strong>Red Privada Virtual</strong>
                <br />
              </p>
              <p className="text-3xl text-white text-center">
                <strong className="hover:text-green-600 text-3xl bg-green-900/50 z-[2] rounded-3xl">
                  Conectado dentro y fuera de la oficina
                </strong>
                <br />
              </p>
              <br />
              <p className="text-white text-2xl bg-green-900/50 z-[2] rounded-3xl">
                <br />
                Mejoramos la seguridad de tu empresa mediante nuestro servicio
                de red privada virtual y con ello creamos una mejor conexión
                interna.
              </p>
              <br />
              <p className="text-white text-2xl bg-green-900/50 z-[2] rounded-3xl">
                Nuestro servicio te permite que envíes y recibas datos sobre
                redes compartidas o públicas como si fuera una red privada, con
                toda la funcionalidad, seguridad y políticas de gestión de una
                red.
              </p>

              <p className="text-white text-2xl bg-green-900/50 z-[2] rounded-3xl ">
                <br />
                <strong>Aumenta la eficiencia y seguridad </strong> con nuestros
                servicios administrados.
              </p>
              <br />
            </>
          ) : (
            <>
              {" "}
              <p className="text-3xl text-white text-center">
                <strong>Red Privada Virtual</strong>
                <br />
              </p>
              <p className="text-3xl text-white text-left">
                <strong className="hover:text-green-600 text-3xl bg-green-900/50 z-[2] rounded-3xl">
                  Ventajas
                </strong>
                <br />
              </p>
              <br />
              <p className="text-white text-2xl bg-green-900/50 z-[2] rounded-3xl">
                <br />
                Posibilidad de conectar dos o más sucursales de una empresa
                utilizando como vínculo Internet.
              </p>
              <br />
              <p className="text-white text-2xl bg-green-900/50 z-[2] rounded-3xl">
                Un usuario puede acceder a su equipo doméstico desde un sitio
                remoto.{" "}
              </p>
              <p className="text-white text-2xl bg-green-900/50 z-[2] rounded-3xl">
                <br />
                Garantiza el nivel de seguridad adecuado para los sistemas
                conectados.
              </p>
              <br />
            </>
          )}
        </>
        <button
          onClick={() => {
            setSlide(!slide);
          }}
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Ver Más
        </button>
      </div>
      <div className="flex-row text-center bg-white">
        <br />
        <Image src={grafico} width="800" height="500" />
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
    </div>
  );
};

export default index;
