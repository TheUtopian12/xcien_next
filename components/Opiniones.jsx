import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Image from "next/image";
import logoB from "../public/xcien_logo_N.png";
import cemex from '../public/img/logos/cemex-logo.webp'
import cfe from '../public/img/logos/Logo_neutral_de_la_Comisión_Federal_de_Electricidad.svg.png'
import maiz from '../public/img/logos/maizmierlogo.png'
import viva from '../public/img/logos/Nuevo_vivaaerobus_logotipo_original.jpg'
import sigma from '../public/img/logos/Sigma_Alimentos_logotipo.png'
import uanl from '../public/img/logos/Uanl.logo_-e1501528621503.png'


export default function Opiniones() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="mt-40 mb-28">
      <h1 className="flex items-center justify-center text-5xl mb-28 pt-14 text-black font-semibold">
      Casos de Éxito
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="p-4  rounded-md flex items-center justify-center">
          <Accordion
            className="ml-2 pl-2 pr-4"
            open={open === 4}
            onClick={() => handleOpen(4)}
            style={{
              width: "500px",
              boxShadow: "1px 1px 5px #009B3E",
              borderRadius: "5px",
            }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              XCIEN - Edwin{" "}
            </AccordionHeader>
            <AccordionBody>
              <div className="p-0  rounded-md flex items-center justify-center">
                <div className="w-full  p-0">
                  <div className="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border ">
                    <img
                      className="block h-auto w-full lg:w-48 flex-none bg-cover"
                      src={"https://xcien.com/img/xcien-logo.svg"}
                    />
                    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                      <div className="text-black font-bold text-xl mb-2 leading-tight">
                        Una plataforma real, agil y sencilla
                      </div>
                      <p className="text-grey-darker text-base">
                        Edwin Castruita
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>

        <div className="p-4  rounded-md flex items-center justify-center">
          <Accordion
            className="ml-2 pl-2 pr-4"
            open={open === 1}
            onClick={() => handleOpen(1)}
            style={{
              width: "500px",
              boxShadow: "1px 1px 5px #009B3E",
              borderRadius: "5px",
            }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              XCIEN - Edwin{" "}
            </AccordionHeader>
            <AccordionBody>
              <div className="p-0  rounded-md flex items-center justify-center">
                <div className="w-full  p-0">
                  <div className="flex flex-col lg:flex-row-reverse rounded-xl overflow-hidden h-auto lg:h-32 border bg-green-300">
                    <img
                      className="block h-auto w-full lg:w-48 flex-none bg-cover"
                      src={"https://xcien.com/img/xcien-logo.svg"}
                    />
                    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                      <div className="text-black font-bold text-xl mb-2 leading-tight">
                        Una plataforma real, agil y sencilla
                      </div>
                      <p className="text-grey-darker text-base">
                        Edwin Castruita
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          <Accordion
            className="ml-2 pl-2 pr-4"
            open={open === 3}
            onClick={() => handleOpen(3)}
            style={{
              width: "500px",
              boxShadow: "1px 1px 5px #009B3E",
              borderRadius: "5px",
            }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              XCIEN - Edwin{" "}
            </AccordionHeader>
            <AccordionBody>
              <div className="p-0  rounded-md flex items-center justify-center">
                <div className="w-full  p-0">
                  <div className="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border ">
                    <img
                      className="block h-auto w-full lg:w-48 flex-none bg-cover"
                      src={"https://xcien.com/img/xcien-logo.svg"}
                    />
                    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                      <div className="text-black font-bold text-xl mb-2 leading-tight">
                        Una plataforma real, agil y sencilla
                      </div>
                      <p className="text-grey-darker text-base">
                        Edwin Castruita
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          <Accordion
            className="ml-2 pl-2 pr-4"
            open={open === 2}
            onClick={() => handleOpen(2)}
            style={{
              width: "500px",
              boxShadow: "1px 1px 5px #009B3E",
              borderRadius: "5px",
            }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              XCIEN - Edwin{" "}
            </AccordionHeader>
            <AccordionBody>
              <div className="p-0  rounded-md flex items-center justify-center">
                <div className="w-full  p-0">
                  <div className="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border ">
                    <img
                      className="block h-auto w-full lg:w-48 flex-none bg-cover"
                      src={"https://xcien.com/img/xcien-logo.svg"}
                    />
                    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                      <div className="text-black font-bold text-xl mb-2 leading-tight">
                        Una plataforma real, agil y sencilla
                      </div>
                      <p className="text-grey-darker text-base">
                        Edwin Castruita
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <br />
      <hr />

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-8">
        <div className="p-4  rounded-md flex items-center justify-center">
          {""}
          <Image src={cemex} width="100" height="50"></Image>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          {" "}
          <Image src={cfe} width="100" height="50"></Image>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          {" "}
          <Image src={maiz} width="100" height="50"></Image>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          {" "}
          <Image src={viva} width="100" height="50"></Image>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          {" "}
          <Image src={sigma} width="100" height="50"></Image>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          {" "}
          <Image src={uanl} width="100" height="50"></Image>
        </div>
      </div>
    </div>
  );
}
