import { useState } from "react";

function Toggle() {
	const [visas, setVisas] = useState(false);

	return (
		<>
			{/* Tidigare inline-stilar:
			<div style={{ backgroundColor: visas ? "#c9baba" : "#474343", color: visas ? "#fff" : "#5f8ca1" }}>
				<button onClick={() => setVisas(!visas)}>
					{visas ? "Visa mindre" : "Visa mer"}
				</button>
				{visas && (
					<p>
						Jag heter Donika och går på Tech School, där jag lär mig att bygga för
						webben. Den här sidan är mitt första projekt i React.
					</p>
				)}
			</div>
			*/}
			{/* Nu styr CSS-klassen färgerna enligt sajtens gemensamma palett. */}
			<div className="om-mig-toggle">
				<button
					type="button"
					aria-expanded={visas}
					onClick={() => setVisas(!visas)}
				>
					{visas ? "Visa mindre" : "Visa mer"}
				</button>
				{visas && (
					<p>
						Jag heter Donika och går på Tech School, där jag lär mig att bygga för
						webben. Den här sidan är mitt första projekt i React.
					</p>
				)}
			</div>
		</>
	);
}
export default Toggle;
