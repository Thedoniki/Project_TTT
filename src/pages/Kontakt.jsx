import "./Kontakt.css";
import { useState } from "react";

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

	function handleSubmit(e) {
		e.preventDefault(); // stoppa sidomladdning
		console.log(namn, email, meddelande);
		setSkickat(true); // visa tackmeddelande
		setEmail(""); // rensa fälten
		setMeddelande("");
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
				{/* <input type="text" id="namn" name="namn" placeholder="Ditt namn" /> */}

				<div>
					<input
						value={namn}
						onChange={(e) => setNamn(e.target.value)}
						placeholder="Skriv ditt namn"
					/>
					{/* <p>Du skriver: {namn}</p> */}
				</div>

				<label htmlFor="epost">E-post</label>
				{/** label behövs för skärmläsaren för kontrollerad input. */}
				{/* <input
					type="email"
					id="epost"
					name="epost"
					placeholder="namn@exempel.se"
				/> */}

				<div>
					{" "}
					{/** Detta kallas en kontollerad input */}
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Ange email"
					/>
					{/* <p>Du skriver: {email}</p> */}
				</div>

				<label htmlFor="meddelande">Meddelande</label>
				{/* <textarea id="meddelande" name="meddelande" rows="5" /> */}

				<div>
					<input
						value={meddelande}
						onChange={(e) => setMeddelande(e.target.value)}
						placeholder="Skriv ditt meddelande"
					/>
					{/* <p>Du skriver: {meddelande}</p> */}
				</div>

				<button type="submit">Skicka</button>
			</form>
		</section>
	);
}

export default Kontakt;
