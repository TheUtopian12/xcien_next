import React, { useState } from "react";
import Drawer from "../../components/Drawer";
import Navbar from "../../components/Navbar2";
import foto from "../../public/img/production.jpeg";
const index = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (

    <> <Navbar/> <div className="mt-40 mb-28">
      <h1 className="flex items-center justify-center text-5xl mb-28 pt-14 text-black font-semibold">
        Equipos periféricos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="p-4 rounded-md flex items-center justify-center">
          <div className="w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
                style={{ width: "100%", height: "150px" }}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  TP-LINK
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Marca</strong> - <span>Koblenz</span>
              </p>{" "}
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Modelo</strong> - <span>Pv-2500</span>
              </p>{" "}
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Dimensiones</strong> - <span>19 x 9 cm</span>
              </p>
              <button
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => setIsOpen(true)}
                href="#"
              >
                VER MÁS
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen} titulo="TP-LINK">

              <div className="p-4">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
                style={{ width: "70%", height: "150px" }}
              />

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <strong>Marca</strong> - <span>Koblenz</span>
                </p>{" "}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <strong>Modelo</strong> - <span>Pv-2500</span>
                </p>{" "}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <strong>Dimensiones</strong> - <span>19 x 9 cm</span>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                  Su uso es adecuado para pasar corriente eléctrica a 5 aparatos
                  diferentes desde una misma toma corriente. Cuenta con 5
                  contactos aterrizados, 2 puertos USB para pasar energía a
                  celulares, tabletas y otros dispositivos móviles, incluye
                  protección de 1,000 joules y switch reset iluminado de 10
                  Amperes. Su cable mide 45 cm, cuenta con clavija de
                  alimentación de 90 grados y orificios para montar a la pared.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
                style={{ width: "auto", height: "150px" }}
              /><img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt=""
              style={{ width: "auto", height: "150px" }}
            /><img
            className="rounded-t-lg"
            src="https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
            style={{ width: "auto", height: "150px" }}
          />

                </div>
              </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div></>
  
  );
};

export default index;
