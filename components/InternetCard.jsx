import style from "../styles/InternetCards.module.scss";
export default function InternetCard({ titulo, url }) {
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
        <p>
          {" "}
          Servicio de conexión exclusiva para corporativos y organizaciones
          cuyos procesos dependen del uso de Internet para sus operaciones
        </p>
        <p>
          Dedicado: enlace directo 1 a 1 Simétrico: misma velocidad de subida y
          bajada
        </p>
        <p>SLA: 99.95%</p>

        <p>Velocidad: Desde 5 Mbps hasta 1 Gb</p>

        <p>Instalación hasta 5 días</p>

        <p className={style["read-more"]}>
          <a href="#">Contacto</a>
        </p>
      </div>
    </div>
  );
}
