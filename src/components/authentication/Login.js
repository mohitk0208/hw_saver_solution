import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import CenteredContainer from "./CenteredContainer";

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
			history.push("/")

		} catch {
			setError("Failed to login");
		} finally {
			setLoading(false);
		}
	}

	return (
		<CenteredContainer>
			<div>
				{error && alert(error)}
				<form onSubmit={handleSubmit}>
					<h2>Login</h2>
					<label>Email</label>
					<input type="email" ref={emailRef} required />

					<label>Password</label>
					<input type="password" ref={passwordRef} required />

					<button disabled={loading} type="submit">
						Log In
					</button>
				</form>

				<div>
					Don't have an account?<Link to="/signup">Sign Up</Link>
				</div>
			</div>
		</CenteredContainer>
	);
}
