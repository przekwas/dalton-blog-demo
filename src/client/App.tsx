import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Compose from './pages/Compose';
import Edit from './pages/Edit';
import Navbar from './components/Navbar';

const App: React.FC<AppProps> = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<main className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/details/:id" component={Details} />
					<Route exact path="/compose" component={Compose} />
					<Route exact path="/edit/:id" component={Edit} />
				</Switch>
			</main>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
