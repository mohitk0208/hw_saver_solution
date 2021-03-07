import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import CenteredContainer from "./CenteredContainer";

import "../../css/Signup.css"

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const { signup } = useAuth();

	const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError("passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/")
            

		} catch {
			setError("Failed to create an account.");
		} finally {
			setLoading(false);
		}
    }
    

	return (
		<CenteredContainer>
			<div className="card">
				{error && alert(error)}
				<form className="form" onSubmit={handleSubmit}>
					<h2 className="form__heading">Signup</h2>
					<hr />
					<label className="label">Email</label>
					<input className="input" type="email" ref={emailRef} required />

					<label className="label">Password</label>
					<input className="input" type="password" ref={passwordRef} required />

					<label className="label" >Confirm Password</label>
					<input className="input" type="password" ref={confirmPasswordRef} required />

					<button className="btn btn-primary" disabled={loading} type="submit">
						Sign Up
					</button>
				</form>

				<div className="card__footer">
					Already have an account ?  <Link to="/login">Log In</Link>
				</div>
			</div>
		</CenteredContainer>
	);
}
