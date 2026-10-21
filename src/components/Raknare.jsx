import { useState } from 'react';

/**
 * En räknare där användaren kan öka eller minska ett tal.
 *
 * @component
 * @example
 * return (
 *   <Raknare />
 * )
 */


function Raknare() {
  // antal är räknarens aktuella värde; setAntal uppdaterar värdet.
  const [antal, setAntal] = useState(0);
  
  function minska() {
    if (antal > 0) {
        setAntal(antal - 1);
    }
}
  return (
    // Flexbox placerar knapparna och värdet bredvid varandra med mellanrum.
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
 
        <button onClick={minska}> - </button>

        {/* Visar det aktuella värdet från komponentens state. 
        Uttrycket ? : kallas ternary operator och väljer ett av två värden beroende på villkoret.*/}
        <span style={{ color: antal > 0 ? 'green' : 'red' }}>
            {antal}
            </span>

        {/* Uppdateringsfunktionen utgår från föregående värde och ökar det med ett. */}
        <button onClick={() => setAntal((current) => current + 1)} aria-label="Öka">
             + </button>

        <button onClick={() => setAntal(0)}>
            Nollställ</button>
      
    </div>
  );



}




// Gör komponenten tillgänglig för import i andra filer.
export default Raknare;