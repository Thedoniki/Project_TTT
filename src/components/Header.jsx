// CSS-filen innehåller regler för klassnamnet header som används nedan.
import './Header.css';

// Destrukturering hämtar namn och titel från props-objektet.
// App skickar exempelvis <Header namn="Niki" titel="Overachever" stad="Helsingborg" />.
// Även om App skickar stad används den inte här eftersom den inte plockas ut eller visas.
function Header({ namn, titel }) {
  return (
    // header är ett semantiskt HTML-element för sidans eller en sektions introduktion.
    <header className="header">
      {/* Värdena som skickades från App skrivs ut som vanlig text i JSX. */}
      <h1>{namn}</h1>
      <p>{titel}</p>
    </header>
  );
}

// Standardexport låter App.jsx importera komponenten som Header.
export default Header;