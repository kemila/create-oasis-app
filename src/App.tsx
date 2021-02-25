import React from "react";
import { createOasis } from "./oasis";
import { main } from "./oasis/test/processystem";

function App() {
	React.useEffect(() => {
		createOasis();
		main();
	}, []);

	return (
		<canvas id="canvas" style={{ width: "100vw", height: "100vh" }}></canvas>
	);
}

export default App;
