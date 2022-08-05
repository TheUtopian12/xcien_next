import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
const Nosotros = () => {
  return (
    <div className=" bg-white" id="nosotros">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-0 ">
        <div className=" flex items-center justify-center h-screen w-full  bg-fixed bg-cover custom-img6 ">
          <div className="p-2 max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 backdrop-blur-sm bg-opacity-70 ">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Av. Eugenio Garza Sada 3820, Roma, 64780 Monterrey, N.L.
              </h5>
            </a>
            <p className="flex mb-3 text-2xl text-gray-700 dark:text-gray-400">
              <AiFillFacebook /> <span className="ml-4">@xcien</span>
            </p>
            <p className="flex mb-3 text-2xl text-gray-700 dark:text-gray-400">
              <AiOutlineInstagram /> <span className="ml-4">@xcien</span>
            </p>
            <p className="flex mb-3 text-2xl text-gray-700 dark:text-gray-400">
              <AiOutlineLinkedin />
              <span className="ml-4">linkedin.com/company/xcien</span>
            </p>
          </div>
        </div>
        <div className=" bg-white rounded-md grid-cols-1 justify-center m-10">
          <p className="text-black text-4xl font-bold text-center pt-28">
            Nosotros
          </p>

          <p className="text-black text-2xl  text-justify pt-36">
            Somos una empresa mexicana fundada en 1999 en la ciudad de
            Monterrey, Nuevo León. Contamos con más de 21 años de experiencia
            brindando soluciones en el sector empresarial de Telecomunicaciones
            con calidad e innovación.
          </p>

          <p className="text-black text-2xl pt-10 text-justify">
            XCIEN instala antenas en torres conocidas como radio bases, donde
            tiene que existir "linea de vista", es decir, la posibilidad de que
            dos antenas puedan alinearse de forma directa.
          </p>
          <div className="flex justify-end mt-52">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Contacto
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
