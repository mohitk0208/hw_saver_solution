import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import CenteredContainer from "./CenteredContainer";

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const { signup, currentUser } = useAuth();

	const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		// console.log(emailRef.current.value);
		// console.log(passwordRef.current.value);
		// console.log(confirmPasswordRef.current.value);

		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			return setError("passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
            
            
            console.log(`${currentUser}`);
            history.push("/")
            

		} catch {
			setError("Failed to create an account.");
		} finally {
			setLoading(false);
		}
    }
    
    console.log(currentUser);

	return (
		<CenteredContainer>
			<div>
				{error && alert(error)}
				<form onSubmit={handleSubmit}>
					<h2>Signup</h2>
					<label>Email</label>
					<input type="email" ref={emailRef} required />

					<label>Password</label>
					<input type="password" ref={passwordRef} required />

					<label>Confirm Password</label>
					<input type="password" ref={confirmPasswordRef} required />

					<button disabled={loading} type="submit">
						Sign Up
					</button>
				</form>

				<div>
					Already have an account?<Link to="/login">Log In</Link>
				</div>
			</div>
		</CenteredContainer>
	);
}
