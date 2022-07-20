import style from '../styles/InternetCards.module.scss'
export default function InternetCard({titulo, url}) {
  return (
    
<div className={style['blog-card']}>
    <div className={style.meta}>
      <div className={style.photo} style={{backgroundImage:`url(${url})`}}></div>
      
    </div>
    <div className={style.description}>
      <h1>Learning to Code</h1>
      <h2>{titulo}</h2>
      <p> s! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className={style['read-more']}>
        <a href="#">Contacto</a>
      </p>
    </div>
  </div>
  );
}
