import './Hero.css';
import heroBild from '../assets/hero.jpg'; // Importera bilden från assets-mappen

//kommentar: Hero är en React-komponent som tar emot props från sin förälder, App. 
// Props är ett sätt att skicka data från en komponent till en annan i React. 
// I detta fall skickas strängen "Hero Niki" som värde för prop-namnet "namn".

// Hero är barnkomponent till App. React skickar in props-objektet från
// <Hero namn="Hero Niki" />; destruktureringen hämtar egenskapen "namn".
// Samma sak kunde skrivas function Hero(props) och användas som props.namn.
function Hero({ namn }) {
    // section omsluter hela hero-området. className kopplar elementet
    // till CSS-selektorn .hero i Hero.css.
    return (
        <section className="hero">

            <div className="hero-innehall"> {/*  Låda  */}
                {/* Klammersyntaxen {namn} skriver prop-värdet in i JSX-texten.
                    Om App skickar "Hero Niki" visas "Denna hero heter Hero Niki". */}
                <p className="hero-intro">Denna hero heter {namn}</p>
                 {/* id är ett unikt ankare på sidan. En länk till #hero-titel kan
                     hoppa hit; id påverkar inte i sig elementets utseende. */}
                 <h2 id="hero-titel">Jag lär mig att bygga för webben.</h2>
                <p className="hero-text">Välkommen till min portfolio, delar med mig det jag lär mig.</p>

                {/* CTA:n går till projektsektionen; tidigare länktext och mål:
                <a href="#hero-valkommen" className="hero-knapp">Lär dig mer</a>
                */}
                <a href="#projekt" className="hero-knapp">Se mina projekt</a>
            </div>
            
            {/* Bilden kommer från en import, inte från en prop. */}
            {/* alt är en textbeskrivning för tillgänglighet och visas om bilden inte kan laddas. */}
            <img src={heroBild} alt="Hero-bild" className="hero-bild" />

            
        </section>
    );
}

// Standardexport gör att App.jsx kan importera Hero med import Hero from "...".
export default Hero;
