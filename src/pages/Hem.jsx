import Header from '../components/Header'; // importerar Header-komponenten från filen Header.jsx i components-mappen
import Hero from '../components/Hero'; // importerar Hero-komponenten från filen Hero.jsx i components-mappen
import Projekt from '../components/Projekt';
import Toggle from '../components/Toggle'; // importerar Toggle-komponenten från filen Toggle.jsx i components-mappen
import Raknare from '../components/Raknare'; // importerar Raknare-komponenten från filen Raknare.jsx i components-mappen

function Hem() {
    return (
        <>
        <Header namn="Niki" titel="Overachever" />
        <Hero namn="Hero Niki" />
        <Projekt />
        <Raknare /> {/* Renderar Raknare-komponenten här */}
        <Toggle />
        </>
    );
    }

    export default Hem;