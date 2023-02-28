import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Router from './router/Router';

const App = () => {
	const [pizza, setPizza] = useState({ base: '', toppings: [] });
	return (
		<BrowserRouter>
			<Menu />
			<Header />
			<Router pizza={pizza} setPizza={setPizza} />
		</BrowserRouter>
	);
};

export default App;
