import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logoB from '../public/xcien_logo_N.png'
import logoW from '../public/xcien_logo.png'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [logo, setLogo] =useState(logoB)

  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            <Image src={logo} width="100" height="55"/>
          </h1>
        </Link>

        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Principal</Link>
          </li>
          <li className="p-4">
            <Link href="/#servicios">Servicios</Link>
          </li>
          <li className="p-4">
            <Link href="/nosotros">Nosotros</Link>
            
          </li>
          <li className="p-4">
            <Link href="/contacto">Contacto</Link>
          </li>
          <li className="p-3.5" style={{cursor:'pointer'}}>
            <Link href="/aisjd">
              <div className="flex items-center space-x-4 space-y-[-2]">
                <Image
                  width={30}
                  height={30}
                  className="w-10 h-10 rounded-full"
                  src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"
                  alt=""
                />
                <div className="space-y-1 font-medium" style={{color:`${textColor}`}}  >
                  <div>Jese Leos</div>
                </div>
              </div>
            </Link>
          </li>
        </ul>

        {/**Mobile */}

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 opacity-75"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Principal</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#servicios">Servicios</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contacto">Contacto</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#"><div className="flex items-center space-x-4 space-y-[-2]">
                <Image
                  width={30}
                  height={30}
                  className="w-10 h-10 rounded-full"
                  src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"
                  alt=""
                />
                <div className="space-y-1 font-medium hover:text-gray-500"   >
                  <div>Jese Leos</div>
                </div>
              </div></Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
