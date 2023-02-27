import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Router />
		</BrowserRouter>
	);
};

export default App;
