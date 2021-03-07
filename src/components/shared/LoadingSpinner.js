import React from "react";

import "../../css/LoadingSpinner.css";
import Modal from "./Modal";

export default function LoadingSpinner({ asOverlay }) {
	// if (asOverlay)
	// 	return (
	// 		<Modal>
	// 			<div style={{ width: "100%", height: "100%" }} className="center">
	// 				<div className="loading-spinner"></div>
	// 			</div>
	// 		</Modal>
	// 	);

	return (
		<div style={{ width: "100%", height: "100%" }} className={`center ${asOverlay && "asOverlay"}`}>
			<div className="loading-spinner"></div>
		</div>
	);
}
