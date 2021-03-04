import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";

import Login from "./authentication/Login";
import "./App.css";
import Signup from "./authentication/Signup";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
