import { Route, Routes } from 'react-router-dom';
import Base from '../pages/base/Base';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/base' element={<Base />} />
		</Routes>
	);
};

export default Router;
