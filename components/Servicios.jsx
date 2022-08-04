import React from "react";
import Link from "next/link";
import style from "../styles/ServiciosInternet.module.scss";
const info = [
  {
    id: 1,
    title: "Internet",
    imagen:"https://images.unsplash.com/photo-1542382257-80dedb725088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    description:
      "Mejoramos la seguridad de tu empresa con una conexion interna",
    url: "/ServiciosInternet",
  },
  {
    id: 2,
    title: "VPN",
    imagen:'https://images.unsplash.com/photo-1603985529862-9e12198c9a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1461&q=80',
    description: "Mejoramos la seguridad de tu empresa mediante red privada ",
    url: "/VPN",
  },
  {
    id: 3,
    title: "Administrados",
    imagen:'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: "Nos encargamos de tus servicios con personal especializado",
    url: "/Administrados",
  },
  {
    id: 4,
    imagen:'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: "Telefonía IP",
    description: "Logra una comunicacion efectiva sobre internet en tu negocio",
    url: "/TelefoniaIP",
  },
];
const Servicios = () => {
  return (
    <>
      <div className="h-auto bg-cover2 custom-img mb-28" id="servicios">
        <h1 className="flex items-center justify-center text-6xl mb-28 pt-24 text-white font-semibold">
          Servicios
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 ">
          {" "}
          {info.map((datos) => (
            <div className="p-4  rounded-md flex items-center justify-center" key={datos.id}>
              {" "}
              <div className={style.flip}>
                <div
                  className={style.front}
                  style={{
                    backgroundImage:
                      `url(${datos.imagen})`,
                  }}
                >
                  <h1 className={style[`text-shadow`]}>{datos.title}</h1>
                </div>
                <div className={style.back}>
                  <h2>{datos.title}</h2>
                  <br />
                  <p>{datos.description}</p>
                  <br />
                  <Link href={datos.url}>
                    <a className="text-blue-500 text-center">Más Informacion</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Servicios;
