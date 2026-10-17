// Footer.css innehåller utseendet för sidfoten.
import './Footer.css';

// Footer är en komponent utan props. Den skapar själv året utifrån aktuell datum/tid.
function Footer() {
  const år = new Date().getFullYear();   // årtalet just nu, t.ex. 2026

  return (
    // footer är ett semantiskt HTML-element för sidinformation längst ned.
    // id="kontakt" är tänkt att vara målet för länken href="#kontakt" i Navbar.
    <footer className="footer" id="kontakt">
      {/*id-värdet måste matcha länkmålet exakt: href="#kontakt" söker efter id="kontakt". 
      Om de inte matchar hittar webbläsaren inget mål att hoppa till. */}
      <p>Kontakt: donikamehmeti@pm.me</p>
      {/* Klammersyntaxen infogar JavaScript-variabeln år i JSX-texten. */}
      <p>© {år} Donika Mehmeti</p>
      <p>Gjord med React ❤️</p>
    </footer>
  );
}

// Standardexport gör det möjligt för App.jsx att importera komponenten.
export default Footer;