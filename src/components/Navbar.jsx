// Läser in CSS som formaterar navigationsmenyn och dess länkar.
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// Navbar är en funktionskomponent utan props; menyns text och länkar är fasta här.
const lankar = [
	{ till: "/", text: "Hem" },
	{ till: "/projekt", text: "Projekt" },
	{ till: "/om-mig", text: "Om mig" },
	{ till: "/kontakt", text: "Kontakt" },
];

function Navbar() {
  // false = menyn är stängd (gäller bara på mobil)
  const [oppen, setOppen] = useState(false);

  // Stäng menyn när man har valt en sida
  function stang() {
    setOppen(false);
  }
	return (
		// nav markerar en navigationsdel så webbläsare och hjälpmedel förstår dess roll.
		<nav className="navbar">
			{/* Logotypen fungerar också som en länk tillbaka till startsidan. */}
			<Link className="logo" to="/">Tech Portfolio</Link>
<button
  className="meny-knapp"
  onClick={() => setOppen(!oppen)}
  aria-expanded={oppen}
  aria-controls="huvudmeny"
  aria-label="Meny"
>
  {oppen ? "✕" : "☰"}
</button>
<div id="huvudmeny" className={oppen ? "lankar oppen" : "lankar"}>

				{/* .map() skapar länkarna från datan; varje unik URL används som React key. */}
				{lankar.map((lank) => (
					<NavLink
						key={lank.till}
						to={lank.till}
						end={lank.till === "/"} // samma som <NavLink to="/" end>Hem</NavLink>
						onClick={stang}
					>
						{lank.text}
					</NavLink>
				))}
			</div>
		</nav>
	);
}

// Gör Navbar tillgänglig för import i exempelvis App.jsx.
export default Navbar;
