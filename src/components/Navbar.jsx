// Läser in CSS som formaterar navigationsmenyn och dess länkar.
import './Navbar.css';

// Navbar är en funktionskomponent utan props; menyns text och länkar är fasta här.
function Navbar() {
  return (
    // nav markerar en navigationsdel så webbläsare och hjälpmedel förstår dess roll.
    <nav className="navbar">
      {/* span grupperar logotyptexten utan att skapa en egen blockrad. */}
      <span className="logo">Donika</span>
      <div className="lankar">
        {/* href="#" pekar till sidans början. De andra href-värdena är fragmentlänkar:
            de söker efter ett element med matchande id på samma sida. Just nu saknas
            id="om-mig", och id="kontakt" finns i Footer men Footer renderas inte i App. */}
        <a href="#">Hem</a> {/* // För att länken ska hoppa någonstans måste ett sådant id finnas. 
        // Om du vill att länken ska hoppa till en viss del av sidan, se till att det finns ett element med motsvarande id.
        //Man lägger till element med id="om-mig" i OmMig-komponenten och id="kontakt" i Footer-komponenten. 
        // När dessa element finns på sidan kommer länkarna att fungera korrekt och hoppa till respektive sektion när de klickas. */}
        
        <a href="#projekt">Projekt</a> {/* För att länken ska hoppa någonstans måste ett sådant id finnas. Om du vill att länken ska hoppa till en viss del av sidan, se till att det finns ett element med motsvarande id. Man lägger till element med id="projekt" i Projekt-komponenten. När detta element finns på sidan kommer länken att fungera korrekt och hoppa till sektionen när den klickas. */}
        
        <a href="#om-mig">Om mig</a>
        
        <a href="#kontakt">Kontakt</a>
        {/* kontakt betyder att webbläsaren ska leta efter ett HTML-element på samma sida med id="kontakt". Det är en vanlig HTML-funktion, inte något särskilt React gör.  */}
      </div>
    </nav>
  );
}

// Gör Navbar tillgänglig för import i exempelvis App.jsx.
export default Navbar;