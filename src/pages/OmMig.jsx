// Importera komponentens egna CSS-regler. CSS-filen ändrar utseendet, inte props/data.
import './OmMig.css';

// OmMig är en funktionskomponent. Den tar inga parametrar, alltså används inga props här.
function OmMig() {
  return (

  /* <section> grupperar innehållet i OmMig som en egen sektion på sidan.
    id="om-mig" gör sektionen till målet för Navbar-länken href="#om-mig".
    Tidigare kunde ett fragment (<>...</>) gruppera elementen utan att lägga
    till ett HTML-element, men ett fragment kan inte ha ett id och är därför
    inte lämpligt när sektionen ska vara ett länkmål. */
    
   <section id="om-mig">
      {/* className kopplar JSX-elementet till CSS-klassen .h1 i OmMig.css.
          className används i React i stället för HTML-attributet class. */}
      <h1 className="h1">Hej, jag heter Donika!</h1>
      {/* Samma koppling gäller .p. Textinnehållet är skrivet direkt här, inte i CSS. */}
      <p className="p" >Välkommen till min portfoliosida.</p>
      {/* br skapar en radbrytning. För layoutavstånd brukar CSS-marginaler vara
          lättare att justera än flera radbrytningar. */}
      <br />
      {/* href anger länkens mål. En fullständig adress navigerar till en annan webbplats. */}
      <a href="https://google.se">Klicka här</a>
      <br />
      {/* src anger bildens adress och alt beskriver bilden för skärmläsare
          eller om bilden inte kan visas. "bild.jpg" är en relativ sökväg. */}
      <img className="om-mig-bild" src="bild.jpg" alt="En beskrivning av bilden" /> 
      <br />
</section>
   // </>
  );
}

// Gör komponenten tillgänglig för import, till exempel i App.jsx.
export default OmMig;