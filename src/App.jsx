import Navbar from "./components/Navbar"; // importerar Navbar-komponenten från filen Navbar.jsx i components-mappen
import Footer from "./components/Footer"; // Importen gör komponenten tillgänglig i App.jsx. Sökvägen pekar på filen där Footer exporteras.

// App bestämmer vilka delar av webbplatsen som alltid visas och vilken sida som
// visas för den aktuella adressen. Hem och OmMig är sidkomponenter i pages-mappen.
//
// För att Routes och Route ska fungera måste de importeras från react-router-dom,
// och Hem och OmMig måste importeras från sina filer. Exempel:
import { Routes, Route } from "react-router-dom";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import Kontakt from "./pages/Kontakt"; // Importerar Kontakt-komponenten från filen Kontakt.jsx i pages-mappen. Detta gör att komponenten kan användas i App-komponenten och visas när användaren navigerar till /kontakt.
import ProjektBeskrivningSida from "./pages/ProjektBeskrivning";
import ProjektSida from "./pages/ProjektSida";
import EjHittad from "./pages/EjHittad";
function App() {
	return (
		// Fragmentet omsluter sidans komponenter utan att skapa ett extra HTML-element.
		// Fragment används när man vill returnera flera element från en komponent utan att lägga till en extra div eller section i DOM:en.
		<>
			{/* Varje komponent blir en del av sidans innehåll på den plats där den står.
          Navbar får inga props eftersom den används utan attribut. */}
			<Navbar />

			{/* Routes väljer en Route utifrån webbadressen. element anger vilken
          React-komponent som ska visas för respektive sökväg. Kod som skrivs utanför Routes
          syns på alla sidor eg. Navbar & Footer */}
			<Routes>
        <Route path="/projekt" element={<ProjektSida />} />
				<Route path="/" element={<Hem />} />
				<Route path="/om-mig" element={<OmMig />} />
				<Route path="/kontakt" element={<Kontakt />} />
        <Route path="/projekt-beskrivning-sida" element={<ProjektBeskrivningSida />}/>
        <Route path="*" element={<EjHittad />} />  {/* läggs sist */}

			</Routes>

			{/*
        App är föräldern: attributen här skickas som props till Header.
        Prop-namnen (namn, titel, stad) är nycklar; värdena är strängar.
        Header använder just nu namn och titel; stad skickas men visas inte.
        <Header namn="Niki" titel="Overachever" stad="Helsingborg" />
        Flyttad till: pages/Hem.jsx
      */}

			{/* <Valkommen /> */}

			{/*
        OmMig får inga props här; dess text är skriven direkt i OmMig.jsx.
        OmMig.css används därifrån för utseendet, inte för att skicka data.
        <OmMig />
      */}

			{/*
        Detta är samma prop-mönster som för Hero: Halsning får prop:en namn
        med värdet "TheDoniki".
        <Halsning namn="TheDoniki" />
      */}

			{/*
        Skickar strängen "Hero Niki" under prop-namnet namn.
        Hero-komponenten tar emot den och visar den i sin introduktion.

                <Hero namn="Hero Niki" /> <------ Flyttad till: pages/Hem.jsx
      */}

			{/*
        <Projekt /> <------ Flyttad till: pages/Hem.jsx

        Intressen-komponenten renderas här utan props.

        <Intressen />
      */}

			{/* Footer renderas längst ned. Dess id="kontakt" är målet för Navbar-länken
          href="#kontakt", så webbläsaren kan hoppa hit när länken klickas. */}
			<Footer />
		</>
	);
}

// export default gör att main.jsx och andra filer kan importera App utan klammerparenteser.
export default App;

/* BrowserRouter ligger runt App i main.jsx och gör att Routes kan läsa
   webbadressen och visa rätt sida. */

/* Footer importeras och renderas längst ned ovanför. Dess id kontakt gör att
   navigeringslänken kan hoppa till sidfoten. */
