import React from "react";
import Image from "next/image";
import grafico1 from "../../public/img/internet.svg";
import grafico2 from "../../public/img/web.svg";
import grafico3 from "../../public/img/people.svg";
const index = () => {
  return (
    <div>
      <section>
        <div className="flex items-center justify-center h-screen  bg-center bg-cover custom-img3">
          <div className="p-5 text-white z-[2] text-center  ">
            {" "}
            <span className="text-5xl ">
              <br /> <strong>Internet Dedicado</strong> <br />
            </span>
            <p className="pt-10 text-3xl">
              Servicio de conexión exclusiva para corporativos y organizaciones
              <br /> cuyos procesos dependen del uso de Internet para sus
              operaciones
            </p>
            <div style={{ marginTop: "300px" }}>
              <Image src={grafico1} width="500" height={300} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-left justify-center h-screen mt-48  bg-center bg-cover custom-img4">
          <div className="p-5 text-white z-[2] text-left mt-48 ">
            {" "}
            <span className="text-5xl "></span>
            <p className="pt-10 text-3xl">SLA: 99.95%</p>
            <p className="pt-10 text-3xl">Velocidad: Desde 5 Mbps hasta 1 Gb</p>
            <p className="pt-10 text-3xl">Instalación hasta 5 días</p>
          </div>
          <div style={{ marginTop: "300px" }}>
            <Image src={grafico2} width="500" height={300} />
          </div>
        </div>
      </section>

      <section>
        {" "}
        <div className="p-5 text-black z-[2] text-center ">
          {" "}
          <span className="text-5xl "></span>
          <p className="pt-10 text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
        <div style={{ marginTop: "300px" }} className='flex items-left justify-center'>
          <Image src={grafico3} width="500" height={300} />
        </div>
        <div className="flex items-left justify-center h-screen   bg-center bg-cover custom-img5">
          <div className="p-5 text-white z-[2] text-center mt-20 ">
            {" "}
            <span className="text-5xl "></span>
            <p className=" text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
