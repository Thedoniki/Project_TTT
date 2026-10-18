// Importera komponentens egna CSS-regler. CSS-filen ändrar utseendet, inte props/data.
import './OmMig.css';
import donikaBild from '../assets/donikaHero1.png'; // Importerar bilden donikaHero1.jpg från assets-mappen. Bilden kan användas i JSX som {donikaBild}.

// OmMig är en funktionskomponent. Den tar inga parametrar, alltså används inga props här.
function OmMig() {
  return (

  /* <section> grupperar innehållet i OmMig som en egen sektion på sidan.
    id="om-mig" gör sektionen till målet för Navbar-länken href="#om-mig".
    Tidigare kunde ett fragment (<>...</>) gruppera elementen utan att lägga
    till ett HTML-element, men ett fragment kan inte ha ett id och är därför
    inte lämpligt när sektionen ska vara ett länkmål. */
    
   <section id="om-mig">
      <img
        className="om-mig-bild" 
        src={donikaBild} // src anger bildens adress. Här används den importerade bilden donikaBild.
        alt="Bild av Donika."
      />

      <div className="om-mig-innehall">
        <h2>Om mig</h2>
        <p className="om-mig-text">
          Jag heter Donika och går på Tech School, där jag lär mig att bygga för
          webben. Den här sidan är mitt första projekt i React.
        </p>
        <p>
          Här lär jag mig att bygga sidor med komponenter och att spara min kod
          på GitHub.
        </p>

 <h3>Det här lär jag mig i kursen</h3>
        <ul className="om-mig-lista">
          <li>React</li>
          <li>JavaScript</li>
          <li>REST API</li>
        </ul>
          </div>

    
      {/* className kopplar JSX-elementet till CSS-klassen .h1 i OmMig.css.
          className används i React i stället för HTML-attributet class.
            <h1 className="h1">Hej, jag heter Donika!</h1>*/}
    
      {/* Samma koppling gäller .p. Textinnehållet är skrivet direkt här, inte i CSS. 
       <p className="p" >Välkommen till min portfoliosida.</p>
      */}
     
      {/* br skapar en radbrytning. För layoutavstånd brukar CSS-marginaler vara
          lättare att justera än flera radbrytningar. */}
      
      {/* href anger länkens mål. En fullständig adress navigerar till en annan webbplats. 
      <a href="https://google.se">Klicka här</a>
      */}
      
     
      {/* src anger bildens adress och alt beskriver bilden för skärmläsare
          eller om bilden inte kan visas. "bild.jpg" är en relativ sökväg.
        
           <img className="om-mig-bild" src="bild.jpg" alt="En beskrivning av bilden" /> 
           */}
     
      {/* <br /> */}
</section>
   // </>
  );
}

// Gör komponenten tillgänglig för import, till exempel i App.jsx.
export default OmMig;