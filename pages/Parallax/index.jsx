import React from 'react'
import Image from 'next/image'
import style from '../../styles/Parallax.module.css'
import mountain from './Mountain.png'
import trees from './trees.png'
const index = () => {
  return (
    <div className={style.wrapper}>
    <header className={style.header}>
      <Image src={mountain} className={style.background}/>
      <Image src={trees} className={style.foreground}/>
      <h1 className={style.title}>Welcome!</h1>
    </header>
  </div>
  )
}

export default index