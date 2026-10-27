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
		<>
			{/* Tidigare inline-layout och färgkodning:
			<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
				<button onClick={minska}> - </button>
				<span style={{ color: antal > 0 ? 'green' : 'red' }}>{antal}</span>
				<button onClick={() => setAntal((current) => current + 1)}>+</button>
				<button onClick={() => setAntal(0)}>Nollställ</button>
			</div>
			*/}
			{/* Klassnamnet ger gemensam styling; output och aria-attribut beskriver räknaren för hjälpmedel. */}
			<div className="raknare" role="group" aria-label="Räknare">
				<button type="button" onClick={minska} aria-label="Minska">
					−
				</button>

				<output aria-live="polite" aria-label="Aktuellt värde">
					{antal}
				</output>

				<button
					type="button"
					onClick={() => setAntal((current) => current + 1)}
					aria-label="Öka"
				>
					+
				</button>

				<button type="button" onClick={() => setAntal(0)}>
					Nollställ
				</button>
			</div>
		</>
	);
}



// Gör komponenten tillgänglig för import i andra filer.
export default Raknare;