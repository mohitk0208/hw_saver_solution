import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";

import Login from "./authentication/Login";
import "./App.css";
import Signup from "./authentication/Signup";
import PrivateRoute from "./authentication/PrivateRoute";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					{/* pages routes */}
					<PrivateRoute path="/" component={Home} />

					{/* Auth routes */}
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
