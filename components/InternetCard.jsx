import style from "../styles/InternetCards.module.scss";
export default function InternetCard({ titulo, url, p1, p2, p3 ,p4 ,p5 }) {
  return (
    <div className={style["blog-card"]}>
      <div className={style.meta}>
        <div
          className={style.photo}
          style={{ backgroundImage: `url(${url})` }}
        ></div>
      </div>
      <div
        className={`${style.description} justify-center text-center text-xs  `}
      >
        <h2>{titulo}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>

        <p>{p5}</p>

        <p className={style["read-more"]}>
          <a href="#">Mas Informacion</a>
        </p>
      </div>
    </div>
  );
}
