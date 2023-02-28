import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.ul`
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
	display: flex;
	justify-content: space-between;
	width: 350px;
	color: aliceblue;
`;

const StyledMenuItem = styled.li`
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
`;

const StyledMenuLink = styled(Link)`
	text-decoration: none;
	color: aliceblue;
`;

export { StyledMenu, StyledMenuItem, StyledMenuLink };
