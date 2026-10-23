import "./Kontakt.css";
import { useState } from "react";

// Kommentarer och info: /Users/donika/.codex-notes/kontakt.jsx-info.md

{
	/* Kontakt är en funktionskomponent som renderar kontaktformuläret. Denna komponent används i App.jsx för att visa kontaktsektionen på sidan. 
    
htmlFor kopplar etiketten till fältet (i HTML heter det for). Klicka på texten "Namn" – hamnar markören i fältet?

Styla fälten: padding, border, border-radius och font: inherit;
Lägg till :focus-styling och en hover-effekt på knappen*/
}
function Kontakt() {
	const [namn, setNamn] = useState("");
	const [email, setEmail] = useState("");
	const [meddelande, setMeddelande] = useState("");
	const [skickat, setSkickat] = useState(false);
	const [fel, setFel] = useState("");

	function handleSubmit(e) {
		e.preventDefault(); // stoppa sidomladdning
		console.log(namn, email, meddelande);

		// Kontrollera att fälten inte är tomma innan submit
		if (!namn.trim() || !email.trim() || !meddelande.trim()) {
			setFel("Fyll i alla fält.");
			return;
		}

		setEmail(""); // rensa fälten
		//Kontrollera att email innehåller @
		if (!email.includes("@")) {
			setFel("E-postadressen måste innehålla @.");
			return;
		}
		setMeddelande("");
		setFel("");
		setSkickat(true); // visa tackmeddelande
	}

	if (skickat) return <p>Tack för ditt meddelande, {namn}!</p>;

	return (
		<section id="kontakt" className="kontakt">
			{/* Vänster kolumn: text */}
			<div className="kontakt-info">
				<h2>Kontakta mig</h2>
				<p className="kontakt-text">Har du en fråga? Skriv ett meddelande!</p>
			</div>

			{/* Höger kolumn: formuläret */}
			<form onSubmit={handleSubmit}>
				<label htmlFor="namn">Namn</label>
				<div>
					<input
						value={namn}
						onChange={(e) => setNamn(e.target.value)}
						placeholder="Skriv ditt namn"
					/>
				</div>
				<label htmlFor="epost">E-post</label>
				<div>
					{" "}
					{/** Detta kallas en kontollerad input */}
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Ange email"
					/>
					<p>Du skriver: {email}</p>
				</div>
				<label htmlFor="meddelande">Meddelande</label>
				<div>
					<input
						value={meddelande}
						onChange={(e) => setMeddelande(e.target.value)}
						placeholder="Skriv ditt meddelande"
					/>
				</div>
				{/* Visa ett felmeddelande om validering misslyckas */}
				{fel && <p>{fel}</p>}
				{/* // Rätt: */}
				<button type="submit">Skicka</button>{" "}
			</form>
		</section>
	);
}

export default Kontakt;
