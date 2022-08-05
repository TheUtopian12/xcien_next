import React from "react";
import Link from "next/link";
import Footer from '../../components/Footer'
const StrongInternet = () => {
  return (
    <div>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto pt-16">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Strong Internet
                </h1>
                <p className="mt-4 text-lg text-blueGray-200 text-white">
                  ¡Dos es mejor que uno! Sumamos dos servicios de internet al
                  mismo tiempo, mientras monitoreamos tu servicio 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
        
        </div>
      </div>

      <section className="pb-20 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Disponibilidad</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Ser parte de la transformación digital, ¡ahora es más fácil!
                    Optimiza tus recursos tecnológicos y obtén una alta
                    disponibilidad a bajo costo.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Fortalecemos tu conexión a internet
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Sabemos lo importante que es mantenerte conectado, sobre
                    todo en estos momentos cuando el trabajo colaborativo y en
                    línea es parte de nuestro día a día. Enviamos el equipo a
                    toda la República Mexicana que cuente con una conexión a
                    internet.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-light-green-700">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">La mejor opción</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    ¿Cuánto te cuesta la indisponibilidad de internet? ¿La falla
                    del servicio de internet afecta tu facturación? ¿Los
                    asesores comerciales no pueden registrar sus ventas en
                    línea?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Monitoreo de tu servicio 24/7
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blue-grey-600">
                Nos encargamos de monitorear el desempeño de tus servicios de
                internet, sin importar de que compañía son.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blue-grey-600">
                Te apoyamos con nuestros expertos técnicos llamando al centro de
                atención.
              </p>
              <Link href="/">
                <a href="#pablo" className="font-bold text-blue-grey-700 mt-8">
                  Cotizar
                </a>
              </Link>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
       

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
               
                <h3 className="text-3xl font-semibold">
                  Suma los anchos de banda de tus servicios de internet
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Mejora el resultado de tu conexión a internet con dos enlaces,
                  sin importar el tipo de tecnología que utilice cada uno.
                  Olvídate de las pérdidas generadas por la indisponibilidad de
                  Internet.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Unimos tus servicios de internet
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Conmutación inmediata entre enlaces
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">Trabajo remoto</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default StrongInternet;
