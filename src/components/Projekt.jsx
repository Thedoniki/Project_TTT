import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import { useState } from "react";
import bild11 from "../assets/bild1.png";
import bild22 from "../assets/bild2.png";
import heroBild from "../assets/hero.jpg";
import bookStoreImg from "../assets/bookstore.png";

// Varje projekt har en teknik-array så filtret kan jämföra exakta tekniknamn.
const projektLista = [
  {
    id: 1,
    titel: "Min portfolio GitHub startsida",
    text: "Sidan du tittar på nu. Byggd med React och CSS.",
    bild: bild11,
    lank: "https://github.com/Thedoniki/",
    // Tidigare var teknik en textsträng, inte en array.
    teknik: ["Multiple"],
  },
  {
    id: 2,
    titel: "Kontaktformulär",
    text: "Formulär med useState, validering och tackmeddelande.",
    bild: bild22,
    lank: "/kontakt",
    // Tidigare: teknik: "React,CSS" – separata värden gör React-filtret träffsäkert.
    teknik: ["React", "CSS"],
  },
  {
    id: 3,
    titel: "Statisk sida",
    text: "Min första sida i ren HTML och CSS.",
    bild: bild22,
    lank: "/",
    // Tidigare: teknik: "HTML, CSS".
    teknik: ["HTML", "CSS"],
  },
  {
    id: 4,
    titel: "BookStore",
    text: "En webbaserad bokhandel där man kan bläddra bland böcker, se detaljer och lägga till, redigera eller ta bort böcker. Applikationen är byggd med Spring Boot, Mustache-mallar och en MySQL-databas. I den här applikationen syns flera objektorienterade principer och mönster. De används i olika grad — vissa är tydliga, medan andra mest finns som en struktur att bygga vidare på. I den här applikationen syns flera objektorienterade principer och mönster. De används i olika grad — vissa är tydliga, medan andra mest finns som en struktur att bygga vidare på.",
    bild: bookStoreImg,
    lank: "/projekt-beskrivning-sida",
    // Tidigare låg alla tekniker i en textsträng; nu kan varje teknik visas separat.
    teknik: ["Spring Boot", "Mustache-mallar", "MySQL"],
  },
  {
  id: 5,
  titel: "Min sida",
  text:"Räknare",
  bild: heroBild,
  lank: "/#raknare",
  teknik: ["React", "CSS", "Git"],
},
];

function Projekt() {
  // State håller reda på aktivt filter och triggar en ny rendering vid knapptryck.
  const [valtFilter, setValtFilter] = useState("Alla");
  // Visa alla projekt eller bara projekt som innehåller den valda tekniken.
  const synligaProjekt = projektLista.filter(
    (p) => valtFilter === "Alla" || p.teknik.includes(valtFilter)
  );

  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      {/* Knapparna sätter filtervalet; aria-pressed visar vilken knapp som är aktiv. */}
      <div className="projekt-filter" aria-label="Filtrera projekt efter teknik">
        {["Alla", "React"].map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={valtFilter === filter}
            onClick={() => setValtFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projekt-lista">
        {/* Tidigare mappades projektLista direkt:
        {projektLista.map((p) => (
          <ProjektKort key={p.id} titel={p.titel} text={p.text} bild={p.bild} lank={p.lank} />
        ))}
        */}
        {synligaProjekt.map((p) => (
          <ProjektKort
            key={p.id}
            titel={p.titel}
            text={p.text}
            bild={p.bild}
            lank={p.lank}
            teknik={p.teknik} //prop
          />
        ))}
      </div>
    </section>
  );
}

export default Projekt;
