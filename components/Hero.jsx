import React from "react";
import Link from "next/link";
const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className=" text-white z-[2] mt-[-10rem] text-center">
        <h2 className="text-3xl font-normal">Proveedor de servicios de</h2>
        <h2 className="text-3xl font-bold">TELECOMUNICACIONES</h2>
        <h2 className="text-3xl font-normal">para empresas</h2>
        <br />
        <p className="py-5 text-2xl">
          Integramos soluciones de conectividad con alta disponibilidad y
          seguridad.
        </p>
        <br />
        <p className="py-5 text-2xl">¿Te gustaría saber más?</p>

        <Link href="/#servicios">
          <button className="px-8 py-2 border">Ver Servicios</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
