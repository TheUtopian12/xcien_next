import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/img/LogoFirewalli_BC.png";
import grafico from "../../public/img/undraw_startup_life_re_8ow9.svg";
import security from "../../public/img/security2.svg";
import security3 from "../../public/img/security3.svg";
import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const Administrados = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [slide, setSlide] = useState(1);
  return (
    <>
      <div className="h-32 bg-fixed bg-cover custom-img7 flex justify-center items-center align-middle ">
        <Navbar />
      </div>
      <h1 className="text-black text-4xl text-center pt-5 font-bold">
        Seguridad Administrada
      </h1>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-14 items-center">
        <div className=" p-6 m-4 h-fit bg-black rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 backdrop-blur-sm ">
          <a href="#">
            <Image src={Logo} />
          </a>
        </div>

        <div className="">
          <h5 className="text-4xl text-center">Firewalli</h5>
          <p className="text-2xl text-justify mt-3 mb-3">
            Te presentamos nuestra nueva solución administrada, un firewall todo
            en uno, simple y poderoso
          </p>
          <p className="text-2xl text-justify mt-3 mb-3">
            Nuestro servicio administrado de seguridad está respaldado por
            nuestro equipo especializado que te protegerá de las amenazas
            cibernéticas, lo que te brindará tranquilidad en esta nueva era
            digital.
          </p>
          <div className="flex justify-center ">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-red-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Más Información
            </button>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-20 items-center"
        data-aos="fade-up"
      >
        <div className="">
          <h5 className="text-4xl text-center">Seguridad Administrada</h5>
          <h4 className="text-3xl text-center pt-3 pb-3">
            TRABAJA SEGURO Y SIEMPRE CONECTADO
          </h4>
          <p className="text-2xl text-justify mt-3 mb-3">
            Seguridad para tu negocio administrada 100% en la nube, la
            instalación y la administración remota es más simple.
          </p>
          <p className="text-2xl text-justify mt-3 mb-3">
            Incrementa la productividad de tu negocio.
          </p>
        </div>

        <div data-aos="fade-up">
          <Image src={security} height={300} />
          <br />
          <br />
        </div>

        <div data-aos="fade-right">
          <Image src={grafico} height={300} />
        </div>

        <div className="" data-aos="fade-left">
          <h5 className="text-4xl text-center">Incluye:</h5>

          <p className="text-2xl text-left mt-3 mb-3">
            <ul>
              <li>Filtrado de contenido.</li>
              <br />
              <li>Filtrado de búsqueda web.</li> <br />
              <li>Filtrado de redes sociales/streaming.</li> <br />
              <li>Prevención de intrusiones.</li> <br />
            </ul>
          </p>
        </div>

        <div className="" data-aos="fade-right">
          <hr />
          <h5 className="text-4xl text-center">Beneficios</h5>

          <p className="text-2xl text-left mt-3 mb-3">
            <ul>
              <li>Firewall de última generación</li> <br />
              <li>Control de aplicaciones (en tus manos)</li> <br />
              <li>Varios puertos WAN</li> <br />
              <li>Tolerancia a fallos</li> <br />
              <li>Filtrado de contenido</li> <br />
              <li>Prevención de intrusiones</li> <br />
              <li>Antivirus y Antiphishing</li> <br />
            </ul>
          </p>
        </div>

        <div data-aos="fade-left">
          <Image src={security3} height={300} />
        </div>

        <div className="flex justify-center" data-aos="fade-up">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-red-400 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Más Información
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Administrados;
