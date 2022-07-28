import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/img/LogoFirewalli_BC.png";
import grafico from "../../public/img/undraw_startup_life_re_8ow9.svg";
import firewall from '../../public/img/firewall.svg'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Footer from "../../components/Footer";
const Administrados = () => {
  const [slide, setSlide] = useState(1);
  return (

    <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-0">
      <div className="p-10 flex justify-center h-full bg-relative  bg-cover custom-img">
        
        
        <div className="text-center text-4xl text-white font-bold pt-10">
          <h1>Seguridad Administrada</h1>
          <br /> <br />
          <FaArrowCircleLeft
            onClick={()=>{setSlide(slide-1)}}
            size={50}
            className="absolute top-[45%] left-[30px] text-black/50 cursor-pointer select-none z-[2] "
          />
          {slide === 1 ? (
            <>
              {" "}
              <div className="p-6 max-w-sm bg-black rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 backdrop-blur-sm bg-opacity-70 ">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
                    FIREWALLI
                  </h5>
                  <Image src={Logo} />
                </a>
              </div>
              <br /> <br />
              <div className="p-6 max-w-sm bg-black rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 backdrop-blur-sm bg-opacity-70 ">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
                    Otros Equipos
                  </h5>
                  <Image src={grafico} />
                </a>
              </div>
            </>
          ) : slide === 2 ? (
            <>
              <p className="text-center ">TRABAJA SEGURO Y SIEMPRE CONECTADO</p>
              <p className="text-3xl pt-24 text-justify">
                Seguridad para tu negocio administrada 100% en la nube, la
                instalación y la administración remota es más simple.
              </p>
              <p className="text-3xl pt-24 text-justify">
                Incrementa la productividad de tu negocio.
              </p>
              <h3 className="text-3xl pt-12 text-justify">Incluye:</h3>
              <ul className="list-disc text-2xl text-justify py-10">
                <li>Filtrado de contenido.</li>
                <li>Filtrado de búsqueda web.</li>
                <li>Filtrado de redes sociales/streaming.</li>
                <li>Prevención de intrusiones.</li>
              </ul>
            </>
          ) 
        : slide === 3 ?(

          <>
                <p className=" text-justify pt-24 ">Beneficios</p>
                <ul className="list-disc text-2xl text-justify py-10">
                  <li>Firewall de última generación</li><br />
                  <li>Control de aplicaciones (en tus manos)</li><br />
                  <li>Varios puertos WAN</li><br />
                  <li>Tolerancia a fallos</li><br />
                  <li>Filtrado de contenido</li><br />
                  <li>Prevención de intrusiones</li><br />
                  <li>Antivirus y Antiphishing</li><br />
                </ul>
              </>
        ): <>{setSlide(1)} </>
        } <FaArrowCircleRight
        onClick={()=>{setSlide(slide+1)}}
        size={50}
        className="absolute top-[45%] right-1/2 text-black/50 cursor-pointer select-none z-[2]"
      />
        </div>
      </div>

      <div className="p-4 bg-white rounded-md grid-cols-1 flex justify-center items-center" >
        <Image src={firewall} width={500} height={300}/>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Administrados;
