import { useState } from "react";

export default function Counter() {
	const [counter, setCouner] = useState(0);
	return (
		<>
			<h1>This is counter app</h1>
			<div id="counter-value">{counter}</div>
			<button id="increment-btn" onClick={() => setCouner(counter + 1)}>
				Increment
			</button>
			<button
				id="decrement-btn"
				onClick={() => setCouner(!counter ? counter : counter - 1)}
			>
				Decrement
			</button>
		</>
	);
}
