import { useState } from "react";

export default function Counter() {
	const [counter, setCouner] = useState(0);
	return (
		<>
			<h1>This is counter app</h1>
			<div id="counter-value">{counter}</div>
			<button id="increament-btn" onClick={() => setCouner(counter + 1)}>
				Increament
			</button>
			<button
				id="decreament-btn"
				onClick={() => setCouner(!counter ? counter : counter - 1)}
			>
				Decreament
			</button>
		</>
	);
}
