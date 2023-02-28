import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/404/Toppings';
import Base from '../pages/base/Base';
import Home from '../pages/home/Home';
import Order from '../pages/order/Base';
import Toppings from '../pages/toppings/Toppings';

const Router = ({ pizza, setPizza }) => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route
				path='/base'
				element={<Base pizza={pizza} setPizza={setPizza} />}
			/>
			<Route path='/toppings' element={<Toppings />} />
			<Route path='/order' element={<Order />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default Router;
