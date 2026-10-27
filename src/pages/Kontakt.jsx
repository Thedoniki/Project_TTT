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
		e.preventDefault();
		setFel("");

		// Trim gör att ett fält med enbart mellanslag också räknas som tomt.
		if (!namn.trim() || !email.trim() || !meddelande.trim()) {
			setFel("Fyll i alla fält.");
			return;
		}

		// Kontrollera e-post först efter att alla obligatoriska värden finns.
		if (!email.trim().includes("@")) {
			setFel("E-postadressen måste innehålla @.");
			return;
		}

		// Tidigare rensades e-post före valideringen: setEmail("");
		// Rensa först när hela formuläret har passerat valideringen.
		setEmail("");
		setMeddelande("");
		setFel("");
		setSkickat(true);
	}

	// role=status låter hjälpmedel meddela att formuläret har skickats.
	if (skickat) {
		return (
			<p className="kontakt-bekräftelse" role="status">
				Tack för ditt meddelande, {namn}!
			</p>
		);
	}

	return (
		<section id="kontakt" className="kontakt">
			{/* Vänster kolumn: text */}
			<div className="kontakt-info">
				<h2>Kontakta mig</h2>
				<p className="kontakt-text">Har du en fråga? Skriv ett meddelande!</p>
			</div>

			{/* Höger kolumn: formuläret */}
			{/* noValidate låter den egna valideringen visa begripliga fel i sidan. */}
			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor="namn">Namn</label>
				<div>
					{/* id kopplar labeln till rätt fält; name och autoComplete förbättrar formulärstöd. */}
					<input
						id="namn"
						name="namn"
						autoComplete="name"
						required
						value={namn}
						onChange={(e) => setNamn(e.target.value)}
						placeholder="Skriv ditt namn"
					/>
				</div>
				<label htmlFor="epost">E-post</label>
				<div>
					<input
						id="epost"
						name="email"
						type="email"
						autoComplete="email"
						inputMode="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Ange email"
					/>
					{/* Tidigare visades varje tecken medan man skrev: <p>Du skriver: {email}</p> */}
				</div>
				<label htmlFor="meddelande">Meddelande</label>
				<div>
					{/* Tidigare var meddelandet en enradig input:
					<input value={meddelande} onChange={(e) => setMeddelande(e.target.value)} />
					*/}
					<textarea
						id="meddelande"
						name="meddelande"
						required
						value={meddelande}
						onChange={(e) => setMeddelande(e.target.value)}
						placeholder="Skriv ditt meddelande"
					/>
				</div>
				{/* role=alert meddelar valideringsfel direkt för skärmläsare. */}
				{fel && <p id="kontakt-fel" role="alert">{fel}</p>}
				<button type="submit">Skicka</button>
			</form>
		</section>
	);
}

export default Kontakt;
