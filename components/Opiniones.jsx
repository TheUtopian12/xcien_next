import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Image from "next/image";
import logoB from "../public/xcien_logo_N.png";
import cemex from "../public/img/logos/cemex-logo.webp";
import cfe from "../public/img/logos/Logo_neutral_de_la_Comisión_Federal_de_Electricidad.svg.png";
import maiz from "../public/img/logos/maizmierlogo.png";
import viva from "../public/img/logos/Nuevo_vivaaerobus_logotipo_original.jpg";
import sigma from "../public/img/logos/Sigma_Alimentos_logotipo.png";
import uanl from "../public/img/logos/Uanl.logo_-e1501528621503.png";

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
              boxShadow: "5px 5px 5px #009B3E",
              borderRadius: "0px",
            }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              <div className="flex flex-col items-start w-full m-auto sm:flex-row">
                <div className="flex mx-auto sm:mr-10 sm:m-0">
                  <div className="items-center justify-center w-10 h-20 m-auto mr-4 sm:w-32 sm:h-20">
                    <img
                      alt="profil"
                      src="https://xcien.com/img/xcien-logo.svg"
                      className="object-fit  mx-auto sm:w-32 sm:h-20"
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-4 mx-auto my-auto sm:pt-0 sm:mx-0">
                  <div className="flex flex-col mx-auto sm:flex-row sm:mx-0 ">
                    <h2 className="flex text-xl font-light text-gray-900 sm:text-xl">
                      Andrea Mitz
                    </h2>
                    <div className="flex"></div>
                  </div>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full p-5">
                <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">
                  Andrea Mitz
                </h1>
                <p className="text-sm text-gray-500 md:text-base">XCIEN</p>
                <p className="text-sm text-gray-800 md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, quam?
                </p>
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
              boxShadow: "5px 5px 5px #009B3E",
              borderRadius: "0px",
            }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              <div className="flex flex-col items-start w-full m-auto sm:flex-row">
                <div className="flex mx-auto sm:mr-10 sm:m-0">
                  <div className="items-center justify-center w-10 h-20 m-auto mr-4 sm:w-32 sm:h-20">
                    <img
                      alt="profil"
                      src="https://xcien.com/img/xcien-logo.svg"
                      className="object-fit  mx-auto sm:w-32 sm:h-20"
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-4 mx-auto my-auto sm:pt-0 sm:mx-0">
                  <div className="flex flex-col mx-auto sm:flex-row sm:mx-0 ">
                    <h2 className="flex text-xl font-light text-gray-900 sm:text-xl">
                      Edwin Castruita
                    </h2>
                    <div className="flex"></div>
                  </div>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full p-5">
                <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">
                  Edwin Castruita
                </h1>
                <p className="text-sm text-gray-500 md:text-base">XCIEN</p>
                <p className="text-sm text-gray-800 md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, quam?
                </p>
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
              boxShadow: "5px 5px 5px #009B3E",
              borderRadius: "0px",
            }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              <div className="flex flex-col items-start w-full m-auto sm:flex-row">
                <div className="flex mx-auto sm:mr-10 sm:m-0">
                  <div className="items-center justify-center w-10 h-20 m-auto mr-4 sm:w-32 sm:h-20">
                    <img
                      alt="profil"
                      src="https://xcien.com/img/xcien-logo.svg"
                      className="object-fit  mx-auto sm:w-32 sm:h-20"
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-4 mx-auto my-auto sm:pt-0 sm:mx-0">
                  <div className="flex flex-col mx-auto sm:flex-row sm:mx-0 ">
                    <h2 className="flex text-xl font-light text-gray-900 sm:text-xl">
                    Antonio Rodríguez
                    </h2>
                    <div className="flex"></div>
                  </div>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="w-full p-5">
                <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">
                Antonio Rodríguez
                </h1>
                <p className="text-sm text-gray-500 md:text-base">XCIEN</p>
                <p className="text-sm text-gray-800 md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, quam?
                </p>
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
