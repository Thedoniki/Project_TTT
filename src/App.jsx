import Navbar from './components/Navbar'; //importerar Navbar-komponenten från filen Navbar.jsx i components-mappen
import Header from './components/Header'; // importerar Header-komponenten från filen Header.jsx i components-mappen
import Valkommen from "./components/Valkommen";
import Halsning from './components/Halsning';
import OmMig from './components/OmMig';
import Hero from './components/Hero';
import Footer from './components/Footer';// Importen gör komponenten tillgänglig i App.jsx. Sökvägen pekar på filen där Footer exporteras.
import Intressen from './components/Intressen';
import Projekt from './components/Projekt';



// Kommentar: App är en React-komponent som fungerar som förälder till de andra komponenterna.
// Den importerar och renderar Navbar, Header, Valkommen, Halsning, OmMig, Hero och Footer.
// Props skickas från App till sina barnkomponenter för att överföra data.

// Import betyder att komponenten hämtas från en annan fil. Sökvägarna börjar med
// ./ eftersom komponentfilerna ligger i undermappen components bredvid App.jsx.
function App() {
  return (
    // Fragmentet omsluter sidans komponenter utan att skapa ett extra HTML-element.
    // Fragment används när man vill returnera flera element från en komponent utan att lägga till en extra div eller section i DOM:en.
    <>
      {/* Varje komponent blir en del av sidans innehåll på den plats där den står.
          Navbar får inga props eftersom den används utan attribut. */}
      <Navbar />

      {/* App är föräldern: attributen här skickas som props till Header.
          Prop-namnen (namn, titel, stad) är nycklar; värdena är strängar.
          Header använder just nu namn och titel; stad skickas men visas inte. */}
      <Header namn="Niki" titel="Overachever" stad="Helsingborg" />

      {/*<Valkommen />*/}

      {/* OmMig får inga props här; dess text är skriven direkt i OmMig.jsx.
          OmMig.css används därifrån för utseendet, inte för att skicka data. */}
      {/*<OmMig />*/}

      {/* Detta är samma prop-mönster som för Hero: Halsning får prop:en namn
          med värdet "TheDoniki". */}
      {/*<Halsning namn="TheDoniki" />*/}

      {/* Skickar strängen "Hero Niki" under prop-namnet namn.
          Hero-komponenten tar emot den och visar den i sin introduktion. */}
      <Hero namn="Hero Niki" />
      {/* Intressen-komponenten renderas här utan props. */}
      <Projekt />
      {/*<Intressen />*/}
      {/* Footer renderas längst ned. Dess id="kontakt" är målet för Navbar-länken
          href="#kontakt", så webbläsaren kan hoppa hit när länken klickas. */}
      <Footer />

    </>
  );
}

// export default gör att main.jsx och andra filer kan importera App utan klammerparenteser.
export default App;

/* App fungerar som sidans komposition: den importerar komponenterna och bestämmer
   vilka som visas och i vilken ordning. Props skickas från förälder till barn. */

/* Footer importeras och renderas längst ned ovanför. Dess id kontakt gör att
   navigeringslänken kan hoppa till sidfoten. */
