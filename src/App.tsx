import React from "react";
// import { createOasis } from "./oasis";
// import { processSystem } from "./oasis/test/process_system";
// import { processSystem } from "./oasis/test/process_system_demo";
import { threeInit } from "./oasis/test/three/three_demo";

function App() {
	React.useEffect(() => {
		// createOasis();
		// processSystem();
		// processSystem();
		threeInit();
	}, []);

	return (
		<div>111</div>
		// <canvas id="canvas" style={{ width: "100vw", height: "100vh" }}></canvas>
	);
}

export default App;
