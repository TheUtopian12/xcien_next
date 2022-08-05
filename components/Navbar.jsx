import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logoB from "../public/xcien_logo_N.png";
import logoW from "../public/xcien_logo.png";
import ModalForm from "./ModalForm";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const Navbar = ({ colores }) => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(colores);
  const [textColor, setTextColor] = useState("white");
  const [logo, setLogo] = useState(logoW);
  const [showModal, setShowModal] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setLogo(logoB);
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setLogo(logoW);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` , fontSize:'16px'}}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            <Image src={logo} width="100" height="55" />
          </h1>
        </Link>

        <ul style={{ color: `${textColor}`, fontSize:'16px' }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Inicio</Link>
          </li>
          <li className="p-1">
            <Menu>
              <MenuHandler>
                <Button variant="text" size="lg" color="grey" style={{ color: `${textColor}`, fontWeight:'normal', textTransform:'capitalize', fontSize:'16px' }}>Servicios</Button>
              </MenuHandler>
              <MenuList>
                <Link href="/ServiciosInternet"><MenuItem>Internet</MenuItem></Link>
                <Link href="/VPN"><MenuItem>VPN</MenuItem></Link>
              <Link href='/Administrados'><MenuItem>Seguridad Administrada</MenuItem></Link>  
                <Link href="/TelefoniaIP"><MenuItem>Telefonia IP</MenuItem></Link>
                <Link href="/DataCenter"><MenuItem>Data Center</MenuItem></Link>
                <Link href="/#"><MenuItem>SDWAN</MenuItem></Link>
                <Link href="/StrongInternet"><MenuItem>Strong Internet</MenuItem></Link>
              </MenuList>
            </Menu>



          </li>
          <li className="p-4">
            <Link href="/#nosotros">Nosotros</Link>
          </li>
          <li className="p-4">
          <Link href="/#">Contacto</Link>
          </li>
          <li className="p-3.5" style={{ cursor: "pointer" }}>
            <Link href="https://odoo.wispi.mx/my/home" target="_parent">
              <div className="flex items-center space-x-4 space-y-[-2]">
                <Image
                  width={30}
                  height={30}
                  className="w-10 h-10 rounded-full"
                  src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"
                  alt=""
                />
                <div
                  className="space-y-1 font-medium"
                  style={{ color: `${textColor}` }}
                >
                  Edwin
                </div>
              </div>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-xl hover:text-gray-500'>
              <Link href='/'>Principal</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-xl hover:text-gray-500'>
            <Link href="/#servicios">Servicios</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-xl hover:text-gray-500'>
            <Link href="/#nosotros">Nosotros</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-xl hover:text-gray-500'>
            Contacto
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
