import { Link, useNavigate } from "react-router-dom";
import "./EjHittad.css";

function EjHittad() {
  const navigate = useNavigate();

  return (
    <section className="ej-hittad">
      <p className="ej-hittad-kod">404</p>
      <h1>Sidan finns inte</h1>
      <p>Adressen kan vara felstavad, eller så har sidan flyttats.</p>

      <div className="ej-hittad-knappar">
        <Link className="hero-knapp" to="/">Till startsidan</Link>
        <button onClick={() => navigate(-1)}>Gå tillbaka</button>
      </div>
    </section>
  );
}

export default EjHittad;