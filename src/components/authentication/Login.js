import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LoadingSpinner from "../shared/LoadingSpinner";
import CenteredContainer from "./CenteredContainer";

import "../../css/Login.css"

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/");
		} catch {
			setError("Failed to login");
		} finally {
			setLoading(false);
		}
	}

	return (
		<CenteredContainer>
			{loading && <LoadingSpinner asOverlay />}
			<div className="card">
				{error && alert(error)}
				<form className="form" onSubmit={handleSubmit}>
					<h2 className="form__heading">Login</h2>
					<hr />
					<label className="label">Email</label>
					<input className="input" type="email" ref={emailRef} required />

					<label className="label">Password</label>
					<input className="input" type="password" ref={passwordRef} required />

					<button className="btn btn-primary" disabled={loading} type="submit">
						Log In
					</button>
				</form>

				<div className="card__footer">
					Don't have an account ? <Link to="/signup">Sign Up</Link>
				</div>
			</div>
		</CenteredContainer>
	);
}
