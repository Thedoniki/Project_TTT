import Header from "../components/Header"; // importerar Header-komponenten från filen Header.jsx i components-mappen
import Hero from "../components/Hero"; // importerar Hero-komponenten från filen Hero.jsx i components-mappen
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";
function Hem() {
	return (
		<>
			<Header namn="Niki" titel="Overachever" />
			<Hero namn="Hero Niki" />
			<Projekt />
			{/* Tidigare wrapper för räknaren:
			<div id="raknare">
				<Raknare />
			</div>
			Nu används en namngiven section så området får en rubrik och tydligare semantik.
			*/}
			<section className="raknare-sektion" id="raknare" aria-labelledby="raknare-rubrik">
				<h2 id="raknare-rubrik">Prova räknaren</h2>
				<Raknare />
			</section>
			{/* <Toggle /> */}
		</>
	);
}

export default Hem;
