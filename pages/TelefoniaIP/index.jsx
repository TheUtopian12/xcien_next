import React, { useState } from "react";
import Image from "next/image";
import Navbar2 from "../../components/Navbar2";
import phone from "../../public/img/telephone.svg";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Footer from "../../components/Footer";
const index = () => {
  const [slide, setSlide] = useState(3);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-0">
        <div className="p-10 flex justify-center h-full bg-relative  bg-cover custom-img">
          <div className="text-center text-4xl text-white font-bold pt-10">
            <h1>Telefonía IP</h1>
            <br /> <br />
            <FaArrowCircleLeft
              onClick={() => {
                setSlide(slide - 1);
              }}
              size={50}
              className="absolute top-[45%] left-[30px] text-black/50 cursor-pointer select-none z-[2] "
            />
            {slide === 1 ? (
              <>
                <p className="text-center ">
                  Con nuestro servicio de telefonía IP te permitimos lograr una
                  comunicación fácil, efectiva y flexible en tu negocio.
                </p>
                <p className="text-3xl pt-24 text-justify">
                  Integramos las mejores herramientas para brindar una mayor
                  productividad.
                </p>
                <p className="text-3xl pt-24 text-justify">
                  La vida es móvil y las empresas cada vez demandan más
                  soluciones que puedan ser ejecutadas desde cualquier
                  dispositivo y en cualquier lugar.
                </p>
                <p className="text-3xl pt-24 text-justify">
                  Telefonía IP la mejor solución para la Transformación Digital
                  de las empresas.{" "}
                </p>
              </>
            ) : slide === 2 ? (
              <>
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
              </>
            ) : slide === 3 ? (
              <>
                <p className=" text-justify pt-24 ">
                  {" "}
                  Telefonía IP la mejor solución para la Transformación Digital
                  de las empresas.
                </p>
                <ul className="list-disc text-2xl text-justify py-10">
                  <li>Conmutador virtual.</li>

                  <li>
                    Flexibilidad, utiliza tus extensiones telefónicas en
                    oficinas, casa o donde quiera que estés etc.
                  </li>

                  <li>
                    Extensiones móviles, configura tu extensión en tus
                    dispositivos móviles.
                  </li>

                  <li>
                    Opera sobre la misma red, los aparatos telefónicos cuentan
                    con 2 puertos de red (puente de conexión).
                  </li>

                  <li>Reduce tu factura telefónica.</li>

                  <li>Calidad en las llamadas.</li>
                  <li>Servicio empresarial.</li>
                  <li>Soporte técnico en línea.</li>
                  <li>Soporte técnico en línea.</li>

                  <br />
                </ul>
              </>
            ) : (
              <>{setSlide(1)} </>
            )}{" "}
            <FaArrowCircleRight
              onClick={() => {
                setSlide(slide + 1);
              }}
              size={50}
              className="absolute top-[45%] right-1/2 text-black/50 cursor-pointer select-none z-[2]"
            />
          </div>
        </div>

        <div className="p-4 bg-white rounded-md grid-cols-1 flex justify-center items-center">
          <Image src={phone} width={500} height={300} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
