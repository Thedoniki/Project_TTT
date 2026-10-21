import bookstoreImg from "../assets/bookstore.png";
import { useState } from "react";
import "./ProjektBeskrivning.css";

function ProjektBeskrivning() {
	// React state avgör om den längre projekttexten visas.
	const [läsMer, setLäs] = useState(false);

	return (
		<section id="projekt-beskrivning-sida" className="projekt-beskrivning-sida">
			{/* Den gemensamma behållaren samlar bild, beskrivning och knappar. */}
			<div
				id="projekt-beskrivning-innehåll-content-placement"
				className="projekt-beskrivning-innehåll-btn-content-placement"
			>
				{/* Alt-texten beskriver bilden för hjälpmedel och när bilden inte kan visas. */}
				<img
					className="projekt-bild"
					src={bookstoreImg}
					alt="Bild på projekt ikon"
				/>

				<h4>
					I den här applikationen syns flera objektorienterade principer och
					mönster. De används i olika grad — vissa är tydliga, medan andra mest
					finns som en struktur att bygga vidare på.
				</h4>
				<div className="projekt-beskrivning-knappar">
					{/* Klicket växlar state; texten på knappen följer det aktuella läget. */}
					<button
						id="projekt-beskrivning-innehåll-btn"
						className="projekt-beskrivning-innehåll-btn"
						onClick={() => setLäs(!läsMer)}
					>
						{läsMer ? "Visa mindre" : "Visa mer"}
					</button>
					{/* target öppnar GitHub separat; noreferrer skyddar den nya fliken från att styra tillbaka. */}
					<a
						className="projekt-beskrivning-github-btn"
						href="https://github.com/Thedoniki/BookStore/tree/main"
						target="_blank"
						rel="noreferrer"
					>
						Visa projektet på GitHub
					</a>
				</div>
				<div
					id="projekt-beskrivning-innehåll"
					className={`projekt-beskrivning-innehåll${läsMer ? " är-öppet" : ""}`}
				>
					{/* Villkorsrendering gör att den långa texten bara finns på sidan när läget är öppet. */}
					{läsMer && (
						<p>
							SOLID S – Single Responsibility Principle (ett ansvar per klass)
							Ansvaren är uppdelade i lager: BooksController.java hanterar
							HTTP-anrop och förbereder data till vyerna. BookService.java är
							tänkt att hålla tjänste- och affärslogik. BookCrud.java sköter
							databasåtkomsten. Book.java representerar en bok. Gränserna finns
							där, men BookService vidarebefordrar för närvarande mest anrop
							till databasklassen. Det är alltså en tydlig lagerindelning, men
							serviceklassen har ännu inte mycket egen affärslogik. O –
							Open/Closed Principle (öppen för utökning, stängd för ändring)
							IBookCrud.java är ett gränssnitt. En annan klass kan implementera
							databasoperationerna utan att BookService behöver känna till just
							den implementationen. Det underlättar till exempel om man senare
							vill byta datakälla eller använda en testimplementation. Principen
							är dock inte fullständigt bevisad bara för att ett gränssnitt
							finns; den blir värdefull när implementationer faktiskt kan bytas
							eller utökas utan onödiga ändringar i övriga lager. L – Liskov
							Substitution Principle (subtyper ska kunna ersätta sin bastyp) Det
							finns ingen tydlig alternativ implementation av IBookCrud i den
							nuvarande koden, så principen demonstreras inte fullt ut. Men
							serviceklassen använder gränssnittets kontrakt, vilket gör det
							möjligt att ersätta BookCrud med en annan implementation —
							förutsatt att den uppfyller samma beteende, till exempel vad
							Optional.empty() och deleteBook() betyder. I – Interface
							Segregation Principle (små, fokuserade gränssnitt) IBookCrud
							samlar operationer som hör ihop med böcker. Det är rimligt för
							projektets storlek. Gränssnittet är däremot inte uppdelat i mindre
							gränssnitt för läsning, skrivning eller sökning. Det kan bli
							relevant om olika delar av systemet senare bara behöver delar av
							dess funktioner. D – Dependency Inversion Principle (bero på
							abstraktioner) BookService tar emot IBookCrud i konstruktorn i
							stället för att själv skapa en BookCrud. Det minskar kopplingen
							mellan service och databasimplementation och gör det lättare att
							använda mockar i testerna. Spring skapar och kopplar objekten.
							BooksController får också BookService via konstruktorn, men
							beroendet är där till den konkreta serviceklassen. Andra
							objektorienterade principer och mönster Inkapsling: Fälten i Book
							är privata och nås genom metoder som getters och setters. Det
							skyddar åtkomsten till fälten, men objektet är fortfarande ganska
							öppet för ändringar: det har setters för alla värden och
							innehåller för närvarande inte egna regler som validerar dem.
							Abstraktion: IBookCrud beskriver vilka databasoperationer som
							finns utan att beskriva SQL-detaljerna. Servicen kan använda
							operationerna utan att hantera anslutningar eller resultatrader.
							Polymorfism: Eftersom serviceklassen använder gränssnittet
							IBookCrud kan den i princip samarbeta med olika implementationer
							genom samma anropsform. Komposition och beroendeinjektion:
							Controllern består av ett serviceberoende, och servicen av ett
							repositoryberoende. Beroendena skickas in via konstruktorer i
							stället för att klasserna själva skapar dem. MVC och Repository:
							Spring MVC-strukturen skiljer HTTP-kontrollern från vyerna.
							BookCrud fungerar i praktiken som ett repository och samlar
							SQL-åtkomsten på ett ställe. En konkret detalj är att SQL-frågor
							använder parametrar för användarens sökterm. Sorteringskolumnen
							väljs dessutom från en begränsad lista i BookCrud, i stället för
							att ta emot ett godtyckligt kolumnnamn från användaren. Det är
							både en tydlig separation av ansvar och ett sätt att begränsa hur
							indata används.
						</p>
					)}
				</div>
			</div>
		</section>
	);
}

export default ProjektBeskrivning;
