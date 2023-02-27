import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/base'>Base</Link>
					</li>
					<li>
						<Link to='/toppings'>Toppings</Link>
					</li>
					<li>
						<Link to='/order'>Order</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
