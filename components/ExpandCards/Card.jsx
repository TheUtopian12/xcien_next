import React, { useState, useEffect } from "react";
import style from "../../styles/ExpandCard.module.css";
import Image from "next/image";
export const Card = (props) => {
  const { data } = props;
  const [datos, setDatos] = useState(data);
  const [api, setApi] = useState([]);
  const onCardClick = (id) => {
    const newState = [...datos];

    newState.map((item) =>
      item.id === id ? (item.active = "active") : (item.active = "")
    );
    setDatos(newState);
  };

  useEffect(() => {
    const consultarApi = async () => {
      const url = "http://localhost:1337/banners";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
      setApi(resultado);
    };
    consultarApi();
  }, []);

  console.log(api);
  return (
    <>
      {api.map((card) => (
        <div key={card.id} style={{ backgroundImage: `url(${card.url})` }} className='m-2'>
          <Image src={card.imagen.url} width={1000} height={500} />
        </div>
      ))}
    </>
  );
};
