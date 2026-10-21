import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import bild11 from "../assets/bild1.png";
import bild22 from "../assets/bild2.png";
import bookStoreImg from "../assets/bookstore.png";

function Projekt() {
	return (
		<section className="projekt" id="projekt">
			<h2>Mina projekt</h2>

			<div className="projekt-lista">
				<ProjektKort
					titel="Min portfolio GitHub startsida"
					text="Sidan du tittar på nu. Byggd med React och CSS."
					/**Varför ligger bildimporterna i Projekt.jsx och inte i ProjektKort.jsx? Kortet tar bara emot bild som en prop och visar den. Det är Projekt som bestämmer vilken bild varje kort får – därför används bilderna där. */

					bild={bild11}
					lank="https://github.com/Thedoniki/"
				/>
				<ProjektKort
					titel="GitHub repositories"
					text="Kommer snart."
					bild={bild22}
					lank="https://github.com/Thedoniki?tab=repositories"
				/>
				<ProjektKort
					titel="BookStore"
					text="En webbaserad bokhandel där man kan bläddra bland böcker, se detaljer och lägga till, redigera eller ta bort böcker. Applikationen är byggd med Spring Boot, Mustache-mallar och en MySQL-databas. I den här applikationen syns flera objektorienterade principer och mönster. De används i olika grad — vissa är tydliga, medan andra mest finns som en struktur att bygga vidare på. I den här applikationen syns flera objektorienterade principer och mönster. De används i olika grad — vissa är tydliga, medan andra mest finns som en struktur att bygga vidare på."
					bild={bookStoreImg}
					lank="/projekt-beskrivning-sida"
          /* lank="https://github.com/Thedoniki/BookStore" */
				/>
			</div>
		</section>
	);
}

export default Projekt;
