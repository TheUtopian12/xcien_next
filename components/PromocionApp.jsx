import React from "react";
import Image from "next/image";
import xcienApp from "../public/img/XCIEN APP.png";

const PromocionApp = () => {
  return (
    <div className="grid text-center h-full w-full bg-fixed bg-cover custom-img10  mb-10">
      <h1 className="pt-10 text-3xl text-white font-semibold"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 lg:gap-8 p-4">
        <div className="flex items-center justify-end">
          <Image src={xcienApp} />
        </div>

        <div className="text-white text-2xl text-left pl-10 font-semibold">
          <p className=" mt-36">
            Descarga nuestra <span className="text-green-400 font-extrabold"> App Xcien</span>{" "}
          </p>{" "}
          <br />
          <p>Administra tus Facturas</p>
          <br />
          <p>Contacta a soporte</p> <br />
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>{" "}
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>{" "}
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>{" "}
          <br />
          <div className="grid grid-cols-2 ">
            <div>
              <button
                type="button"
                className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  style={{ fill: "#000000" }}
                >
                  <path
                    fill="#ffff"
                    d="M40.084,32.613c-0.848,1.835-1.254,2.655-2.342,4.274c-1.521,2.264-3.67,5.089-6.326,5.109c-2.361,0.018-2.971-1.507-6.176-1.482c-3.204,0.016-3.872,1.51-6.237,1.484c-2.654-0.022-4.688-2.568-6.21-4.826c-4.259-6.34-4.707-13.768-2.076-17.721c1.861-2.803,4.807-4.449,7.572-4.449c2.817,0,4.588,1.514,6.916,1.514c2.262,0,3.638-1.517,6.896-1.517c2.464,0,5.07,1.313,6.931,3.575C32.942,21.836,33.931,30.337,40.084,32.613z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M30.046,12.072c1.269-1.577,2.232-3.804,1.882-6.072c-2.069,0.138-4.491,1.418-5.905,3.075c-1.282,1.51-2.345,3.752-1.931,5.922C26.351,15.066,28.689,13.764,30.046,12.072z"
                  ></path>
                  <path
                    fill="green"
                    d="M36.736,20.421C28,30.001,20,21.001,9.228,27.842c0.375,3.027,1.53,6.303,3.565,9.331c1.521,2.258,3.556,4.804,6.21,4.826c2.365,0.025,3.033-1.469,6.237-1.484c3.205-0.024,3.814,1.5,6.176,1.482c2.656-0.021,4.805-2.846,6.326-5.109c1.088-1.619,1.494-2.439,2.342-4.274C34.878,30.688,33.389,24.314,36.736,20.421z"
                  ></path>
                </svg>
                Apple Store
              </button>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  style={{ fill: "#000000" }}
                >
                  <path
                    fill="#4db6ac"
                    d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"
                  ></path>
                  <path
                    fill="#dce775"
                    d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"
                  ></path>
                  <path
                    fill="#d32f2f"
                    d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"
                  ></path>
                  <path
                    fill="#fbc02d"
                    d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"
                  ></path>
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromocionApp;
