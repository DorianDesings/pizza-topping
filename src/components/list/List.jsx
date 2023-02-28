import { StyledItem, StyledList } from './styles';

const List = ({ items, pizza, setPizza }) => (
	<StyledList>
		{items.map(item => {
			return (
				<StyledItem
					onClick={() => setPizza({ ...pizza, base: item })}
					key={item}
				>
					{item}
				</StyledItem>
			);
		})}
	</StyledList>
);

export default List;
