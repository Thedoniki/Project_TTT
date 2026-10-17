// Tar emot props-objektet och plockar ut egenskapen namn.
// Används i App som <Halsning namn="TheDoniki" />.
function Halsning({ namn }) {
  return(
  // Fragmentet behövs eftersom komponenten returnerar mer än ett element.
  <>
  {/* {namn} infogar prop-värdet i texten; värdet kommer från komponentens förälder. */}
  <p>Hälsningar kära, {namn}!</p>
    {/* br lägger till en radbrytning mellan de här elementen. */}
    <br /><p>Hälsning.jsx</p>
    </>
);}

// Standardexporten gör att andra filer kan importera Halsning.
export default Halsning;