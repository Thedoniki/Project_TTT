import "./ProjektKort.css";


//ProjektKort är en mall. Kortet bestämmer hur ett kort ser ut – men inte vad som står i det. Det får det veta genom props.
function ProjektKort({ titel, text, bild, lank }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt="" />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{text}</p>

<a className="projekt-knapp" href={lank}>
    Se projektet
    </a>
    
    
      </div>
    </article>
  );
}

export default ProjektKort;