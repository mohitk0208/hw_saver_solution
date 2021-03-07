import React from "react";
import ReactDOM from "react-dom";

import "../../css/Modal.css";

export default function Modal({ children, open, onClose }) {
	if (!open) return null;

	return ReactDOM.createPortal(
		<>
			<div className="overlay" />
			<div className="modal">{children}</div>
			<p className="modal-close-btn" onClick={onClose} >x</p>
		</>,
		document.getElementById("modal")
	);
}
