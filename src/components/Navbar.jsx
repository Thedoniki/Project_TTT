// Läser in CSS som formaterar navigationsmenyn och dess länkar.
import './Navbar.css';
import { Link } from 'react-router-dom'

// Navbar är en funktionskomponent utan props; menyns text och länkar är fasta här.
const lankar = [
  { till: "/", text: "Hem" },
  { till: "/#projekt", text: "Projekt" },
  { till: "/om-mig", text: "Om mig" },
  { till: "/kontakt", text: "Kontakt" },
];

function Navbar() {
  return (
    // nav markerar en navigationsdel så webbläsare och hjälpmedel förstår dess roll.
    <nav className="navbar">
      {/* span grupperar logotyptexten utan att skapa en egen blockrad. */}
      <span className="logo">Donika</span>
      <div className="lankar">
        {/* Tidigare skrevs länkarna var för sig:
        <a href="/">Hem</a>
        <a href="/#projekt">Projekt</a>
        <Link to="/om-mig">Om mig</Link>
        <Link to="/kontakt">Kontakt</Link>
        */}
        {/* .map() skapar länkarna från datan; varje unik URL används som React key. */}
        {lankar.map((lank) => (
          <Link key={lank.till} to={lank.till}>
            {lank.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}

// Gör Navbar tillgänglig för import i exempelvis App.jsx.
export default Navbar;