import { Route, Routes } from 'react-router-dom';
import Base from '../pages/base/Base';
import Home from '../pages/home/Home';
import Order from '../pages/order/Base';
import Toppings from '../pages/toppings/Toppings';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/base' element={<Base />} />
			<Route path='/toppings' element={<Toppings />} />
			<Route path='/order' element={<Order />} />
		</Routes>
	);
};

export default Router;
