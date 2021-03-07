import React from "react";

import "../../css/LoadingSpinner.css";

export default function LoadingSpinner({ asOverlay }) {
	return (
		<div style={{ width: "100%", height: "100%" }} className={`center ${asOverlay && "asOverlay"}`}>
			<div className="loading-spinner"></div>
		</div>
	);
}
