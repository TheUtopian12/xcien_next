import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import phone from "../../public/img/telephone.svg";
import phone2 from "../../public/img/telephone2.svg";
import phone3 from "../../public/img/telephone3.svg";
import Footer from "../../components/Footer";
const index = () => {
  

  return (
    <>
      {" "}
      <div className="h-32 bg-fixed bg-cover custom-img7 flex justify-center items-center align-middle ">
        <Navbar />
      </div>
      <h1 className="text-black text-4xl text-center pt-5 font-bold">
        Telefonia IP
      </h1>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 m-8">
        <div className="text-center text-4xl text-black font-bold pt-10">
          <p className="text-center ">
            Con nuestro servicio de telefonía IP te permitimos lograr una
            comunicación fácil, efectiva y flexible en tu negocio.
          </p>
          <p className="text-3xl pt-24 text-justify">
            Integramos las mejores herramientas para brindar una mayor
            productividad.
          </p>
          <p className="text-3xl pt-24 text-justify">
            La vida es móvil y las empresas cada vez demandan más soluciones que
            puedan ser ejecutadas desde cualquier dispositivo y en cualquier
            lugar.
          </p>
          <p className="text-3xl pt-24 text-justify">
            Telefonía IP la mejor solución para la Transformación Digital de las
            empresas.{" "}
          </p>
        </div>
        <div className="p-4 bg-white rounded-md grid-cols-1 flex justify-center items-center">
          <Image src={phone} width={500} height={300} />
        </div>

        <div className="p-4 bg-white rounded-md grid-cols-1 flex justify-center items-center">
          <Image src={phone2} width={500} height={300} />
        </div>

        <div className="text-center text-4xl text-black font-bold pt-10">
          <p className=" text-justify pt-24 ">Beneficios</p>
          <ul className="list-disc text-2xl text-justify py-10">
            <li> Calidad de voz mejorada</li>
            <br />
            <li>Escalable</li>
            <br />
            <li>Menor inversión</li>
            <br />
            <li>Sin retrasos en la transmisión</li>
            <br />
            <li>Ahorro de costos</li>
            <br />
            <li>Reducción del importe de la factura telefónica</li>

            <br />
          </ul>
        </div>

        <div className="text-center text-4xl text-black font-bold pt-10">
          <p className=" text-justify pt-24 ">
            {" "}
            Telefonía IP la mejor solución para la Transformación Digital de las
            empresas.
          </p>
          <ul className="list-disc text-2xl text-justify py-10">
            <li>Conmutador virtual.</li>

            <li>
              Flexibilidad, utiliza tus extensiones telefónicas en oficinas,
              casa o donde quiera que estés etc.
            </li>

            <li>
              Extensiones móviles, configura tu extensión en tus dispositivos
              móviles.
            </li>

            <li>
              Opera sobre la misma red, los aparatos telefónicos cuentan con 2
              puertos de red (puente de conexión).
            </li>

            <li>Reduce tu factura telefónica.</li>

            <li>Calidad en las llamadas.</li>
            <li>Servicio empresarial.</li>
            <li>Soporte técnico en línea.</li>
            <li>Soporte técnico en línea.</li>

            <br />
          </ul>
        </div>

        <div className="p-4 bg-white rounded-md grid-cols-1 flex justify-center items-center">
          <Image src={phone3} width={500} height={300} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
