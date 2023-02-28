import Button from '../../components/button/Button';
import List from '../../components/list/List';
import Title from '../../components/title/Title';

const bases = ['Normal', 'Thin', 'Chicago', 'Gluten Free'];

const Base = ({ pizza, setPizza }) => {
	return (
		<>
			<Title title='Select a pizza base' />
			<List items={bases} pizza={pizza} setPizza={setPizza} />
			{pizza.base && (
				<>
					<p>You selected {pizza.base.toUpperCase()} base</p>
					<Button link='/toppings' text='Continue' />
				</>
			)}
		</>
	);
};

export default Base;
