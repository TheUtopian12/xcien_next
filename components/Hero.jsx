
import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className="p-5 text-white z-[2] text-center  ">
        <span className="text-5xl ">
          Proveedor de servicios de <br /> <strong>TELECOMUNICACIONES</strong>  <br /> para empresas
        </span>
        <p className="pt-10 text-3xl">Integramos soluciones de conectividad con alta disponibilidad y seguridad.</p>
        <p className="pt-10 pb-5 text-3xl">¿Te gustaría saber más?
        </p>
       
        <Link href={"/#servicios"}><button className="px-8 py-2 border text-xl"> Ver Servicios </button></Link>
      </div>
    </div>
  );
};

export default Hero;
