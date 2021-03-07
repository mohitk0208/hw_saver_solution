import React from "react";

import "../../css/LoadingSpinner.css";

export default function LoadingSpinner() {
	return (
		<div style={{ width: "100%", height: "100%" }} className="center">
			<div className="loading-spinner"></div>
		</div>
	);
}
