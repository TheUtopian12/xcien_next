import React, { useState } from "react";
import Image from "next/image";
import Navbar2 from "../../components/Navbar2";
import phone from "../../public/img/server.svg";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Footer from "../../components/Footer";
const DataCenter = () => {
  const [slide, setSlide] = useState(3);
  return (
    <>
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto pt-16">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Data Center
                </h1>
               
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
        
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-0">
        <div className="p-10 flex justify-center h-full lg:h-screen bg-relative  bg-cover custom-img">
          <div className="text-center text-4xl text-white font-bold pt-10">
           
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
                <p className="text-center ">CO-UBICACIÓN</p>
                <p className="text-3xl pt-24 text-justify">
                  La co-ubicación en Rack o en Torre incluye: el
                  acondicionamiento, medios técnicos, seguridad, monitoreo y
                  energía, para que el operador pueda realizar interconexión a
                  la red o instalaciones del arrendador.
                </p>
                <p className="text-3xl pt-24 text-justify">
                  Ofrecemos: acondicionamiento, medios técnicos, seguridad,
                  monitoreo, soporte y una atención personalizada.
                </p>
                <p className="text-3xl pt-24 text-justify">
                  Ubicaciones: Monterrey, Guadalajara, *Saltillo y Querétaro.
                </p>
              </>
            ) : slide === 2 ? (
              <>
                <p className=" text-justify pt-24 ">Beneficios</p>
                <ul className="list-disc text-2xl text-justify py-10">
                  <li>Alojamiento seguro</li>
                  <br />
                  <li>Reducción de costos</li>
                  <br />
                  <li>Soporte y operación especializado</li>
                  <br />
                  <li>Ambientación óptima</li>
                  <br />
                  <li>Mayor flexibilidad y escalabilidad</li>
                  <br />
                  <li>Seguridad</li>

                  <br />
                </ul>
              </>
            ) : slide === 3 ? (
              <>
                <p className=" text-justify pt-24 ">
                  {" "}
                  Despreocúpate por:
                </p>
                <ul className="list-disc text-2xl text-justify py-10">
                  <li>Vigilar que los servidores estén funcionando correctamente.</li>

                  <li>
                  Todo el proceso de energía, que te mantiene en línea.
                  </li>

                  <li>
                  El proceso de seguridad, tanto lógica como física.
                  </li>


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

export default DataCenter;
