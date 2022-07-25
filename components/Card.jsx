import React from 'react'
import Link from "next/link";
import style from '../styles/Card.module.css'
import {BiArrowToBottom} from 'react-icons/bi'
import { FiChevronDown } from "react-icons/fi";
import 'animate.css';
const Card = ({titulo, descripcion, imagen, url}) => {
  
  return (
    <div className={style['flip-card']}>
    <div className={style['flip-card-inner']}>
      <div className={style['flip-card-front']}>
        <img src={imagen} alt="Avatar" style={{width:"300px", height:"150px", borderRadius:"25px 25px 0 0"}}/>
        <h2>{titulo}</h2>
        <div className='flex items-center justify-center animate__animated animate__heartBeat animate__infinite	infinite'><FiChevronDown /></div>
        
        
      </div>
      <div className={style['flip-card-back']}>
        <br />
        <h2 className='text-bold-200'>{titulo}</h2>
        <br />
        <p>{descripcion}</p>
        <br />
        <Link  href={{
            pathname: url
          }} ><a className='text-blue-700'>Más Informacion</a></Link>
        <br />
      
      </div>
    </div>
  </div>
  )
}

export default Card