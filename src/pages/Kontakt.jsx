import "./Kontakt.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
	const navigate = useNavigate();
	const [skickar, setSkickar] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setFel("");

		if (!namn.trim() || !email.trim() || !meddelande.trim()) {
			setFel("Fyll i alla fält.");
			return;
		}

		if (!email.trim().includes("@")) {
			setFel("E-postadressen ser inte rätt ut.");
			return;
		}

		setSkickar(true);

		try {
			const svar = await fetch("https://formspree.io/f/mpppdkbr", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({ namn, email, meddelande }),
			});

			if (svar.ok) {
				setSkickat(true);
			} else {
				setFel("Något gick fel. Försök igen om en stund.");
			}
		} catch {
			setFel("Kunde inte skicka. Kolla din internetanslutning.");
		} finally {
			setSkickar(false);
		}
	}

	if (skickat) {
		return (
			<p className="kontakt-bekräftelse" role="status">
				Tack för ditt meddelande, {namn}!
			</p>
		);
	}

	return (
		<section id="kontakt" className="kontakt">
			<button type="button" onClick={() => navigate(-1)}>
				Gå tillbaka
			</button>
			<button type="button" onClick={() => navigate("/")}>
				Till startsidan
			</button>
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
				<button type="submit" disabled={skickar}>
					{skickar ? "Skickar..." : "Skicka"}
				</button>
			</form>
		</section>
	);
}

export default Kontakt;
