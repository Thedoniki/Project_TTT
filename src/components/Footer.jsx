// Footer.css innehåller utseendet för sidfoten.
import './Footer.css';
import { Link } from 'react-router-dom'


// Footer är en komponent utan props. Den skapar själv året utifrån aktuell datum/tid.
function Footer() {
  const år = new Date().getFullYear();   // årtalet just nu, t.ex. 2026

  return (
    // Footer-id:t togs bort eftersom kontaktsektionen har samma id på kontaktsidan.
    // Tidigare: <footer className="footer" id="kontakt">
    <footer className="footer">

      <ul className="om-mig-listaa">
        {/* Hem var tidigare en vanlig <a href="/">Hem</a>-länk. */}
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/om-mig"> Om mig</Link></li>
        <li><Link to="/kontakt"> Kontakt</Link></li>      </ul>     

      {/* mailto gör e-postadressen klickbar och öppnar användarens e-postprogram. */}
      <p>Kontakt: <a href="mailto:donikamehmeti@pm.me">donikamehmeti@pm.me</a></p>
      {/* Klammersyntaxen infogar JavaScript-variabeln år i JSX-texten. */}
      <p>© {år} Donika Mehmeti</p>
      <p>Gjord med React ❤️</p>

    </footer>
  );
}

// Standardexport gör det möjligt för App.jsx att importera komponenten.
export default Footer;