import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Image from "next/image";

import logoB from "../public/xcien_logo_N.png";

export default function Opiniones() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="mt-40 mb-28">
      <h1 className="flex items-center justify-center text-5xl mb-28 pt-14 text-black font-semibold">
        Casos de Exito
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="p-4  rounded-md flex items-center justify-center">
          <Accordion
            className="ml-2 pl-2 pr-4"
            open={open === 1}
            onClick={() => handleOpen(1)}
            style={{ width: "500px", boxShadow: "10px 10px 5px #009B3E" }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              XCIEN - Edwin{" "}
            </AccordionHeader>
            <AccordionBody>
              <div className="ml-2 pl-2">
                <Image src={logoB} width="100" height="50" />
              </div>
              <div className="ml-2 pl-2">
                {" "}
                <h2>Una plataforma real, agil y sencilla</h2>
                <h3>Edwin Castruita</h3>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          <Accordion
            className="ml-2 pl-2 pr-4"
            open={open === 2}
            onClick={() => handleOpen(2)}
            style={{ width: "500px", boxShadow: "10px 10px 5px #009B3E" }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              XCIEN - Edwin{" "}
            </AccordionHeader>
            <AccordionBody>
              <div className="ml-2 pl-2">
                <Image src={logoB} width="100" height="50" />
              </div>
              <div className="ml-2 pl-2">
                {" "}
                <h2>Una plataforma real, agil y sencilla</h2>
                <h3>Edwin Castruita</h3>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          <Accordion
            className="ml-2 pl-2 pr-4"
            open={open === 3}
            onClick={() => handleOpen(3)}
            style={{ width: "500px", boxShadow: "10px 10px 5px #009B3E" }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              XCIEN - Edwin{" "}
            </AccordionHeader>
            <AccordionBody>
              <div className="ml-2 pl-2">
                <Image src={logoB} width="100" height="50" />
              </div>
              <div className="ml-2 pl-2">
                {" "}
                <h2>Una plataforma real, agil y sencilla</h2>
                <h3>Edwin Castruita</h3>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className="p-4  rounded-md flex items-center justify-center">
          <Accordion
            className="ml-2 pl-2 pr-4"
            open={open === 4}
            onClick={() => handleOpen(4)}
            style={{ width: "500px", boxShadow: "10px 10px 5px #009B3E" }}
            icon={<BsFillArrowDownCircleFill />}
          >
            <AccordionHeader className="ml-2 pl-2 pr-4">
              XCIEN - Edwin{" "}
            </AccordionHeader>
            <AccordionBody>
              <div className="ml-2 pl-2">
                <Image src={logoB} width="100" height="50" />
              </div>
              <div className="ml-2 pl-2">
                {" "}
                <h2>Una plataforma real, agil y sencilla</h2>
                <h3>Edwin Castruita</h3>
              </div>
            </AccordionBody>
          </Accordion>
        </div>

        
      </div>
    </div>
  );
}
