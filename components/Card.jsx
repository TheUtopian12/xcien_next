import React from 'react'
import Link from "next/link";
import style from '../styles/Card.module.css'
const Card = ({titulo, descripcion, imagen, url}) => {
  
  return (
    <div className={style['flip-card']}>
    <div className={style['flip-card-inner']}>
      <div className={style['flip-card-front']}>
        <img src={imagen} alt="Avatar" style={{width:"300px", height:"150px", borderRadius:"25px 25px 0 0"}}/>
        <h2>{titulo}</h2>
      </div>
      <div className={style['flip-card-back']}>
        <br />
        <h2 className='text-bold-200'>{titulo}</h2>
        <br />
        <p>{descripcion}</p>
        <br />
        <Link href={'/ServiciosInternet'} ><a className='text-blue-700'>Más Informacion</a></Link>
      </div>
    </div>
  </div>
  )
}

export default Card