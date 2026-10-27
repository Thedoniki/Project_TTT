import "./ProjektKort.css";


// teknik = [] betyder att kortet kan visas även om projektet saknar tekniktaggar.
function ProjektKort({ titel, text, bild, lank, teknik = [] }) {
  return (
    <article className="projekt-kort">
      {/* Bilden fyller nu en konsekvent kortyta via aspect-ratio i ProjektKort.css. */}
      <img className="projekt-bild" src={bild} alt="" />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{text}</p>

        <ul className="projekt-taggar">
          {/* Tidigare visades ingen tekniklista; varje tagg behöver en unik key. */}
          {teknik.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* Länkens utseende skiljer sig från knappar, men klickytan är tillräckligt stor. */}
        <a className="projekt-knapp" href={lank}>
          Se projektet
        </a>
      </div>
    </article>
  );
}

export default ProjektKort;