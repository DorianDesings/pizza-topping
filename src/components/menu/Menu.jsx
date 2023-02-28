import { StyledMenu, StyledMenuItem, StyledMenuLink } from './styles';

const Menu = () => {
	return (
		<header>
			<nav>
				<StyledMenu>
					<StyledMenuItem>
						<StyledMenuLink to='/'>Home</StyledMenuLink>
					</StyledMenuItem>
					<StyledMenuItem>
						<StyledMenuLink to='/base'>Base</StyledMenuLink>
					</StyledMenuItem>
					<StyledMenuItem>
						<StyledMenuLink to='/toppings'>Toppings</StyledMenuLink>
					</StyledMenuItem>
					<StyledMenuItem>
						<StyledMenuLink to='/order'>Order</StyledMenuLink>
					</StyledMenuItem>
				</StyledMenu>
			</nav>
		</header>
	);
};

export default Menu;
