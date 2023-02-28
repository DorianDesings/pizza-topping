import { Navigate } from 'react-router-dom';
import List from '../../components/list/List';
import Title from '../../components/title/Title';
const toppings = [
	'Cheese',
	'Peperoni',
	'Mushroom',
	'Onion',
	'Sausage',
	'Black Olives',
	'Tomato',
	'Pineaple',
	'Bacon',
	'Meat',
	'Peppers',
	'Chicken',
	'Ham'
];
const Toppings = ({ pizza, setPizza }) => {
	return (
		<>
			{!pizza.base && <Navigate to='/base' />}
			<Title title='Select your favourite toppings' />
			<List items={toppings} pizza={pizza} setPizza={setPizza} />
		</>
	);
};

export default Toppings;
