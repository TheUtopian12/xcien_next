import React from "react";
import logoB from "../public/xcien_logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-gray-800  shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              width={100}
              height={70}
              src={logoB}
              className="mr-3 h-8"
              alt="XCIEN Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <ul className="flex flex-wrap items-center m-6 text-sm text-gray-200 sm:mb-0 dark:text-gray-400">
            <li>
              <ul>
                <li className="mr-4 hover:underline md:mr-6 ">
                  Av. Eugenio Garza Sada 3820, <br /> Roma, 64780 Monterrey,
                  N.L.
                </li>
              </ul>
              <br />
              <ul>
                <li className="mr-4 hover:underline md:mr-6 ">
                  Horario de oficina
                </li>
                <li className="mr-4 hover:underline md:mr-6 ">
                  Lunes a Jueves de 9:00 a 19:00 hrs.
                </li>
                <li className="mr-4 hover:underline md:mr-6 ">
                  Viernes de 9:00 a 18:00 hrs.
                </li>
                <li className="mr-4 hover:underline md:mr-6 ">
                  Sábados de 9:00 a 13:00 hrs.
                </li>
              </ul>
            </li>
            <li className="text-justify mr-4">
              {" "}
              <ul>
                <li href="#" className="mr-4  hover:underline md:mr-6 font-bold">
                  Contrataciones
                </li>
               
                <li className="font-bold">
                  ¡Llámanos sin costo! <br /> 800 288 0092
                </li>

                <br />
                <li className="mr-4 hover:underline md:mr-6 font-bold">
                  Horario de ventas
                </li>
                <li>
                  Lunes a Viernes de 9:00 a 19:00 hrs. <br />
                  Sábados de 9:00 a 13:00 hrs.
                </li>
              </ul>
            </li>
          
            <li className="mr-4">
              <ul>
                <li href="#" className="mr-4  hover:underline md:mr-6 font-bold">
                  ¿Ya eres cliente?
                </li>
                <br />
                <li className="font-bold">
                  Atención a clientes
                  <br /> Lunes a Jueves de 9:00 a 19:00 hrs.
                  <br />
                  Viernes de 9:00 a 18:00 hrs. <br />
                  Sábados de 9:00 a 13:00 hrs.
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <ul>
                <li className="mr-4 hover:underline md:mr-6 font-bold">Soporte</li>
                <li>Servicio 24 hrs.</li>
              </ul>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
        <span className="block text-sm text-gray-200 sm:text-center dark:text-gray-400">
          <div className="space-x-7"><a href="https://flowbite.com/" className="hover:underline">
          Aviso de Privacidad      
          </a>

            <span>|</span> 

          <a href="https://flowbite.com/" className="hover:underline">
          Cumplimiento IFT y PROFECO  
          </a></div>
          
        
        </span>
      </footer>
    </>
  );
};

export default Footer;
