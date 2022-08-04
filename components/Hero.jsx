import React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NET from "vanta/dist/vanta.net.min";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          minHeight: 200.0,
          minWidth: 390.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x55ff3f,
          backgroundColor: 0x111125,
          maxDistance:20
          , spacing:20
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      className="flex items-center justify-center h-screen mb-12 "
      ref={vantaRef}
    >
      <div className=" text-white z-[2] mt-[-10rem] text-center pt-16">
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
          <button className="px-8 py-2 border ">Ver Servicios</button>
        </Link>
      </div>
      {/* Overlay 
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
      </div>*/}
    </div>
  );
};

export default Hero;
