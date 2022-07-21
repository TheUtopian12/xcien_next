import React from "react";
import Card from "./Card";
const Servicios = () => {
  return (
    <>
      <div className="h-auto bg-cover2 custom-img mb-28" id="servicios">
        <h1 className="flex items-center justify-center text-6xl mb-28 pt-24 text-white font-semibold">
          Servicios
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 " >
          {" "}
          <div className="p-4  rounded-md flex items-center justify-center">
            <Card
              imagen={
                "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2021/09/Internet.jpg?resize=1000%2C600&ssl=1"
              }
              titulo={"Internet"}
              descripcion={
                "Mejoramos la seguridad de tu empresa con una conexion interna"
              }
              url={"/ServiciosInternet"}
            />
          </div>
          <div className="p-4  rounded-md flex items-center justify-center">
            <Card
              imagen={
                "http://frederickscompany.com/wp-content/uploads/2019/11/iStock-579733578-e1573574017848-1024x499.jpg"
              }
              titulo={"VPN"}
              descripcion={
                "Mejoramos la seguridad de tu empresa con una conexion interna"
              }
              url={"/VPN"}
            />
          </div>
          <div className="p-4  rounded-md flex items-center justify-center">
            <Card
              imagen={
                "data:image/jpeg;base64,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"
              }
              titulo={"Administrados"}
              descripcion={
                "Nos encargamos de tus servicios con personal especializado "
              }
            />
          </div>
          <div className="p-4 rounded-md flex items-center justify-center">
            <Card
              imagen={
                "https://strmnoticias.files.wordpress.com/2021/11/pexels-photo-887751.jpeg?w=863&h=0&crop=1"
              }
              titulo={"Telefonia IP"}
              descripcion={
                "Logra una comunicacion efectiva sobre internet en tu negocio"
              }
            />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Servicios;
