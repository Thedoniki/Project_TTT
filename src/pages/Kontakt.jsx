import "./Kontakt.css";


{/* Kontakt är en funktionskomponent som renderar kontaktformuläret. Denna komponent används i App.jsx för att visa kontaktsektionen på sidan. 
    
htmlFor kopplar etiketten till fältet (i HTML heter det for). Klicka på texten "Namn" – hamnar markören i fältet?

Styla fälten: padding, border, border-radius och font: inherit;
Lägg till :focus-styling och en hover-effekt på knappen*/}
function Kontakt() {
  return (
    <section id="kontakt" className="kontakt">
    {
    /* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p className="kontakt-text">Har du en fråga? Skriv ett meddelande!</p>
      </div>
    
    {/* Höger kolumn: formuläret */}
      <form className="kontakt-form">
        <label htmlFor="namn">Namn</label>
        <input type="text" id="namn" name="namn" placeholder="Ditt namn" />

        <label htmlFor="epost">E-post</label>
        <input
          type="email"
          id="epost"
          name="epost"
          placeholder="namn@exempel.se"
        />

        <label htmlFor="meddelande">Meddelande</label>
        <textarea id="meddelande" name="meddelande" rows="5" />

        <button type="submit">Skicka</button>
      </form>
    </section>
  );
}

export default Kontakt;