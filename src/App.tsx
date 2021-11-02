import "./App.scss";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';

function App() {
    <Router>
		<Switch>
		  <Route path="/" exact component={HomePage} />
		</Switch>
	</Router>
}

export default App;
